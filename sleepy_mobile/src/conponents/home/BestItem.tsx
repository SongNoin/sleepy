import React from "react";

import styled from "@emotion/native";
import { useNavigation } from "@react-navigation/native";

const DetailProduct = styled.TouchableOpacity`
  width: 160px;
  height: 135px;
  border: 1px solid #e8e8e8;
  background-color: #e8e8e8;
  border-radius: 15px;
`;

const DetailProductWrapper = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  margin-top: 10px;
  /* margin-left: 20px; */
`;

const ProductImage = styled.Image`
  border-radius: 15px;
  width: 100%;
  height: 100%;
`;

const InformationWrapper = styled.View``;

const ProductTitle = styled.Text`
  width: 122px;
  height: 16px;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  color: #3c3c3c;
`;

const FavoriteImage = styled.Image`
  width: 15.72px;
  height: 18px;
`;

const ContentsWrapper = styled.View`
  width: 160px;
  height: 18px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 9px;
`;

const ProductPrice = styled.Text`
  width: 100px;
  height: 18px;
  color: #5b5bc0;
  font-style: normal;
  font-family: "NotoSans-Bold";
  font-weight: bold;
  font-size: 12px;
  line-height: 16px;
`;

const PickedCount = styled.Text`
  width: 10px;
  height: 15px;
  /* color: #5b5bc0; */
  /* font-weight: 600; */
`;

const ContentsTextWrapper = styled.View`
  width: 160px;
  height: 18px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 9px;
`;

const BestItem = (props) => {
  const navigation = useNavigation();

  return (
    <>
      <DetailProductWrapper>
        {props.bestData?.fetchUseditemsOfTheBest
          .slice(0, 2)
          .map((el, index) => (
            <InformationWrapper key={el._id}>
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
                  <ProductTitle>
                    {String(el.name.split("#")[1]).length > 9
                      ? `${el.name.split("#")[1].substr(0, 10)}...`
                      : el.name.split("#")[1]}
                  </ProductTitle>
                  {props.myPickData?.includes(el._id) ? (
                    <FavoriteImage
                      source={require("../../../public/images/home/moon-on.png")}
                    />
                  ) : (
                    <FavoriteImage
                      source={require("../../../public/images/home/moon-off.png")}
                    />
                  )}
                </ContentsWrapper>
                <ContentsTextWrapper>
                  <ProductPrice>
                    {el.price
                      .toLocaleString("ko-KR")
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                    원
                  </ProductPrice>
                  <PickedCount>{el.pickedCount}</PickedCount>
                </ContentsTextWrapper>
              </>
            </InformationWrapper>
          ))}
      </DetailProductWrapper>
      <DetailProductWrapper>
        {props.bestData?.fetchUseditemsOfTheBest
          .slice(2, 4)
          .map((el, index) => (
            <InformationWrapper key={el._id}>
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
                  <ProductTitle>
                    {String(el.name.split("#")[1]).length > 9
                      ? `${el.name.split("#")[1].substr(0, 10)}...`
                      : el.name.split("#")[1]}
                  </ProductTitle>
                  {props.myPickData?.includes(el._id) ? (
                    <FavoriteImage
                      source={require("../../../public/images/home/moon-on.png")}
                    />
                  ) : (
                    <FavoriteImage
                      source={require("../../../public/images/home/moon-off.png")}
                    />
                  )}
                </ContentsWrapper>
                <ContentsTextWrapper>
                  <ProductPrice>
                    {el.price
                      .toLocaleString("ko-KR")
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                    원
                  </ProductPrice>
                  <PickedCount>{el.pickedCount}</PickedCount>
                </ContentsTextWrapper>
              </>
            </InformationWrapper>
          ))}
      </DetailProductWrapper>
    </>
  );
};

export default BestItem;
