import { useNavigation } from "@react-navigation/core";
import React from "react";

import {
  ProductCard,
  ProductImage,
  ProductInfo,
  ProductDateWrapper,
  ProductDate,
  ProductDateContent,
  ProductNameWrapper,
  ProductName,
  ProductPriceWrapper,
  ProductPrice,
  ReviewButon,
  ReviewButtonText,
} from "./Mypage.styles";

const BoughtProductCard = (props: any) => {
  const navigation = useNavigation();
  return (
    <ProductCard>
      <ProductImage
        source={require("../../../../public/images/mypage/buyhistoryproductphoto.png")}
      />
      <ProductInfo>
        <ProductDateWrapper>
          <ProductDate>구매 날짜</ProductDate>
          <ProductDateContent>
            {props.el.createdAt.slice(0, 10)}
          </ProductDateContent>
        </ProductDateWrapper>
        <ProductNameWrapper>
          <ProductName>{props.el.useditem.name}</ProductName>
        </ProductNameWrapper>
        <ProductPriceWrapper>
          <ProductPrice>
            {props.el.useditem.price.toLocaleString("ko-KR")}
          </ProductPrice>
        </ProductPriceWrapper>
        <ReviewButon onPress={() => navigation.navigate("리뷰쓰기")}>
          <ReviewButtonText>리뷰 쓰기 & 리뷰수정</ReviewButtonText>
        </ReviewButon>
      </ProductInfo>
    </ProductCard>
  );
};

export default BoughtProductCard;
