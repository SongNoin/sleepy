import React from "react";

import ReviewListUI from "./ReviewList.present";

const ReviewListContainer = (props) => {
  return <ReviewListUI data={props.data} />;
};

export default ReviewListContainer;
