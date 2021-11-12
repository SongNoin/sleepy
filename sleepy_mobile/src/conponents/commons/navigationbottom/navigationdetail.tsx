import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import styled from "@emotion/native";
import { TouchableHighlight } from "react-native";

const Wrapper = styled.View`
  width: 100%;
  height: 60px;
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  padding: 0px 10px 0px 10px;
`;

const FavoriteWrapper = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-right: 13px;
`;

const FavoriteImage = styled.Image`
  width: 17.4px;
  height: 18.86px;
`;

const FavoriteCount = styled.Text`
  font-family: "NotoSans-Regular";
  color: #5b5bc0;
  font-size: 10px;
  font-weight: 500;
  font-style: normal;
  line-height: 13.62px;
`;

// const CartButton = styled.Text`
//   font-family: "NotoSans-Bold";
//   border: 1px solid #8888d0;
//   border-radius: 8px;
//   padding: 7px 44px 6px 44px;
//   color: #5b5bc0;
// `;

const CartButton = styled.TouchableHighlight`
  border: 1px solid #8888d0;
  border-radius: 8px;
  padding: 7px 44px 6px 44px;
`;

const CartText = styled.Text`
  font-family: "NotoSans-Bold";
  color: #5b5bc0;
`;

const BuyButton = styled.Text`
  font-family: "NotoSans-Bold";
  border: 1px solid #8888d0;
  border-radius: 8px;
  padding: 7px 44px 6px 44px;
  color: #5b5bc0;
`;

const NavigationDetail = () => {
  const navigation = useNavigation();

  return (
    <Wrapper>
      <FavoriteWrapper>
        <FavoriteImage
          source={require("../../../../public/images/list/infofavorite.png")}
        />
        <FavoriteCount>3025</FavoriteCount>
      </FavoriteWrapper>
      <CartButton onPress={() => navigation.navigate("장바구니")}>
        <CartText>장바구니</CartText>
      </CartButton>
      <BuyButton onPress={() => navigation.navigate("결제하기")}>
        구매하기
      </BuyButton>
    </Wrapper>
  );
};

export default NavigationDetail;
