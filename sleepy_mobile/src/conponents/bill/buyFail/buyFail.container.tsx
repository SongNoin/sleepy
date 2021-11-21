import React from "react";
import BuyFailUI from "./buyFail.present";
import { useNavigation } from "@react-navigation/native";

const BuyFailContainer = () => {
  const navigation = useNavigation();
  const onPressMoveToMyPage = () => {
    navigation.navigate("마이페이지");
  };
  return <BuyFailUI onPressMoveToMyPage={onPressMoveToMyPage} />;
};

export default BuyFailContainer;
