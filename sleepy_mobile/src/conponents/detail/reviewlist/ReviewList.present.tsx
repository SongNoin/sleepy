import React from "react";
import ReviewListUIItem from "./ReviewList.presentItem";

const ReviewListUI = (props: any) => {
  return (
    <>
      {props.ReviewData?.fetchUseditemQuestions.map((el: any) => (
        <ReviewListUIItem
          key={el._id}
          id={el.id}
          data={props.data}
          userData={props.userData}
          el={el}
          isLarge={props.isLarge}
          onPressEnlargePicture={props.onPressEnlargePicture}
        />
      ))}
    </>
  );
};

export default ReviewListUI;
