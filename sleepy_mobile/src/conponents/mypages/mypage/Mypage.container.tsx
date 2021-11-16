import React, { useContext, useState } from "react";
import { useQuery } from "@apollo/client";
import MypageUI from "./Mypage.present";
import {
  FETCH_USER_LOGGED_IN,
  FETCH_POINT_TRANSACTIONS,
  FETCH_POINT_TRANSACTIONS_OF_BUYING,
} from "./Mypage.queries";
import { GlobalContext } from "../../../../App";

const MypageContainer = () => {
  const { setId, id, setIsReview } = useContext(GlobalContext);

  const [isPoint, setIsPoint] = useState(false);
  const { data } = useQuery(FETCH_USER_LOGGED_IN);
  const { data: buyData } = useQuery(FETCH_POINT_TRANSACTIONS_OF_BUYING, {
    variables: { page: 1 },
  });
  const { data: pointData } = useQuery(FETCH_POINT_TRANSACTIONS, {
    variables: { page: 1 },
  });

  function onPressShowBuy() {
    setIsPoint(false);
  }

  function onPressShowPoint() {
    setIsPoint(true);
  }

  function onPressMoveToDetail(el: any) {
    setId(el.useditem._id);
    setIsReview(true);
  }

  const onPressMoveToReviewWrite = (el: any) => {
    setId(el.useditem._id);
  };

  // function onPressDetail(el: any) {
  //   setId(el._id);
  //   console.log(el._id);
  // }

  return (
    <MypageUI
      onPressShowBuy={onPressShowBuy}
      onPressShowPoint={onPressShowPoint}
      onPressMoveToReviewWrite={onPressMoveToReviewWrite}
      onPressMoveToDetail={onPressMoveToDetail}
      // onPressDetail={onPressDetail}
      isPoint={isPoint}
      data={data}
      buyData={buyData}
      pointData={pointData}
    />
  );
};

export default MypageContainer;
