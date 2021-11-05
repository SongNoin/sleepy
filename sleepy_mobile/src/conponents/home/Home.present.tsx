import React from "react";

import { useNavigation } from "@react-navigation/native";

import {
  HomeView,
  DetailProduct,
  DetailProductText,
  MainBanner,
  MainBannerWrapper,
} from "./Home.styles";

import Category from "./Category";

const HomeUI = () => {
  const navigation = useNavigation();

  return (
    <HomeView>
      <MainBannerWrapper>
        <MainBanner
          source={require("../../../public/images/home/mainbanner.png")}
        />
      </MainBannerWrapper>
      <Category />

      <DetailProduct onPress={() => navigation.navigate("상품 상세보기")}>
        <DetailProductText>디테일 페이지 이동</DetailProductText>
      </DetailProduct>
    </HomeView>
  );
};

export default HomeUI;
