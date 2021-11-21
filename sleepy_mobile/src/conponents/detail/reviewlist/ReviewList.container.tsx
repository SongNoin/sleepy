// import React from "react";
// import ReviewListUI from "./ReviewList.present";

// const ReviewListContainer = (props: any) => {
//   return <ReviewListUI data={props.data} />;
// };

// export default ReviewListContainer;

import { useQuery } from "@apollo/client";
import React, { useContext, useState } from "react";
import { GlobalContext } from "../../../../App";
import { FETCH_USER_LOGGED_IN } from "../../mypages/mypage/Mypage.queries";
import ReviewListUI from "./ReviewList.present";
import { FETCH_USED_ITEM_QUESTIONS } from "./ReviewList.quries";

const ReviewListContainer = (props: any) => {
  const [isLarge, setIsLarge] = useState(false);
  const { id } = useContext(GlobalContext);
  const { data: ReviewData } = useQuery(FETCH_USED_ITEM_QUESTIONS, {
    variables: { page: 1, useditemId: id },
  });
  const { data: userData } = useQuery(FETCH_USER_LOGGED_IN);
  function onPressEnlargePicture() {
    setIsLarge((prev) => !prev);
    console.log(isLarge);
  }
  return (
    <ReviewListUI
      data={props.data}
      userData={userData}
      isLarge={isLarge}
      ReviewData={ReviewData}
      onPressEnlargePicture={onPressEnlargePicture}
    />
  );
};

export default ReviewListContainer;
