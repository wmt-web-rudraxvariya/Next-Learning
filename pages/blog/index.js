import { MongoClient } from "mongodb";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

const Blogs = ({ blog }) => {
  const router = useRouter();
  const DeleteBlog = async (id) => {
    const data = await fetch(`/api/deleteblog/${id}`, {
      method: "DELETE",
    });
    const res = await data.json();
    console.log(res.message);
    router.reload();
  };
  useEffect(() => {
    if (blog.length == 0) {
      router.push("/add-blog");
    }
  }, [blog]);

  return (
    <>
      <div className="flex  flex-wrap justify-center my-10 align-middle">
        {blog.map((item, i) => {
          return (
            <div
              key={item.id}
              className="border mx-2 my-2 w-1/2 border-gray-500 rounded-xl p-10"
            >
              <div className="text-left">
                <img src={item.imgurl} alt="" />
                <span className="text-2xl block my-2">{item.title}</span>
                <span className="text-base block ">{item.desc}</span>
                <span className="text-base block">ID: {item.id}</span>
                <button
                  onClick={() => {
                    DeleteBlog(item.id);
                  }}
                  className="bg-red-600 text-white p-2 rounded-md mt-5"
                >
                  Delete blog
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
export async function getServerSideProps() {
  const client = await MongoClient.connect(process.env.NEXT_MONGO_CONNECT);
  const db = client.db();
  const blogsData = db.collection("blogsData");
  const TotalBlogs = await blogsData.find().toArray();
  console.log("TotalBlogs", TotalBlogs);
  client.close();
  return {
    props: {
      blog: TotalBlogs.map((blog) => ({
        title: blog.title,
        imgurl: blog.imgurl,
        desc: blog.desc,
        id: blog._id.toString(),
      })),
    },
  };
}
export default Blogs;
