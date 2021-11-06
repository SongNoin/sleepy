import React from "react";
import { ScrollView } from "react-native";

import {
  InnerWrapper,
  ReviewWrapper,
  InnerTopWrapper,
  Avatar,
  TopMiddleWrapper,
  Nickname,
  Star,
  ReviewStar,
  Photos,
  AddPhoto,
  BottomWrapper,
  ContentTitle,
  ReviewContent,
} from "./ReviewList.styles";

const ReviewListUI = () => {
  return (
    <ScrollView>
      <InnerWrapper>
        <ReviewWrapper>
          <InnerTopWrapper>
            <Avatar
              source={require("../../../../public/images/detail/reviewavatar.png")}
            />
            <TopMiddleWrapper>
              <Nickname>밥 먹고 똥 싸는게 좋다 님</Nickname>
              <Star>
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
              </Star>
            </TopMiddleWrapper>
            <Photos>
              <AddPhoto
                source={require("../../../../public/images/detail/reviewimg1.png")}
              />
              <AddPhoto
                source={require("../../../../public/images/detail/reviewimg2.png")}
              />
            </Photos>
          </InnerTopWrapper>
          <BottomWrapper>
            <ContentTitle>리뷰 내용</ContentTitle>
            <ReviewContent>
              리뷰 내용리뷰 내용리뷰 내용리뷰 내용리뷰 내용리뷰 내용리뷰
              내용리뷰 내용리뷰 내용리뷰 내용리뷰 내용리뷰 내용리뷰 내용리뷰
              내용리뷰 내용리뷰 내용리뷰 내용리뷰 내용리뷰 내용리뷰 내용리뷰
              내용리뷰 내용리뷰 내용리뷰 내용리뷰 내용리뷰 내용리뷰 내용리뷰
              내용리뷰 내용리뷰 내용리뷰 내용리뷰 내용리뷰 내용리뷰 내용리뷰
              내용리뷰 내용리뷰 내용리뷰 내용리뷰 내용리뷰 내용리뷰 내용
            </ReviewContent>
          </BottomWrapper>
        </ReviewWrapper>
      </InnerWrapper>
    </ScrollView>
  );
};

export default ReviewListUI;
