import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { Address, BuyButton, BuyerName, PayView, Price } from "./Pay.styles";

const PayUI = (props:any) => {
  return (
    <PayView>
      <Text>구매자이름</Text>
      <BuyerName>{props.login?.fetchUserLoggedIn.name}</BuyerName>
      <Text>상품가격</Text>
      <Price>{`${props.data?.fetchUseditem?.price}원`}</Price>
      <Text>주소</Text>
      <Address>Seoul (Advanced)</Address>
      <BuyButton
        // onPress={() => {
        //   navigation.navigate("구매하기");
        // }}
        onPress={props.onPressPay}
      >
        <Text>결제하기버튼</Text>
      </BuyButton>
    </PayView>
  );
};

export default PayUI;
