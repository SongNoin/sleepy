import React, { useContext } from "react";
import BuyCompelteUI from "./BuyComplete.present";
import { useNavigation } from "@react-navigation/native";
import { GlobalContext } from "../../../../App";


const BuyCompelteContainer = () => {
  const {setIsMyPage} = useContext(GlobalContext)
  const navigation = useNavigation();

  const onPressMoveToMyPage = () => {
    navigation.navigate("마이페이지")
    setIsMyPage(true)
  }
  return <BuyCompelteUI onPressMoveToMyPage={onPressMoveToMyPage} />;
};

export default BuyCompelteContainer;
