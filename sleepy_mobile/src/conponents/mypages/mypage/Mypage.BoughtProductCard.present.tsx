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
    <ProductCard
      onPress={() =>
        navigation.navigate("상품 상세보기", {
          id: props.onPressMoveToDetail(props.el),
        })
      }
    >
      <ProductImage
        // source={`https://storage.googleapis.com/${props.el.useditem.images[0]}`}
        source={{
          uri: `https://storage.googleapis.com/${props.el.useditem.images[0]}`,
        }}
      />
      <ProductInfo>
        <ProductDateWrapper>
          <ProductDate>구매 날짜</ProductDate>
          <ProductDateContent>
            {props.el.createdAt.slice(0, 10)}
          </ProductDateContent>
        </ProductDateWrapper>
        <ProductNameWrapper>
          <ProductName>
            {props.el.useditem.name.length > 9
              ? `${props.el.useditem.name.substr(0, 10)}...`
              : props.el.useditem.name}
          </ProductName>
        </ProductNameWrapper>

        <ProductPriceWrapper>
          <ProductPrice>
            {props.el.useditem.price.toLocaleString("ko-KR")}
          </ProductPrice>
        </ProductPriceWrapper>
        <ReviewButon
          onPress={() =>
            navigation.navigate("리뷰쓰기", {
              id: props.onPressMoveToReviewWrite(props.el),
            })
          }
        >
          <ReviewButtonText>리뷰 쓰기</ReviewButtonText>
        </ReviewButon>
      </ProductInfo>
    </ProductCard>
  );
};

export default BoughtProductCard;
