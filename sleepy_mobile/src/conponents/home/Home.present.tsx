import React from "react";

import { useNavigation } from "@react-navigation/native";

import {
  HomeView,
  DetailProduct,
  MainBanner,
  MainBannerWrapper,
  BestProductTitle,
  DetailProductWrapper,
  ProductImage,
  InformationWrapper,
  ProductTitle,
  FavoriteImage,
  ContentsWrapper,
  ProductPrice,
  MoreProduct,
  MoreProductText,
  BestProductWrapper,
  MoreProductWrapper,
  CloseProduct,
  CloseProductText,
} from "./Home.styles";

import Category from "./Category";
import NewProductItem from "./NewProductItem";
import { ScrollView } from "react-native";

const HomeUI = (props) => {
  const navigation = useNavigation();

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
        </BestProductWrapper>

        <NewProductItem
          data={props.data}
          isEdit={props.isEdit}
          onPressDetail={props.onPressDetail}
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
