import { CContainer, CRow } from "@coreui/react";
import React from "react";
import PostDataItem from "./PostDataItem";

function PostAllLists(props) {
  return (
    <CContainer>
      <CRow>
        {props.postlists.map((posts) => (
          <PostDataItem
            key={posts.id}
            id={posts.id}
            title={posts.title}
            image={posts.image}
            description={posts.description}
            price = {posts.price}
          />
        ))}
      </CRow>
    </CContainer>
  );
}
export default PostAllLists;
