import { CCard, CCardBody, CCardHeader, CContainer } from "@coreui/react";
import React, { useRef } from "react";
import classes from "./AddPost.module.css";
import AdminHeader from "../layout/AdminHeader";

function AddCountry(props) {
  const countryRef = useRef();
  function addCountryHandler(e) {
    e.preventDefault();
    const countryData = countryRef.current.value;
    const country = {
      country: countryData,
    };
    props.onAddCountryData(country);
  }
  return (
    <div>
      <AdminHeader />
      <div className="mt-5">
        <CContainer>
          <CCard>
            <CCardHeader>Add Country</CCardHeader>
            <CCardBody>
              <form onSubmit={addCountryHandler}>
                <div className={classes.formdiv}>
                  <label>Country Name</label>
                  <input
                    type="text"
                    className={classes.addpostinputs}
                    ref={countryRef}
                  />
                </div>
                <div className={classes.formdiv}>
                  <button className={classes.btn}>Add Country</button>
                </div>
              </form>
            </CCardBody>
          </CCard>
        </CContainer>
      </div>
    </div>
  );
}
export default AddCountry;
