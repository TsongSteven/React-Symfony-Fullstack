import { CCol } from "@coreui/react";
import React from "react";
import Card from "../components/Card";
import classes from "./PackageItem.module.css";

function PackageItem(props) {
  return (
    <CCol>
      <Card>
        <div className={classes.image}>
          <img src={props.image} />
        </div>
        <div className={classes.postbody}>
          <h2>{props.title}</h2>
          <p>{props.description}</p>
        </div>
      </Card>
    </CCol>
  );
}

export default PackageItem;
