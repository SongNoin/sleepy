import React from "react";

import {
  MyMainView,
  ProfileWrapper,
  ProfileImage,
  ProfileInfoWrapper,
  ProfileNameWapper,
  ProfileName,
  ProfileNameNim,
  ProfileEmailWrapper,
  ProfileEmail,
  ProfileEmailContent,
  ProfilePointWrapper,
  ProfilePoint,
  ProfilePointContent,
  IconBackGround,
  IconWrapper,
  InsertImage,
  HistoryWrapper,
  HistoryTitleWrapper,
  BuyHistory,
  PointHistory,
} from "./Mypage.styles";

import { useNavigation } from "@react-navigation/native";

const MypageUI = () => {
  const navigation = useNavigation();

  return (
    <MyMainView>
      <ProfileWrapper>
        <ProfileImage
          source={require("../../../../public/images/mypage/mypageexmapleprofile.png")}
        />
        <ProfileInfoWrapper>
          <ProfileNameWapper>
            <ProfileName>밥 먹고 똥 싸는게 좋다</ProfileName>
            <ProfileNameNim>님</ProfileNameNim>
          </ProfileNameWapper>
          <ProfileEmailWrapper>
            <ProfileEmail>이메일</ProfileEmail>
            <ProfileEmailContent>littlebi96@naver.com</ProfileEmailContent>
          </ProfileEmailWrapper>
          <ProfilePointWrapper>
            <ProfilePoint>포인트</ProfilePoint>
            <ProfilePointContent>100,000,000,000</ProfilePointContent>
          </ProfilePointWrapper>
        </ProfileInfoWrapper>
      </ProfileWrapper>
      <IconWrapper>
        <IconBackGround onPress={() => navigation.navigate("내정보 수정")}>
          <InsertImage
            source={require("../../../../public/images/mypage/myinformation.png")}
          />
        </IconBackGround>
        <IconBackGround onPress={() => navigation.navigate("마이찜")}>
          <InsertImage
            source={require("../../../../public/images/mypage/favorite.png")}
          />
        </IconBackGround>
        <IconBackGround onPress={() => navigation.navigate("장바구니")}>
          <InsertImage
            source={require("../../../../public/images/mypage/cart.png")}
          />
        </IconBackGround>
        <IconBackGround>
          <InsertImage
            source={require("../../../../public/images/mypage/charge.png")}
          />
        </IconBackGround>
      </IconWrapper>
      <HistoryWrapper>
        <HistoryTitleWrapper>
          <BuyHistory>구매내역</BuyHistory>
          <PointHistory>포인트내역</PointHistory>
        </HistoryTitleWrapper>
      </HistoryWrapper>
    </MyMainView>
  );
};

export default MypageUI;
