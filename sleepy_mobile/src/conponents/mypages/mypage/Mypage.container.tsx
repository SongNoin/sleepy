import React, { useState } from "react";

import MypageUI from "./Mypage.present";

const MypageContainer = () => {
  const [isPoint, setIsPoint] = useState(false);

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
    />
  );
};

export default MypageContainer;
