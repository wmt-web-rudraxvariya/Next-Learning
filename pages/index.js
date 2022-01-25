import Head from "next/head";
import Layout, { siteTitle } from "../components/Layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import Date from "../components/date";

export async function getStaticProps() {
  console.log(getSortedPostsData());
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
export default function Home({ allPostsData }) {
  console.log("asdas",process.env.NEXT_PUBLIC_PWD)
  return (
    <>
      <Head>
        <title>{siteTitle}</title>
       
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hey There! I am a web developer {process.env.NEXT_PUBLIC_PWD}</p>

        <Link href="/posts/first-post">Go To First blog</Link>
        <Link href="/posts/second-post">Go To Second blog</Link>
        <p>
          (This is a sample website - you’ll be building a site like this on{" "}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
// Home.getLayout = function getLayout(page){

//   return(
//     <Layout>
//       <Nested
//     </Layout>
//   )
// }