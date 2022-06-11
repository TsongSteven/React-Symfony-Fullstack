import React, { useRef, useState } from "react";
import classes from "./PostUpdateForm.module.css";

function PostUpdateForm(props) {
  const titleRef = useRef();
  const imageRef = useRef();
  const descRef = useRef();
  const priceRef = useRef();

  function submitPostHandler(e) {
    e.preventDefault();

    const titleData = titleRef.current.value;
    const imageData = imageRef.current.value;
    const descData = descRef.current.value;
    const priceData = priceRef.current.value;

    const postData = {
      title: titleData,
      image: imageData,
      description: descData,
      price: priceData,
    };


    props.fetchedData
      ? props.onUpdateData(postData)
      : props.onAddData(postData);
      
  }
  return (
    <form onSubmit={submitPostHandler}>
      <div className={classes.formdiv}>
        <label>Title</label>
        <input
          type="text"
          className={classes.addpostinputs}
          ref={titleRef}
          defaultValue={props.fetchedData && props.fetchedData.title}
        />
      </div>
      <div className={classes.formdiv}>
        <label>Image Url</label>
        <input
          type="text"
          className={classes.addpostinputs}
          ref={imageRef}
          defaultValue={props.fetchedData && props.fetchedData.image}
        />
      </div>
      <div className={classes.formdiv}>
        <label>Description</label>
        <input
          type="text"
          className={classes.addpostinputs}
          ref={descRef}
          defaultValue={props.fetchedData && props.fetchedData.description}
        />
      </div>
      <div className={classes.formdiv}>
        <label>Tour Price</label>
        <input
          type="text"
          className={classes.addpostinputs}
          ref={priceRef}
          defaultValue={props.fetchedData && props.fetchedData.price}
        />
      </div>
      <div className={classes.formdiv}>
        <button className={classes.btn}>
          {props.fetchedData ? "Update Post" : "Save Post"}
        </button>
      </div>
    </form>
  );
}
export default PostUpdateForm;
