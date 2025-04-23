"use client";

import { revalidatePath } from "next/cache";

const fetchdata = () => {

    const fetchFreeApi = () =>{
      const fetchFreeApi = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/5', {
          next: { revalidate: 30 }
        });
        const data = await response.json();
        console.log(data);
      };
    }
  return (
    <>

    </>
  )
}

export default fetchdata 