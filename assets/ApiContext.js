import React, { createContext, useState } from "react";

function ApiContextProvider() {
  const context = createContext([
    fetch("http://localhost:8000/get-all-data")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        const posts = [];
        for (const key in data) {
          const post = { id: key, ...data[key] };
          posts.push(post);
        }
        setPost(posts);
      }),
  ]);

  return <div>{context}</div>;
}
export default ApiContextProvider;
