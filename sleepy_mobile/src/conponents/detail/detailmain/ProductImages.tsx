import React, { useState } from "react";
import { Dimensions } from "react-native";
import Carousel from "./Carousel";
import styled from "@emotion/native";

const ProductWrapper = styled.View`
  display: flex;
  flex-direction: row;
  height: 200px;
`;

const ProductImage = styled.Image`
  border-radius: 13px;
  width: 333px;
  height: 174px;
`;

// const ProudctDot = styled.Text``;

const ProductImages = (props) => {
  const [page, setPage] = useState(0);

  const screenWidth = Math.round(Dimensions.get("window").width);
  const ProductsSheet = [
    {
      id: 0,
      image: props.data?.fetchUseditem?.images[0],
    },
    {
      id: 1,
      image: props.data?.fetchUseditem?.images[1],
    },
    {
      id: 2,
      image: props.data?.fetchUseditem?.images[2],
    },
  ];

  const ProductsSheetPage = ({
    item,
  }: {
    item: {
      id: number;
    };
  }) => {
    return (
      <ProductWrapper>
        <ProductImage
          source={{ uri: `https://storage.googleapis.com/${item.image}` }}
        ></ProductImage>
      </ProductWrapper>
    );
  };

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

export default ProductImages;
