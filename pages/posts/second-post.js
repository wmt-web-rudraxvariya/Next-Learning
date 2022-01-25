import Head from "next/head";
import Link from "next/link";
import { useEffect } from "react";
// import Script from "next/script";
import Layout from "../../components/Layout";
import useSWR from "swr";
import Meta from "../../components/Meta";

export default function SecondPost() {
  const { data, error } = useSWR(
    "https://jsonplaceholder.typicode.com/todos/1",
    fetch
  );
  console.log(data)
  
  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>
  return (
    <Layout>
      <Meta />
        
      <div>
        <Link href="/">Go to Home</Link>
        <h1>Second post</h1>
      </div>
    </Layout>
  );
}
