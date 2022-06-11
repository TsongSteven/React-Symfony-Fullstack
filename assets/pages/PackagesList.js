import { CContainer, CRow } from "@coreui/react";
import React from "react";
import PackageItem from "./PackageItem";

function PackagesList(props) {
  return (
    <CContainer>
      <CRow>
        {props.packageslist.map((items) => {
          <PackageItem
            key={items.id}
            id={items.id}
            title={items.title}
            image={items.image}
            description={items.description}
          />
        })}
      </CRow>
    </CContainer>
  );
}

export default PackagesList;
