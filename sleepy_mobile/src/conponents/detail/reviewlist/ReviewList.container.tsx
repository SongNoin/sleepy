// import React from "react";
// import ReviewListUI from "./ReviewList.present";

// const ReviewListContainer = (props: any) => {
//   return <ReviewListUI data={props.data} />;
// };

// export default ReviewListContainer;

import { useQuery } from "@apollo/client";
import React, { useContext } from "react";
import { GlobalContext } from "../../../../App";
import ReviewListUI from "./ReviewList.present";
import { FETCH_USED_ITEM_QUESTIONS } from "./ReviewList.quries";

const ReviewListContainer = (props: any) => {
  const { id } = useContext(GlobalContext);
  const { data: ReviewData } = useQuery(FETCH_USED_ITEM_QUESTIONS, {
    variables: { page: 1, useditemId: id },
  });

  return <ReviewListUI data={props.data} ReviewData={ReviewData} />;
};

export default ReviewListContainer;
