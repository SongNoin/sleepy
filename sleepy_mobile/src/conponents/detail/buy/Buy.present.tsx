import React from "react";
import { useNavigation } from "@react-navigation/native";

import {
  BuyView,
  PurchaseImg,
  Phrase,
  ButtonBackGround,
  ButtonText,
} from "./Buy.styles";

const BuyUI = () => {
  const navigation = useNavigation();
  return (
    <BuyView>
      <PurchaseImg
        source={require("../../../../public/images/detail/purchase.png")}
      />
      <Phrase>구매가 완료되었습니다!</Phrase>
      <ButtonBackGround>
        <ButtonText onPress={() => navigation.navigate("마이페이지")}>
          구매 내역 보러가기
        </ButtonText>
      </ButtonBackGround>
    </BuyView>
  );
};

export default BuyUI;
