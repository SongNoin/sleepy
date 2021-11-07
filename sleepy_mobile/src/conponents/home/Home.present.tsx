import React from "react";

import { useNavigation } from "@react-navigation/native";

import {
  HomeView,
  DetailProduct,
  MainBanner,
  MainBannerWrapper,
  NewProductWrapper,
  NewProductTitle,
  DetailProductWrapper,
  ProductImage,
  InformationWrapper,
  ProductTitle,
  FavoriteImage,
  ContentsWrapper,
  ProductPrice,
  MoreProduct,
  MoreProductText,
} from "./Home.styles";

import Category from "./Category";

import { ScrollView } from "react-native";

const HomeUI = () => {
  const navigation = useNavigation();

  return (
    <ScrollView>
      <HomeView>
        <MainBannerWrapper>
          <MainBanner
            source={require("../../../public/images/home/mainbanner.png")}
          />
        </MainBannerWrapper>
        <Category />
        <NewProductWrapper>
          <NewProductTitle>금주의 신상품</NewProductTitle>

          <DetailProductWrapper>
            <InformationWrapper>
              <DetailProduct
                onPress={() => navigation.navigate("상품 상세보기")}
              >
                <ProductImage
                  source={require("../../../public/images/home/product1.png")}
                />
              </DetailProduct>
              <ContentsWrapper>
                <ProductTitle>글자는띄어쓰기없이열한</ProductTitle>
                <FavoriteImage
                  source={require("../../../public/images/home/moon-off.png")}
                />
              </ContentsWrapper>
              <ProductPrice>199000원</ProductPrice>
            </InformationWrapper>
            <InformationWrapper>
              <DetailProduct
                onPress={() => navigation.navigate("상품 상세보기")}
              >
                <ProductImage
                  source={require("../../../public/images/home/product2.png")}
                />
              </DetailProduct>
              <ContentsWrapper>
                <ProductTitle>글자는띄어쓰기없이열한</ProductTitle>
                <FavoriteImage
                  source={require("../../../public/images/home/moon-on.png")}
                />
              </ContentsWrapper>
              <ProductPrice>199000원</ProductPrice>
            </InformationWrapper>
          </DetailProductWrapper>
          <DetailProductWrapper>
            <InformationWrapper>
              <DetailProduct
                onPress={() => navigation.navigate("상품 상세보기")}
              >
                <ProductImage
                  source={require("../../../public/images/home/product1.png")}
                />
              </DetailProduct>
              <ContentsWrapper>
                <ProductTitle>글자는띄어쓰기없이열한</ProductTitle>
                <FavoriteImage
                  source={require("../../../public/images/home/moon-off.png")}
                />
              </ContentsWrapper>
              <ProductPrice>199000원</ProductPrice>
            </InformationWrapper>
            <InformationWrapper>
              <DetailProduct
                onPress={() => navigation.navigate("상품 상세보기")}
              >
                <ProductImage
                  source={require("../../../public/images/home/product2.png")}
                />
              </DetailProduct>
              <ContentsWrapper>
                <ProductTitle>글자는띄어쓰기없이열한</ProductTitle>
                <FavoriteImage
                  source={require("../../../public/images/home/moon-on.png")}
                />
              </ContentsWrapper>
              <ProductPrice>199900원</ProductPrice>
            </InformationWrapper>
          </DetailProductWrapper>
        </NewProductWrapper>
        <MoreProduct>
          <MoreProductText>상품 더보기</MoreProductText>
        </MoreProduct>
      </HomeView>
    </ScrollView>
  );
};

export default HomeUI;
