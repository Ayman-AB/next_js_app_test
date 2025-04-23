import React from 'react';

export const metadata = {
    title: "articles title"
};

function test({children}){
  return (
    <>
    <div>
        <h1>layout of profiles</h1>
        {children}
    </div>
    </>
  )
}

export default test