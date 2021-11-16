import React from "react";
import ReviewListUIItem from "./ReviewList.presentItem";

const ReviewListUI = (props: any) => {
  return (
    <>
      {props.ReviewData?.fetchUseditemQuestions.map((el) => (
        <ReviewListUIItem key={el._id} id={el.id} data={props.data} el={el} />
      ))}
    </>
  );
};

export default ReviewListUI;
