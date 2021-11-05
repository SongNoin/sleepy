import React from "react";

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
  InnerTopWrapper,
  Avatar,
  TopMiddleWrapper,
  Nickname,
  Star,
  AddPhoto,
  BottomWrapper,
  Title,
  ReviewContent,
} from "./DetailMain.styles";

const DetailUI = () => {
  return (
    <Wrapper>
      <ProductWrapper>
        <ProductImage></ProductImage>
        <ReviewInfoWrapper>
          <ReviewStar></ReviewStar>
          <ReviewAverage></ReviewAverage>
        </ReviewInfoWrapper>
        <ProductName></ProductName>
        <ProductPrice></ProductPrice>
      </ProductWrapper>
      <DetaillWrapper>
        <DetailContent></DetailContent>
        <Photo></Photo>
      </DetaillWrapper>
      <ReviewWrapper>
        <InnerTopWrapper>
          <Avatar></Avatar>
          <TopMiddleWrapper>
            <Nickname></Nickname>
            <Star></Star>
          </TopMiddleWrapper>
          <AddPhoto></AddPhoto>
        </InnerTopWrapper>
        <BottomWrapper>
          <Title></Title>
          <ReviewContent></ReviewContent>
        </BottomWrapper>
      </ReviewWrapper>
    </Wrapper>
  );
};

export default DetailUI;
