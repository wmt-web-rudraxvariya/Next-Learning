import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const SubHeader = () => {
  return (
    <div className="flex items-center py-2 justify-between bg-black md:px-56 px-0">
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
        <div className="space-x-10 text-gray-600">
          <Link href="/Showcase">Showcase</Link>
          <Link href="/Docs">Docs</Link>
          <Link href="/Blogs">Blogs</Link>
          <Link href="/Analytics">Analytics</Link>
          <Link href="/Examples">Examples</Link>
          <Link href="/Enterprise">Enterprise</Link>
          <Link href="/Learn">
            <a className="bg-blue-500 text-white px-4 py-2 rounded-md">Learn</a>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
