import { CButton, CTableDataCell, CTableRow } from "@coreui/react";
import React from "react";
import { useNavigate } from "react-router";
import swal from "sweetalert";

function ListItem(props) {
  const navigate = useNavigate();
  function navigateToUpdateHandler() {
    navigate("/admin/update-post", { state: props.id });
  }

  function deleteThisPostHandler() {
    fetch(`http://localhost:8000/delete-post/${props.id}`)
      .then(navigate("/admin/post-list")).then(swal('Deleted Post!'));
  }
  return (
    <CTableRow>
      <CTableDataCell>{props.id}</CTableDataCell>
      <CTableDataCell>{props.title}</CTableDataCell>
      <CTableDataCell>
        <CButton color="primary" onClick={navigateToUpdateHandler}>
          Update
        </CButton>
        <CButton color="danger" onClick={deleteThisPostHandler}>
          Delete
        </CButton>
      </CTableDataCell>
    </CTableRow>
  );
}
export default ListItem;
