import { useRouter } from "next/router";
import React, { useState } from "react";

const AddBlog = () => {
  const router = useRouter();
  const [data, setData] = useState("");
  const handleForm = async (e) => {
    e.preventDefault();
    const blogData = {
      title: e.target.title.value,
      imgurl: e.target.imgurl.value,
      desc: e.target.desc.value,
    };
    const finalData = JSON.stringify(blogData);
    const res = await fetch("/api/blog", {
      body: finalData,
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });
    const result = await res.json();
    document.getElementById("form").reset();
    setData(result.message);
  };
  if (data) {
    setTimeout(() => {
      setData("");
      router.replace("/blog");
    }, 1000);
  }
  return (
    <>
      <div className="border-2 border-gray-300 shadow-2xl drop-shadow-2xl rounded-lg w-1/2  p-5 m-5 ml-auto mr-auto ">
        <h1 className="my-5 font-semibold text-xl text-gray-600">
          Add blogs details
        </h1>
        <form
          onSubmit={(e) => {
            handleForm(e);
          }}
          id="form"
          className="flex flex-col"
        >
          <label htmlFor="title">Title of blog</label>
          <input
            type="text"
            id="title"
            placeholder="Title of your blog"
            className="border-2 rounded-md p-2 my-3"
          />
          <label htmlFor="imgurl">Image of blog</label>
          <input
            type="text"
            id="imgurl"
            placeholder="Image url"
            className="border-2 rounded-md p-2 my-3"
          />
          <label htmlFor="desc">Description of blog</label>
          <input
            type="text"
            id="desc"
            placeholder="description of blog"
            className="border-2 rounded-md p-2 my-3"
          />
          {data ? (
            <div className="w-full  mx-auto bg-green-800 text-center text-white rounded-xl p-2">
              <h1>blog added succesfully</h1>
            </div>
          ) : (
            ""
          )}
          <button
            type="submit"
            className="bg-blue-500 text-white p-3 rounded-xl my-5"
          >
            Submit Blog
          </button>
        </form>
      </div>
      <style jsx>{`
        label {
          color: grey;
          margin-right: 10px;
        }
      `}</style>
    </>
  );
};

export default AddBlog;
