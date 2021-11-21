import React from "react";
import BuyCompelteUI from "./BuyComplete.present";
import { useNavigation } from "@react-navigation/native";

const BuyCompelteContainer = () => {
  const navigation = useNavigation();

  const onPressMoveToMyPage = () => {
    navigation.navigate("마이페이지");
  };
  return <BuyCompelteUI onPressMoveToMyPage={onPressMoveToMyPage} />;
};

export default BuyCompelteContainer;
