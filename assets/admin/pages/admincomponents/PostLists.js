import {
  CContainer,
  CTable,
  CTableBody,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from "@coreui/react";
import React from "react";
import ListItem from "./ListItem";
import AdminHeader from "../layout/AdminHeader";

function Postlists(props) {
  return (
    <div>
      <AdminHeader />
      <CContainer>
        <CTable>
          <CTableHead>
            <CTableRow>
              <CTableHeaderCell>Id</CTableHeaderCell>
              <CTableHeaderCell>Post Name</CTableHeaderCell>
              <CTableHeaderCell>Actions</CTableHeaderCell>
            </CTableRow>
          </CTableHead>
          <CTableBody>
            {props.postsListAdmin.map((data) => {
              return <ListItem key={data.id} id={data.id} title={data.title} />;
            })}
          </CTableBody>
        </CTable>
      </CContainer>
    </div>
  );
}
export default Postlists;
