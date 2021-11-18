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
  AddPhotoButton,
  BigAddPhoto,
} from "./ReviewList.styles";

const ReviewListUIItem = (props: any) => {
  return (
    <ScrollView>
      <InnerWrapper>
        <ReviewWrapper>
          <InnerTopWrapper>
            {props.userData?.fetchUserLoggedIn.picture ? (
              <Avatar
                source={{
                  uri: `https://storage.googleapis.com/${props.userData?.fetchUserLoggedIn.picture}`,
                }}
              />
            ) : (
              <Avatar
                source={require("../../../../public/images/mypage/mypagedefaultprofile.png")}
              />
            )}
            <TopMiddleWrapper>
              <Nickname>{props.el?.user?.name}</Nickname>
              <Star>
                {new Array(
                  typeof Number(props.el?.contents.split("#$%&")[0]) ===
                  "string"
                    ? 5
                    : Number(props.el?.contents.split("#$%&")[0])
                )
                  .fill(1)
                  .map((el, index) => (
                    <ReviewStar
                      key={index}
                      source={require("../../../../public/images/detail/star.png")}
                    />
                  ))}
                {new Array(
                  typeof Number(props.el?.contents.split("#$%&")[0]) ===
                  "string"
                    ? 0
                    : Number(5 - props.el?.contents.split("#$%&")[0])
                )
                  .fill(1)
                  .map((el, index) => (
                    <ReviewStar
                      key={index}
                      source={require("../../../../public/images/detail/starempty.png")}
                    />
                  ))}
              </Star>
            </TopMiddleWrapper>
            <Photos>
              <AddPhotoButton onPress={props.onPressEnlargePicture}>
                {props.isLarge ? (
                  <BigAddPhoto
                    source={{
                      uri: `https://storage.googleapis.com/${
                        props.el?.contents.split("#$%&")[2]
                      }`,
                    }}
                    isLarge={props.isLarge}
                  />
                ) : (
                  <AddPhoto
                    source={{
                      uri: `https://storage.googleapis.com/${
                        props.el?.contents.split("#$%&")[2]
                      }`,
                    }}
                    isLarge={props.isLarge}
                  />
                )}
              </AddPhotoButton>
              <NoPhoto />
            </Photos>
          </InnerTopWrapper>
          <BottomWrapper>
            <ContentTitle>리뷰 내용</ContentTitle>
            <ReviewContent>{props.el?.contents.split("#$%&")[1]}</ReviewContent>
          </BottomWrapper>
        </ReviewWrapper>
      </InnerWrapper>
    </ScrollView>
  );
};

export default ReviewListUIItem;
