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
  NoPhoto,
  BottomWrapper,
  ContentTitle,
  ReviewContent,
} from "./ReviewList.styles";

const ReviewListUIItem = (props: any) => {
  return (
    <ScrollView>
      <InnerWrapper>
        <ReviewWrapper>
          <InnerTopWrapper>
            <Avatar
              source={require("../../../../public/images/detail/reviewavatar.png")}
            />
            <TopMiddleWrapper>
              <Nickname>{props.el?.user?.name}</Nickname>
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
              {props.data?.fetchUseditem.images[0] ? (
                <AddPhoto
                  source={{
                    uri: `https://storage.googleapis.com/${props.data?.fetchUseditem.images[0]}`,
                  }}
                />
              ) : (
                <NoPhoto />
              )}
              {props.data?.fetchUseditem.images[1] ? (
                <AddPhoto
                  source={{
                    uri: `https://storage.googleapis.com/${props.data?.fetchUseditem.images[1]}`,
                  }}
                />
              ) : (
                <NoPhoto />
              )}
            </Photos>
          </InnerTopWrapper>
          <BottomWrapper>
            <ContentTitle>리뷰 내용</ContentTitle>
            <ReviewContent>{props.el?.contents}</ReviewContent>
          </BottomWrapper>
        </ReviewWrapper>
      </InnerWrapper>
    </ScrollView>
  );
};

export default ReviewListUIItem;
