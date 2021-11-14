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

const CartUI = (props: any) => {
  return (
    <ScrollView>
      <MyCartView>
        <CartCountWrapper>
          <CartCount>상품가격</CartCount>
          <CartCountContent>{`${
            !props.getPrices ? 0 : props.getPrices
          }원`}</CartCountContent>
        </CartCountWrapper>
        <CartListWrapper>
          {props.productInfo
            ?.map((el) => (
              <CartCard key={el.id}>
                <CartImage
                  source={{
                    uri: `https://storage.googleapis.com/${el.images[0]}`,
                  }}
                />
                <CartContent>
                  <CartName>
                    {el.productName.length > 9
                      ? `${el.productName.substr(0, 10)}..`
                      : el.productName}
                  </CartName>
                  <CartPrice>{`${el.productPrice}원`}</CartPrice>
                </CartContent>
              </CartCard>
            ))
            .reverse()}
        </CartListWrapper>
        <CartCountWrapper></CartCountWrapper>
        <TotalPriceWrapper>
          <CartCount>배송비</CartCount>
          <CartCountContent>+3000원</CartCountContent>
        </TotalPriceWrapper>
        <TotalPriceWrapper>
          <CartCount>총 합산 가격</CartCount>
          <CartCountContent>{`${
            !props.getPrices ? 0 : props.getPrices + 3000
          }원`}</CartCountContent>
        </TotalPriceWrapper>
      </MyCartView>
    </ScrollView>
  );
};

export default CartUI;
