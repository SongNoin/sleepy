import React from "react";
import { ScrollView } from "react-native-gesture-handler";

import {
  MyCartView,
  CartCountWrapper,
  CartCount,
  CartCountContent,
  CartCountUnit,
  CartListWrapper,
  CartCard,
  CartImage,
  CartContent,
  CartName,
  CartPrice,
} from "./Cart.styles";

const CartUI = () => {
  return (
    <ScrollView>
      <MyCartView>
        <CartCountWrapper>
          <CartCount>총합산가격 :</CartCount>
          <CartCountContent>1000</CartCountContent>
          <CartCountUnit>개</CartCountUnit>
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
      </MyCartView>
    </ScrollView>
  );
};

export default CartUI;
