import React from "react";

import {
  MyPointView,
  MyPointImage,
  MyPointInput,
  MyPointInputText,
  ChangeText,
  ChargeButton,
} from "./mypoint.styles";

const MyPointUI = (props: any) => {
  return (
    <>
      <MyPointView>
        <MyPointImage
          source={require("../../../../public/images/mypage/chargerabbit.png")}
        />
        <MyPointInputText>충전할 금액을 입력해주세요!</MyPointInputText>
        <MyPointInput onChangeText={props.onChageChageAmount}></MyPointInput>
        <ChargeButton onPress={props.onPressNavigateCharge}>
          <ChangeText>충전하기</ChangeText>
        </ChargeButton>
      </MyPointView>
    </>
  );
};

export default MyPointUI;
