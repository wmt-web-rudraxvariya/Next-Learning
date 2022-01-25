import Head from "next/head";
import Link from "next/link";
import { useEffect } from "react";
// import Script from "next/script";
import Layout from "../../components/Layout";

export default function FirstPost() {
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => response.json())
      .then((json) => console.log(json));
  }, []);
  return (
    <>
      <Head>
        <title>First Post</title>
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
        <Link href="/posts/ssg-ssr">Go to ssg</Link>
        <Link href="/posts/pre-rendering">Go to pre rendering</Link>
        <h1>First post</h1>
      </div>
    </>
  );
}
