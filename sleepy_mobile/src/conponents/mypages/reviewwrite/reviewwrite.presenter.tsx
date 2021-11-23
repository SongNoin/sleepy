import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import ReviewUploadContainer from "../../commons/reviewupload/reviewupload.container";

import {
  ReviewWriteView,
  ProductCard,
  ProductImage,
  ProductInfo,
  CategoryWrapper,
  Category,
  CategoryContent,
  ReviewPhotoWrapper,
  ProductNameWrapper,
  ProductName,
  ProductPriceWrapper,
  ProductPrice,
  LabelWrapper,
  Label,
  LableLine,
  ReviewStarWrapper,
  StarButton,
  FlexLine,
  StarIcon,
  ReviewContentWrapper,
  ReviewContentInput,
  ReviewWriteButton,
  ReviewWriteButtonText,
  Star,
} from "./reviewwrite.styles";

export default function ReviewUI(props: any) {
  return (
    <>
      <ScrollView>
        <ReviewWriteView>
          <ProductCard>
            <ProductImage
              source={{
                uri: `https://storage.googleapis.com/${props.data?.fetchUseditem.images[0]}`,
              }}
            />
            <ProductInfo>
              <CategoryWrapper>
                <Category>카테고리</Category>
                <CategoryContent>
                  {props.data?.fetchUseditem.tags}
                </CategoryContent>
              </CategoryWrapper>
              <ProductNameWrapper>
                <ProductName>
                  {String(props.data?.fetchUseditem.name.split("#")[1]).length >
                  9
                    ? `${String(
                        props.data?.fetchUseditem.name.split("#")[1]
                      ).substr(0, 10)}...`
                    : props.data?.fetchUseditem.name.split("#")[1]}
                </ProductName>
              </ProductNameWrapper>
              <ProductPriceWrapper>
                <ProductPrice>
                  {props.data?.fetchUseditem.price
                    .toLocaleString("ko-KR")
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                  원
                </ProductPrice>
              </ProductPriceWrapper>
            </ProductInfo>
          </ProductCard>
          <LabelWrapper>
            <Label>이미지 등록</Label>
            <LableLine />
          </LabelWrapper>
          <ReviewPhotoWrapper>
            <ReviewUploadContainer setImage={props.setImage} />
            <FlexLine />
          </ReviewPhotoWrapper>
          <LabelWrapper>
            <Label>별점</Label>
            <LableLine />
          </LabelWrapper>
          <ReviewStarWrapper>
            <Star>
              {new Array(5).fill(1).map((el, index) => (
                <StarButton
                  key={index}
                  onPress={() => props.setMyStar(index + 1)}
                >
                  {props.myStar > index ? (
                    <StarIcon
                      source={require("../../../../public/images/mypage/onstar.png")}
                    />
                  ) : (
                    <StarIcon
                      source={require("../../../../public/images/mypage/offstar.png")}
                    />
                  )}
                </StarButton>
              ))}
            </Star>
            <FlexLine />
          </ReviewStarWrapper>
          <LabelWrapper>
            <Label>리뷰 작성</Label>
            <LableLine />
          </LabelWrapper>
          <ReviewContentWrapper>
            <ReviewContentInput
              onChangeText={props.onChangeContents}
              style={{ flexShrink: 1 }}
              multiline={true}
            ></ReviewContentInput>
          </ReviewContentWrapper>
          <ReviewWriteButton onPress={props.onClickRegisterReview}>
            <ReviewWriteButtonText>리뷰 작성</ReviewWriteButtonText>
          </ReviewWriteButton>
        </ReviewWriteView>
      </ScrollView>
    </>
  );
}
