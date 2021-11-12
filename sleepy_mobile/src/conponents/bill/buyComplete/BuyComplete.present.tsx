import React from "react";

import {
  BuyView,
  PurchaseImg,
  Phrase,
  ButtonBackGround,
  ButtonText,
} from "./BuyComplete.styles";

const BuyCompelteUI = (props:any) => {
  return (
    <BuyView>
      <PurchaseImg
        source={require("../../../../public/images/detail/purchase.png")}
      />
      <Phrase>구매가 완료되었습니다!</Phrase>
      <ButtonBackGround>
        {/* <ButtonText onPress={() => navigation.navigate("마이페이지")}>
          구매 내역 보러가기
        </ButtonText> */}
        <ButtonText onPress={props.onPressMoveToMyPage}>
          구매 내역 보러가기
        </ButtonText>
      </ButtonBackGround>
    </BuyView>
  );
};

export default BuyCompelteUI;
