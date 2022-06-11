import React from "react";
import PackagesList from "./PackagesList";

function Packages() {
  return (
    <div>
      <h2 className="text-center mt-5 mb-3 font-weight-bold">
        PACKAGES
      </h2>
      <PackagesList packageslist={data} />
    </div>
  );
}
export default Packages;
