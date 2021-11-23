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
            {props.el?.user.picture ? (
              <Avatar
                source={{
                  uri: `https://storage.googleapis.com/${props.el?.user.picture}`,
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
              {props.el?.contents.split("#$%&")[2] !== "" && (
                <AddPhotoButton onPress={props.onPressEnlargePicture}>
                  {props.isLarge ? (
                    <BigAddPhoto
                      source={{
                        uri: `https://storage.googleapis.com/${
                          props.el?.contents.split("#$%&")[2]
                        }`,
                      }}
                    />
                  ) : (
                    <AddPhoto
                      source={{
                        uri: `https://storage.googleapis.com/${
                          props.el?.contents.split("#$%&")[2]
                        }`,
                      }}
                    />
                  )}
                </AddPhotoButton>
              )}
            </Photos>
          </InnerTopWrapper>
          <BottomWrapper>
            {!props.isLarge && (
              <>
                <ContentTitle>리뷰 내용</ContentTitle>
                <ReviewContent>
                  {props.el?.contents.split("#$%&")[1]}
                </ReviewContent>
              </>
            )}
          </BottomWrapper>
        </ReviewWrapper>
      </InnerWrapper>
    </ScrollView>
  );
};

export default ReviewListUIItem;
