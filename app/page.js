import Image from "next/image";
import styles from "./page.module.css";
import Link from 'next/link';

export default function Home() {
  return (
   <>
   <h1 className="test909">Hello world</h1>

   <Link href={'./posts'}>
   Go to posts
   </Link>
   </>
  );
}
