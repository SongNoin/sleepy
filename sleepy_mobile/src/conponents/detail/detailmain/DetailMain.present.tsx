import React from "react";
import { ScrollView } from "react-native";
import ReviewListContainer from "../reviewlist/ReviewList.container";
import ProductImages from "./ProductImages";

import {
  Wrapper,
  ProductWrapper,
  ProductImage,
  ReviewInfoWrapper,
  ReviewStar,
  ReviewAverage,
  ProductName,
  ProductPrice,
  DetaillWrapper,
  DetailContent,
  Photo,
  ReviewWrapper,
  Title,
} from "./DetailMain.styles";

const DetailUI = (props) => {
  return (
    <ScrollView>
      <Wrapper>
        <ProductWrapper>
          <ProductImages />
          {/* <ProductImage
            source={require("../../../../public/images/detail/bag1.png")}
          /> */}
          <ReviewInfoWrapper>
            <ReviewStar
              source={require("../../../../public/images/detail/star.png")}
            />
            <ReviewStar
              source={require("../../../../public/images/detail/star.png")}
            />
            <ReviewStar
              source={require("../../../../public/images/detail/star.png")}
            />
            <ReviewStar
              source={require("../../../../public/images/detail/starempty.png")}
            />
            <ReviewStar
              source={require("../../../../public/images/detail/starempty.png")}
            />
            <ReviewAverage>(3.25)</ReviewAverage>
          </ReviewInfoWrapper>
          <ProductName>{props.data?.fetchUseditem.name}</ProductName>
          <ProductPrice>{props.data?.fetchUseditem.price}</ProductPrice>
        </ProductWrapper>
        <DetaillWrapper>
          <DetailContent>{props.data?.fetchUseditem.contents}</DetailContent>
          <Photo
            source={require("../../../../public/images/detail/bag2.png")}
          />
        </DetaillWrapper>
      </Wrapper>
      <ReviewWrapper>
        <Title>리뷰</Title>
        <ReviewListContainer />
        <ReviewListContainer />
      </ReviewWrapper>
    </ScrollView>
  );
};

export default DetailUI;
