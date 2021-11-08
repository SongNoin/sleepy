import React, { useEffect, useState } from "react";
import {gql, useQuery} from "@apollo/client";

const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn{
      _id
      name
      email
    }
  }
`

import MypageUI from "./Mypage.present";

const MypageContainer = () => {
  const [isPoint, setIsPoint] = useState(false);
  const {data} = useQuery(FETCH_USER_LOGGED_IN);

  useEffect(()=>{
    console.log(data?.fetchUserLoggedIn)
  },[data])

  function onPressShowBuy() {
    setIsPoint(false);
    console.log("aaa", isPoint);
  }

  function onPressShowPoint() {
    setIsPoint(true);
    console.log("aaa", isPoint);
  }
  return (
    <MypageUI
      onPressShowBuy={onPressShowBuy}
      onPressShowPoint={onPressShowPoint}
      isPoint={isPoint}
      data={data}
    />
  );
};

export default MypageContainer;
