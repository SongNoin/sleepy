import React from "react";
import { ScrollView } from "react-native-gesture-handler";

import {
  MyCartView,
  CartCountWrapper,
  CartCount,
  CartCountContent,
  CartListWrapper,
  CartCard,
  CartImage,
  CartContent,
  CartName,
  CartPrice,
  TotalPriceWrapper,
} from "./Cart.styles";

const CartUI = () => {
  return (
    <ScrollView>
      <MyCartView>
        <CartCountWrapper>
          <CartCount>상품가격</CartCount>
          <CartCountContent>19999000 원</CartCountContent>
        </CartCountWrapper>
        <CartListWrapper>
          <CartCard>
            <CartImage
              source={require("../../../../public/images/mypage/buyhistoryproductphoto.png")}
            />
            <CartContent>
              <CartName>글자는띄어쓰기없이</CartName>
              <CartPrice>199000원</CartPrice>
            </CartContent>
          </CartCard>
        </CartListWrapper>
        <CartCountWrapper></CartCountWrapper>
        <TotalPriceWrapper>
          <CartCount>배송비</CartCount>
          <CartCountContent>+3000원</CartCountContent>
        </TotalPriceWrapper>
        <TotalPriceWrapper>
          <CartCount>총 합산 가격</CartCount>
          <CartCountContent>20,002,000 원</CartCountContent>
        </TotalPriceWrapper>
      </MyCartView>
    </ScrollView>
  );
};

export default CartUI;
