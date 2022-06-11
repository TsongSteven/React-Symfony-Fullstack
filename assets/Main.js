import React, { useState } from "react";
import AdminHeader from "./admin/pages/layout/AdminHeader";
import "./style.css";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Login from "./admin/auth/Login";
import Register from "./admin/auth/Register";
import AdminPage from "./admin/pages/AdminPage";
import HomePage from "./pages/HomePage";
import AddPost from "./admin/pages/admincomponents/AddPost";
import UpdatePost from "./admin/pages/admincomponents/UpdatePost";
import AddCountry from "./admin/pages/admincomponents/AddCountry";
import ListPost from "./admin/pages/admincomponents/ListPost";
import Auth from "./admin/auth/Auth";

function Main() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register-new-user" element={<Register />}></Route>
        <Route element={<Auth />}>
          <Route path="/admin" element={<AdminPage/>}></Route>
          <Route path="/admin/add-post" element={<AddPost />}></Route>
          <Route path="/admin/update-post" element={<UpdatePost />}></Route>
          <Route path="/admin/add-country" element={<AddCountry />}></Route>
          <Route path="/admin/post-list" element={<ListPost />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default Main;
