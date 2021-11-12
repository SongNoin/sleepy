import React from "react";

import {
  MyPointView,
  MyPointInput,
  ChangeText,
  ChargeButton,
} from "./mypoint.styles";
import { useNavigation } from "@react-navigation/core";

const MyPointUI = (props: any) => {
  const navigation = useNavigation();

  return (
    <>
      <MyPointView>
        <MyPointInput></MyPointInput>
        <ChargeButton onPress={() => navigation.navigate("아임포트충전")}>
          <ChangeText>충전하기</ChangeText>
        </ChargeButton>
      </MyPointView>
    </>
  );
};

export default MyPointUI;
