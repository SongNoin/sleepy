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

const BoughtProductCard = () => {
  return (
    <ProductCard>
      <ProductImage
        source={require("../../../../public/images/mypage/buyhistoryproductphoto.png")}
      />
      <ProductInfo>
        <ProductDateWrapper>
          <ProductDate>구매 날짜</ProductDate>
          <ProductDateContent>2021-11-04</ProductDateContent>
        </ProductDateWrapper>
        <ProductNameWrapper>
          <ProductName>글자는띄어쓰기없이</ProductName>
        </ProductNameWrapper>
        <ProductPriceWrapper>
          <ProductPrice>199000원</ProductPrice>
        </ProductPriceWrapper>
        <ReviewButon>
          <ReviewButtonText>리뷰 쓰기 & 리뷰수정</ReviewButtonText>
        </ReviewButon>
      </ProductInfo>
    </ProductCard>
  );
};

export default BoughtProductCard;
