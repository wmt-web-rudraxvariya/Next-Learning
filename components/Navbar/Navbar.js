import { Button, Modal, Tabs, Tab } from "react-bootstrap";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";

const SubHeader = () => {
  return (
    <div className="flex relative items-center py-2 justify-between bg-black md:px-56 px-0">
      <div>
        <Link href="/">
          <a className="text-3xl font-semibold text-white">Vercel</a>
        </Link>
      </div>
      <div>
        <span className="text-lg font-semibold text-white">
          Deploy Next.js in seconds →
        </span>
      </div>
    </div>
  );
};
const Navbar = () => {
  const router = useRouter();
  const [auth, setAuth] = useState(false);

  return (
    <>
      <SubHeader />
      <div className="flex justify-between items-center py-3 md:px-56 px-0 border-b-2">
        <div>
          <span
            className="text-2xl cursor-pointer select-none"
            onClick={() => {
              router.push("/");
            }}
          >
            Next.JS
          </span>
        </div>
        <Modal show={auth} onHide={() => setAuth(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Lets Get started</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Tabs
              defaultActiveKey="login"
              id="uncontrolled-tab-example"
              className="mb-3"
            >
              <Tab eventKey="login" title="Login">
                <form className="flex flex-col" id="Blogform">
                  <label htmlFor="title">Username</label>
                  <input
                    type="text"
                    id="title"
                    className="my-4 border-gray-500 border rounded-sm p-2"
                    placeholder="Enter username"
                  />
                  <label htmlFor="imgurl">Password</label>
                  <input
                    type="password"
                    id="imgurl"
                    className="my-4 border-gray-500 border rounded-sm p-2"
                    placeholder="Enter Password"
                  />
                  <Button type="submit" variant="primary">
                    Login
                  </Button>
                </form>
              </Tab>
              <Tab eventKey="signup" title="Signup">
                <form className="flex flex-col" id="Blogform">
                  <label htmlFor="title">Username</label>
                  <input
                    type="text"
                    id="title"
                    className="my-4 border-gray-500 border rounded-sm p-2"
                    placeholder="Enter username"
                  />
                  <label htmlFor="imgurl">Password</label>
                  <input
                    type="password"
                    id="imgurl"
                    className="my-4 border-gray-500 border rounded-sm p-2"
                    placeholder="Enter Password"
                  />
                  <label htmlFor="imgurl">Full Name</label>
                  <input
                    type="text"
                    id="imgurl"
                    className="my-4 border-gray-500 border rounded-sm p-2"
                    placeholder="Enter Name"
                  />
                  <Button type="submit" variant="primary">
                    Sign up
                  </Button>
                </form>
              </Tab>
            </Tabs>
          </Modal.Body>
        </Modal>
        <div className="space-x-10 text-gray-600">
          <Link href="/Showcase">Showcase</Link>
          <Link href="/Showcase">Docs</Link>
          <Link href="/add-blog">Add Blogs</Link>
          <Link href="/blog">Blogs</Link>
          <Link href="/Examples">Examples</Link>
          <Link href="/contact">Contact</Link>
          <Button variant="primary" onClick={() => setAuth(true)}>
            Login
          </Button>
          <Link href="/Learn">
            <a className="bg-blue-500 text-white px-4 py-2 rounded-md">Learn</a>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
