import React, { useState } from "react";
import { Dimensions } from "react-native";
import Carousel from "./Carousel";
import styled from "@emotion/native";

const ProductWrapper = styled.View`
  display: flex;
  flex-direction: row;
  /* justify-content: center;
  align-items: center; */
  height: 200px;
`;

const ProductImage = styled.Image`
  border-radius: 13px;
  width: 333px;
  height: 174px;
`;

// const ProudctDot = styled.Text``;

const screenWidth = Math.round(Dimensions.get("window").width);
const ProductsSheet = [
  { id: 0, image: require("../../../../public/images/detail/bag1.png") },
  { id: 1, image: require("../../../../public/images/detail/bag2.png") },
  { id: 2, image: require("../../../../public/images/detail/bag1.png") },
];

const ProductImages = () => {
  const [page, setPage] = useState(0);
  return (
    <Carousel
      page={page}
      setPage={setPage}
      gap={6}
      offset={0}
      data={ProductsSheet}
      pageWidth={screenWidth - (5 + 15) * 2}
      RenderItem={ProductsSheetPage}
    />
  );
};

const ProductsSheetPage = ({
  item,
}: {
  item: {
    id: number;
  };
}) => {
  return (
    <ProductWrapper>
      {/* <ProductImage  source={require("../../../../public/images/detail/bag1.png")}></ProductImage>
      <ProductImage source={require("../../../../public/images/detail/bag2.png")}></ProductImage>
      <ProductImage source={require("../../../../public/images/detail/bag2.png")}></ProductImage> */}
      <ProductImage source={item.image}></ProductImage>
      {/* <ProudctDot>{item.id}</ProudctDot> */}
    </ProductWrapper>
  );
};

export default ProductImages;
