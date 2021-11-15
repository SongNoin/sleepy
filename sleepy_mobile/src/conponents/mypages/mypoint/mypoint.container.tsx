import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../../../../App";

import MyPointUI from "./mypoint.presenter";
import { useNavigation } from "@react-navigation/core";
import { Alert } from "react-native";

const MyPointContainer = () => {
  const navigation = useNavigation();
  const { chargeAmount, setChargeAmount } = useContext(GlobalContext);
  function onChageChageAmount(event: any) {
    setChargeAmount(event);
  }
  function onPressNavigateCharge() {
    if (chargeAmount === "") {
      Alert.alert("포인트를 입력해주세요");
      return;
    }
    if (isNaN(chargeAmount)) {
      Alert.alert("숫자를 입력해주세요");
      return;
    }
    if (chargeAmount < 100) {
      Alert.alert("100포인트 이상 입력해주세요");
      return;
    }
    navigation.navigate("아임포트충전");
  }
  return (
    <>
      <MyPointUI
        onChageChageAmount={onChageChageAmount}
        onPressNavigateCharge={onPressNavigateCharge}
      />
    </>
  );
};

export default MyPointContainer;
