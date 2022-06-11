import Carousal from "./../layout/Carousal";
import React from "react";
import PostAllData from "./PostAllData";
import Header from "../layout/Header";

function HomePage() {
  return (
    <div>
      <Header />
      <Carousal />
      <PostAllData />
    </div>
  );
}
export default HomePage;
