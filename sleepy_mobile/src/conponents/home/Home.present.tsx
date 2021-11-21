import React from "react";

import {
  HomeView,
  MainBanner,
  MainBannerWrapper,
  BestProductTitle,
  MoreProduct,
  MoreProductText,
  BestProductWrapper,
  CloseProduct,
  CloseProductText,
} from "./Home.styles";

import Category from "./Category";
import NewProductItem from "./NewProductItem";
import BestItem from "./BestItem";
import { ScrollView } from "react-native";

const HomeUI = (props) => {
  return (
    <ScrollView>
      <HomeView>
        <MainBannerWrapper>
          <MainBanner
            source={require("../../../public/images/home/mainbanner.png")}
          />
        </MainBannerWrapper>
        <Category onPressCategory={props.onPressCategory} />
        <BestProductWrapper>
          <BestProductTitle>베스트 상품</BestProductTitle>
          <BestItem
            bestData={props.bestData}
            onPressDetail={props.onPressDetail}
            myPickData={props.myPickData}
          />
        </BestProductWrapper>

        <NewProductItem
          data={props.data}
          isEdit={props.isEdit}
          onPressDetail={props.onPressDetail}
          myPickData={props.myPickData}
        />

        {props.isEdit === false ? (
          <MoreProduct>
            <MoreProductText onPress={props.onPressMoreProduct}>
              상품 더보기
            </MoreProductText>
          </MoreProduct>
        ) : (
          <CloseProduct>
            <CloseProductText onPress={props.onPressCloseProduct}>
              접기
            </CloseProductText>
          </CloseProduct>
        )}
      </HomeView>
    </ScrollView>
  );
};

export default HomeUI;
