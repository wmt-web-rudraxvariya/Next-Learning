import Head from "next/head";
import Link from "next/link";
import { useEffect } from "react";
// import Script from "next/script";
import Layout from "../../components/Layout";
import useSWR from "swr";

export default function SecondPost() {
  const { data, error } = useSWR(
    "https://jsonplaceholder.typicode.com/todos/1",
    fetch
  );
  console.log(data)
  
  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>
  return <div>hello {data.title}!</div>
  return (
    <Layout>
      <Head>
        <title>Second Post</title>
        <meta name="description" content="Free Web tutorials" />
        {/* <Script
          src="https://connect.facebook.net/en_US/sdk.js"
          strategy="lazyOnload"
          onLoad={() =>
            console.log(`script loaded correctly, window.FB has been populated`)
          }
        /> */}
      </Head>
      <div>
        <Link href="/">Go to Home</Link>
        <h1>Second post</h1>
      </div>
    </Layout>
  );
}
