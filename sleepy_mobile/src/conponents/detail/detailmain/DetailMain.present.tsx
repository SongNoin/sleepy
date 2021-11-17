import React from "react";
import { ScrollView } from "react-native";
import ReviewListContainer from "../reviewlist/ReviewList.container";
import ProductImages from "./ProductImages";

import {
  Wrapper,
  ProductWrapper,
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

import RenderHTML from "react-native-render-html";

const DetailUI = (props: any) => {
  return (
    <ScrollView>
      <>
        <Wrapper>
          <ProductWrapper>
            <ProductImages data={props.data} />
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
            <ProductPrice>
              {props.data?.fetchUseditem.price
                .toLocaleString("ko-KR")
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
              원
            </ProductPrice>
          </ProductWrapper>
          <DetaillWrapper>
            <DetailContent>
              <RenderHTML
                source={{ html: `${props.data?.fetchUseditem.contents}` }}
              />
            </DetailContent>
            {props.data?.fetchUseditem.images
              ?.filter((el) => el)
              .map((el) => (
                <Photo
                  key={el}
                  source={{ uri: `https://storage.googleapis.com/${el}` }}
                />
              ))}
            {/* <Photo
            source={{
              uri: `https://storage.googleapis.com/${props.data?.fetchUseditem.images[0]}`,
            }}
          /> */}
          </DetaillWrapper>
        </Wrapper>
        <ReviewWrapper>
          <Title>리뷰</Title>
          <ReviewListContainer data={props.data} />
        </ReviewWrapper>
      </>
    </ScrollView>
  );
};

export default DetailUI;
