import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Modal, Button, Container, Row, Col, Alert } from "react-bootstrap";

const BlogId = () => {
  const router = useRouter();
  const blogId = router.query.blogId;
  const [edit, setEdit] = useState(false);
  const [blogs, setBlogs] = useState([]);
  const [note, setNote] = useState("");
  const [show, setShow] = useState(false);
  const GetBlogData = async () => {
    const data = await fetch(`/api/blogdetail/${blogId}`);
    const Fdata = await data.json();
    setBlogs(Fdata.blogdetail);
  };
  useEffect(() => {
    blogId && GetBlogData();
  }, [blogId]);
  console.log("blogs", blogs);
  const EditBlog = (modal) => {
    setEdit(modal);
  };
  const DeleteBlog = async (id) => {
    const data = await fetch(`/api/deleteblog/${id}`, {
      method: "DELETE",
    });
    const res = await data.json();
    GetBlogData();
    router.push("/blog")
    console.log(res.message);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const UpdatedData = {
      title: e.target[0].value,
      imgurl: e.target[1].value,
      desc: e.target[2].value,
    };
    const FinalData = JSON.stringify(UpdatedData);

    const res = await fetch(`/api/updateblog/${blogs._id}`, {
      body: FinalData,
      headers: {
        "Content-Type": "application/json",
      },
      method: "PUT",
    });
    const resp = await res.json();
    setShow(true);
    setNote(resp.message);
    setEdit(false);
    GetBlogData();
    setTimeout(() => {
      setShow(false);
      setNote("");
    }, 3000);
  };
  return (
    blogs?.length !== 0 && (
      <div>
        <div className="h-1/2 my-4 relative">
          <img
            src={blogs.imgurl}
            className="h-auto w-full object-cover"
            alt=""
          />
        </div>
        <div>
          <h1 className="text-6xl text-center my-5">{blogs.title}</h1>
          <p className="my-5">{blogs.desc}</p>
        </div>
        <Alert show={show} variant="success">
          <Alert.Heading>{note}</Alert.Heading>
          <div className="d-flex justify-content-end">
            <Button onClick={() => setShow(false)} variant="outline-success">
              Close
            </Button>
          </div>
        </Alert>
        <div>
          <button
            className="p-3 bg-slate-600 text-white rounded-lg my-10 hover:bg-slate-700 focus:bg-slate-900"
            onClick={() => EditBlog(true)}
          >
            Edit this Blog
          </button>
        </div>
        <div className="flex gap-10 py-10">
          <Link href="/blog">
            <Button>Read More Blogs</Button>
          </Link>
          <Button
            onClick={() => {
              DeleteBlog(blogs._id);
            }}
            variant="danger"
          >
            Delete blog
          </Button>
        </div>
        <Modal show={edit} onHide={() => EditBlog(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Edit Blog</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form
              className="flex flex-col"
              id="Blogform"
              onSubmit={(e) => {
                handleSubmit(e);
              }}
            >
              <label htmlFor="title">Title of your blog</label>
              <input
                type="text"
                id="title"
                className="mt-2 border-gray-500 border rounded-sm p-2"
                defaultValue={blogs.title}
                placeholder="Enter Title"
              />
              <label htmlFor="imgurl">Cover Image of your blog</label>
              <input
                type="text"
                id="imgurl"
                className="mt-2 border-gray-500 border rounded-sm p-2"
                defaultValue={blogs.imgurl}
                placeholder="Enter Title"
              />
              <label htmlFor="desc">Description of your blog</label>
              <input
                type="text"
                id="desc"
                className="mt-2 border-gray-500 border rounded-sm p-2"
                defaultValue={blogs.desc}
                placeholder="Enter Title"
              />
              <Container>
                <Row>
                  <Col className=" flex mt-3 mb-2 justify-end">
                    <Button
                      variant="secondary"
                      className="mr-3"
                      onClick={() => EditBlog(false)}
                    >
                      Close
                    </Button>
                    <Button variant="primary" type="submit">
                      Save Changes
                    </Button>
                  </Col>
                </Row>
              </Container>
            </form>
          </Modal.Body>
        </Modal>
      </div>
    )
  );
};
// export async function getServerSideProps(context) {
//   const blogId = context.query.blogId;
//   console.log("id", context.query.blogId);
//   const client = await MongoClient.connect(process.env.NEXT_MONGO_CONNECT);
//   const db = client.db();
//   const blogsData = db.collection("blogsData");
//   const TotalBlogs = await blogsData.findOne({
//     _id: ObjectId(blogId),
//   });
//   const allBlogs = JSON.stringify(TotalBlogs);
//   console.log("TotalBlogs", allBlogs);
//   client.close();
//   return {
//     props: {
//       blogs: JSON.parse(allBlogs),
//     },
//   };
// }

export default BlogId;
