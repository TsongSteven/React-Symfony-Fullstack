import { CCard, CCardBody, CContainer } from "@coreui/react";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { useParams } from "react-router-dom";
import PostUpdateForm from "./form/PostUpdateForm";
import AdminHeader from "../layout/AdminHeader";

function UpdatePost(props) {
  const { state } = useLocation();
  const [posts, setPost] = useState([]);
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    fetch("http://localhost:8000/get-post/" + state, {
      headers: {
        Accept: "application/json",
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setLoading(false);
        setPost(data);
      });
  }, []);
  if (isLoading) {
    return <div>..Loading Posts...</div>;
  }

  function updatePostHandler(postData) {
    fetch(`http://localhost:8000/update-post/${state}`, {
      method: "PUT",
      body: JSON.stringify(postData),
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  return (
    <div>
      <AdminHeader />
      <div className="mt-3">
        <CContainer>
          <CCard>
            <CCardBody>
              <h3>Update Post</h3>
            </CCardBody>
          </CCard>
          {posts && (
            <PostUpdateForm
              fetchedData={posts}
              onUpdateData={updatePostHandler}
            />
          )}
        </CContainer>
      </div>
    </div>
  );
}
export default UpdatePost;
