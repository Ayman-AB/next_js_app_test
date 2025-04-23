import React from "react";
import { Suspense } from 'react';
import Loading from './loading';

async function fetchOnePost(id){
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
    const data = await response.json();
    return data;
}

const page = async (props) => {
    const postId = props.params.postId;
    console.log(postId);
    const to = await fetchOnePost(postId);
    console.log(to)
  return (
    <>
      <div
        style={{
          backgroundColor: "white",
          padding: "8px",
          margin: "10px",
          color: "black",
          width: "70%",
        }}
      >
        <h2> hello everyone</h2>
        <h1>This is the onePost Pagesss</h1>
        <Suspense fallback={<Loading/>}>
        <h2>
          Todo Title:<strong> {to && to.title}</strong>
        </h2>
        </Suspense>
      </div>
    </>
  );
};

export default page;
