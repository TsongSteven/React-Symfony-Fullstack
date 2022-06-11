import { CCol } from "@coreui/react";
import React from "react";
import Card from "../components/Card";
import classes from "./PostDataItem.module.css";

function PostDataItem(props) {
  return (
    <CCol>
      <Card>
        <div className={classes.image}>
          <img src={props.image} />
        </div>
        <div className={classes.postbody}>
          <h2>{props.title}</h2>
          <i>{props.description}</i>
          <h4 className="text-danger">{props.price} $</h4>
          <button className="btn btn-danger">Add to Favourite</button>
        </div>
      </Card>
    </CCol>
  );
}
export default PostDataItem;
