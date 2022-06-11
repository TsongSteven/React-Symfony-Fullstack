import { CSpinner } from "@coreui/react";
import React from "react";
import { useState, useEffect } from "react";
import PostAllLists from "./PostAllLists";

function PostAllData() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedTours, setTours] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8000/get-all-data")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        const tours = [];
        for (const key in data) {
          const tour = { id: key, ...data[key] };
          tours.push(tour);
        }
        setTours(tours);
        setIsLoading(false);
      });
  },[]);

  if (isLoading) {
    return (
      <div className="">
        <CSpinner color="primary" variant="grow" />
        <CSpinner color="secondary" variant="grow" />
        <CSpinner color="success" variant="grow" />
        <CSpinner color="danger" variant="grow" />
        <CSpinner color="warning" variant="grow" />
        <CSpinner color="info" variant="grow" />
        <CSpinner color="dark" variant="grow" />
      </div>
    );
  }
  return (
    <div>
      <h2 className="text-center mt-5 mb-3 font-weight-bold">
        TOURS AND DESTINATIONS
      </h2>
      <PostAllLists postlists={loadedTours} />
    </div>
  );
}
export default PostAllData;
