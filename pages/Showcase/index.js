import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import Meta from "../../components/Meta";
import Blurimg from "../../public/images/profile.jpg"

const ShowCase = ({ data }) => {
  const router = useRouter();
  return (
    <>
      <Meta title="USER DATA" description="personal Info of users" />
      <div className="mt-5 flex justify-center flex-wrap">
        {data.map((item, i) => {
          return (
            <div
              key={i}
              className="w-1/3 cursor-pointer h-auto border px-5 py-10 m-5 relative"
              onClick={() => {
                router.push(`Showcase/${item.id}`);
              }}
            >
              <div className="absolute -top-3 -right-3 px-2 bg-blue-800 text-white rounded-full">
                {item.id}
              </div>
              <div className="h-auto">
                <div className="justify-items-end">
                  <Image
                    src={Blurimg}
                    objectFit='contain'
                    alt=""
                    layout="fill"
                    placeholder="blur"
                  />
                </div>
                <br />
                <br />
                <br />
                <span>{item.name}</span>
                <br />
                <span>
                  <a
                    href={`mailto:${item.email}`}
                    className="text-blue-500 hover:underline"
                  >
                    {item.email}
                  </a>
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/comments");
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
}

export default ShowCase;
