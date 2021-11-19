import React, { useState } from "react";
import styled from "@emotion/native";

import { useNavigation } from "@react-navigation/native";

const NewProductWrapper = styled.View`
  margin-top: 32px;
  width: 100%;
`;

const NewProductTitle = styled.Text`
  width: 100%;
  height: 25px;
  font-weight: bold;
  font-size: 18px;
  color: #3b3b3b;
  padding-left: 18px;
`;

const MiddleWrapper2 = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 100%;
`;

const DetailProductWrapper = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

const NewProductInfoWrapper = styled.View``;

const DetailProduct = styled.TouchableOpacity`
  width: 160px;
  height: 135px;
  border: 1px solid #e8e8e8;
  background-color: #e8e8e8;
  border-radius: 15px;
  margin-top: 20px;
`;

const ProductImage = styled.Image`
  border-radius: 15px;
  width: 100%;
  height: 100%;
`;

const ContentsWrapper = styled.View`
  width: 160px;
  height: 18px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 9px;
`;

const ProductTitle = styled.Text`
  width: 122px;
  height: 16px;
  font-size: 12px;
  color: #3c3c3c;
`;

const FavoriteImage = styled.Image`
  width: 15.72px;
  height: 16.97px;
`;

const ProductPrice = styled.Text`
  width: 100px;
  height: 18px;
  color: #5b5bc0;
  font-weight: 600;
`;

const NewProductItem = (props) => {
  const navigation = useNavigation();

  return (
    <NewProductWrapper>
      <NewProductTitle>금주의 신상품</NewProductTitle>
      <MiddleWrapper2>
        <DetailProductWrapper>
          {props.isEdit === false ? (
            <>
              {props.data?.fetchUseditems.slice(0, 4).map((el, index) => (
                <NewProductInfoWrapper key={el._id}>
                  {index % 2 === 0 && (
                    <>
                      <DetailProduct
                        onPress={() =>
                          navigation.navigate("상품 상세보기", {
                            id: props.onPressDetail(el),
                          })
                        }
                      >
                        <ProductImage
                          source={{
                            uri: `https://storage.googleapis.com/${el.images[0]}`,
                          }}
                        />
                      </DetailProduct>
                      <ContentsWrapper>
                        <ProductTitle>{el.name.split("#")[1]}</ProductTitle>
                        <FavoriteImage
                          source={require("../../../public/images/home/moon-off.png")}
                        />
                      </ContentsWrapper>
                      <ProductPrice>{el.price}원</ProductPrice>
                    </>
                  )}
                </NewProductInfoWrapper>
              ))}
            </>
          ) : (
            <>
              {props.data?.fetchUseditems.map((el, index) => (
                <NewProductInfoWrapper key={el._id}>
                  {index % 2 === 0 && (
                    <>
                      <DetailProduct
                        onPress={() =>
                          navigation.navigate("상품 상세보기", {
                            id: props.onPressDetail(el),
                          })
                        }
                      >
                        <ProductImage
                          source={{
                            uri: `https://storage.googleapis.com/${el.images[0]}`,
                          }}
                        />
                      </DetailProduct>
                      <ContentsWrapper>
                        <ProductTitle>{el.name.split("#")[1]}</ProductTitle>
                        <FavoriteImage
                          source={require("../../../public/images/home/moon-off.png")}
                        />
                      </ContentsWrapper>
                      <ProductPrice>{el.price}원</ProductPrice>
                    </>
                  )}
                </NewProductInfoWrapper>
              ))}
            </>
          )}
        </DetailProductWrapper>
        <DetailProductWrapper>
          {props.isEdit === false ? (
            <>
              {props.data?.fetchUseditems.slice(0, 4).map((el, index) => (
                <NewProductInfoWrapper key={el._id}>
                  {index % 2 !== 0 && (
                    <>
                      <DetailProduct
                        onPress={() =>
                          navigation.navigate("상품 상세보기", {
                            id: props.onPressDetail(el),
                          })
                        }
                      >
                        <ProductImage
                          source={{
                            uri: `https://storage.googleapis.com/${el.images[0]}`,
                          }}
                        />
                      </DetailProduct>
                      <ContentsWrapper>
                        <ProductTitle>{el.name.split("#")[1]}</ProductTitle>
                        <FavoriteImage
                          source={require("../../../public/images/home/moon-off.png")}
                        />
                      </ContentsWrapper>
                      <ProductPrice>{el.price}원</ProductPrice>
                    </>
                  )}
                </NewProductInfoWrapper>
              ))}
            </>
          ) : (
            <>
              {props.data?.fetchUseditems.map((el, index) => (
                <NewProductInfoWrapper key={el._id}>
                  {index % 2 !== 0 && (
                    <>
                      <DetailProduct
                        onPress={() =>
                          navigation.navigate("상품 상세보기", {
                            id: props.onPressDetail(el),
                          })
                        }
                      >
                        <ProductImage
                          source={{
                            uri: `https://storage.googleapis.com/${el.images[0]}`,
                          }}
                        />
                      </DetailProduct>
                      <ContentsWrapper>
                        <ProductTitle>{el.name.split("#")[1]}</ProductTitle>
                        <FavoriteImage
                          source={require("../../../public/images/home/moon-off.png")}
                        />
                      </ContentsWrapper>
                      <ProductPrice>{el.price}원</ProductPrice>
                    </>
                  )}
                </NewProductInfoWrapper>
              ))}
            </>
          )}
        </DetailProductWrapper>
      </MiddleWrapper2>
    </NewProductWrapper>
  );
};

export default NewProductItem;
