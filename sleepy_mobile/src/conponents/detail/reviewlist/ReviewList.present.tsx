import React from "react";
import { ScrollView } from "react-native";
import ReviewListCard from "./ReviewList.Card.present";

import {
  Wrapper,
  // InnerWrapper,
  // ReviewWrapper,
  Title,
  // InnerTopWrapper,
  // Avatar,
  // TopMiddleWrapper,
  // Nickname,
  // Star,
  // ReviewStar,
  // Photos,
  // AddPhoto,
  // BottomWrapper,
  // ContentTitle,
  // ReviewContent,
} from "./ReviewList.styles";

const ReviewListUI = () => {
  return (
    <ScrollView>
      <Wrapper>
        <Title>리뷰</Title>
        <ReviewListCard />
        <ReviewListCard />
      </Wrapper>
    </ScrollView>
  );
};

export default ReviewListUI;
