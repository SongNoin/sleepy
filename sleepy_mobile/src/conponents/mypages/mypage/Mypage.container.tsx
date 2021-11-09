import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import MypageUI from "./Mypage.present";
import {
  FETCH_USER_LOGGED_IN,
  FETCH_POINT_TRANSACTIONS,
} from "./Mypage.queries";

const MypageContainer = () => {
  const [isPoint, setIsPoint] = useState(false);
  const { data } = useQuery(FETCH_USER_LOGGED_IN);
  const { data: pointData } = useQuery(FETCH_POINT_TRANSACTIONS, {
    variables: { page: 1 },
  });

  function onPressShowBuy() {
    setIsPoint(false);
  }

  function onPressShowPoint() {
    setIsPoint(true);
  }
  return (
    <MypageUI
      onPressShowBuy={onPressShowBuy}
      onPressShowPoint={onPressShowPoint}
      isPoint={isPoint}
      data={data}
      pointData={pointData}
    />
  );
};

export default MypageContainer;
