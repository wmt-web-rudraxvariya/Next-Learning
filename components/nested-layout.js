import Head from "next/head";
import Image from "next/image";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Footer from "./Footer/Footer";
import Navbar from "./Navbar/Navbar";
import Link from "next/link";
import Meta from "./Meta";

const name = "Hello world";
export const siteTitle = "Next.js Sample Website";

export default function Layout({ children, home }) {
  return (
    <>
      <Meta />
      <header>
        <Navbar />
      </header>
      <main style={{ minHeight: "86vh" }} className="px-56">
        {children}
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
