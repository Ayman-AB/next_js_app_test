import React from 'react';
import Link from 'next/link';

const page = () => {
  return (
   <>
    <h1>Hello from posts page</h1>
    <Link href={'./posts/onePost'}>
    Go to posts
    </Link>

    <Link href={"/profiles"}>
    <button>Go to Profiles</button>
    </Link>
   </>
  )
}

export default page