import { MongoClient } from "mongodb";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

const Blogs = ({ blog }) => {
  return (
    <>
      <div className="flex  flex-wrap justify-center my-10 align-middle">
        {blog.map((item, i) => {
          return (
            <>
              <Link href={`/blog/${item.id}`} key={item.id}>
                <div
                  style={{ cursor: "pointer" }}
                  className="border mx-2 my-2 w-1/2 border-gray-500 rounded-xl p-10"
                >
                  <Image
                    src={item.imgurl}
                    alt=""
                    layout="responsive"
                    objectFit="contain"
                    width="100%"
                    height="100%"
                  />
                  <span className="text-2xl block my-2">{item.title}</span>
                  <span
                    className="text-base h-20"
                    style={{
                      lineClamp: 3,
                      boxOrient: "vertical",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      display: "-webkit-box",
                    }}
                  >
                    {item.desc}
                  </span>
                </div>
              </Link>
            </>
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
