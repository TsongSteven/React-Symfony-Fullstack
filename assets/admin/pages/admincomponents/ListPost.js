import React, { useState, useEffect } from "react";
import Postlists from "./PostLists";

function ListPost() {
  const [postsData, setPost] = useState([]);
  const [isLoading, setloading] = useState(true);

  useEffect(() => {
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
        setloading(false);
        setPost(posts);
      });
  },[]);

  if(isLoading){
    return(
        <div>
            ...Loading
        </div>
    );
  }
  return (
    <div>
      <Postlists postsListAdmin={postsData} />
    </div>
  );
}
export default ListPost;
