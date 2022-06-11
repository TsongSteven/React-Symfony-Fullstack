import React, { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import AddPost from "./admincomponents/AddPost";
import AdminHomePage from "./admincomponents/AdminHomePage";
import AddCountry from "./admincomponents/AddCountry";
import { CToast, CToastBody, CToastHeader } from "@coreui/react";
import ListPost from "./admincomponents/ListPost";
import UpdatePost from "./admincomponents/UpdatePost";

function AdminPage() {
  const token = localStorage.getItem("token");

  const history = useNavigate();

  const [isSuccess, setSuccess] = useState(false);


  return (
    <div>
      {isSuccess && (
        <CToast autohide={false} visible={true}>
          <CToastHeader closeButton></CToastHeader>
          <CToastBody>Country Added..</CToastBody>
        </CToast>
      )}
      <AdminHomePage />
    </div>
  );
}
export default AdminPage;
