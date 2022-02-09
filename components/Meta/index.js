import Head from "next/head";
import Script from "next/script";
import React from "react";

const Meta = ({
  title = "Next.js Sample Website",
  description = "Learn how to build a personal website using Next.js",
}) => {
  return (
    <Head>
      <title>{title}</title>
      <link rel="icon" href="/favicon.ico" />
      <meta name="description" content={description} />
      <meta
        property="og:image"
        content={`https://og-image.vercel.app/${encodeURI(
          "Next.js Sample Website"
        )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
      />
      <meta
        src="https://fonts.googleapis.com/css2?family=Ubuntu&display=swap"
        rel="stylesheet"
      />
      <meta name="og:title" content={title} />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
};
export default Meta;
