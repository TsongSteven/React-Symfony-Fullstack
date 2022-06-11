import { CCard, CContainer, CCardBody } from "@coreui/react";
import React, { useRef } from "react";
import classes from "./AddPost.module.css";
import PostUpdateForm from "./form/PostUpdateForm";
import AdminHeader from "../layout/AdminHeader";
import { useNavigate } from "react-router";

function AddPost(props) {

  const navigate = useNavigate();
  function saveDataInBackEndHandler(postData) {
    fetch("http://localhost:8000/save-data", {
      method: "POST",
      body: JSON.stringify(postData),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(navigate("/admin/post-list")).then(swal('Added Post!'));
  }
  return (
    <div>
      <AdminHeader />
      <div className="mt-3">
        <CContainer>
          <CCard>
            <CCardBody>
              <h3>Add Post</h3>
            </CCardBody>
          </CCard>
          <PostUpdateForm onAddData={saveDataInBackEndHandler} />
        </CContainer>
      </div>
    </div>
  );
}
export default AddPost;
