import React, { useState } from "react";
import { Dimensions } from "react-native";
import Carousel from "./Carousel";
import styled from "@emotion/native";

const ProductWrapper = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 325px;
  height: 174px;
  /* border: 1px solid red; */
`;

const ProductImage = styled.Image`
  border-radius: 13px;
  /* border-top-right-radius: 13px; */
  width: 325px;
  height: 174px;
`;

const ProductImages = (props: any) => {
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
      gap={8}
      offset={0}
      data={ProductsSheet}
      pageWidth={screenWidth - (10 + 15) * 2}
      RenderItem={ProductsSheetPage}
    />
  );
};

export default ProductImages;
