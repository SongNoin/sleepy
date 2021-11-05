import React from "react";

import {
  MyMainView,
  MyMainText,
  IconBackGround,
  IconWrapper,
  InsertImage,
} from "./Mypage.styles";

import { useNavigation } from "@react-navigation/native";

const MypageUI = () => {
  const navigation = useNavigation();

  return (
    <MyMainView>
      <MyMainText>여기는 마이페이지 입니다.</MyMainText>
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
    </MyMainView>
  );
};

export default MypageUI;
