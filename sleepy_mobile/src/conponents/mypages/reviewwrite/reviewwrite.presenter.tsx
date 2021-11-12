import React from "react";
import { ScrollView } from "react-native-gesture-handler";

import {
  ReviewWriteView,
  ProductCard,
  ProductImage,
  ProductInfo,
  CategoryWrapper,
  Category,
  CategoryContent,
  ProductNameWrapper,
  ProductName,
  ProductPriceWrapper,
  ProductPrice,
  LabelWrapper,
  Label,
  LableLine,
  ReviewPhotoWrapper,
  ReviewPhotoUpload,
  Plus,
  ReviewStarWrapper,
  StarIcon,
  ReviewContentWrapper,
  ReviewContentInput,
  ReviewWriteButton,
  ReviewWriteButtonText,
} from "./reviewwrite.styles";

export default function ReviewUI() {
  return (
    <>
      <ScrollView>
        <ReviewWriteView>
          <ProductCard>
            <ProductImage
              source={require("../../../../public/images/mypage/buyhistoryproductphoto.png")}
            />
            <ProductInfo>
              <CategoryWrapper>
                <Category>카테고리</Category>
                <CategoryContent>이불</CategoryContent>
              </CategoryWrapper>
              <ProductNameWrapper>
                <ProductName>글자는띄어쓰기없이</ProductName>
              </ProductNameWrapper>
              <ProductPriceWrapper>
                <ProductPrice>199000원</ProductPrice>
              </ProductPriceWrapper>
            </ProductInfo>
          </ProductCard>
          <LabelWrapper>
            <Label>이미지 등록</Label>
            <LableLine />
          </LabelWrapper>
          <ReviewPhotoWrapper>
            <ReviewPhotoUpload>
              <Plus>+</Plus>
            </ReviewPhotoUpload>
            <ReviewPhotoUpload>
              <Plus>+</Plus>
            </ReviewPhotoUpload>
            <ReviewPhotoUpload>
              <Plus>+</Plus>
            </ReviewPhotoUpload>
          </ReviewPhotoWrapper>
          <LabelWrapper>
            <Label>별점</Label>
            <LableLine />
          </LabelWrapper>
          <ReviewStarWrapper>
            <StarIcon
              source={require("../../../../public/images/mypage/onstar.png")}
            />
            <StarIcon
              source={require("../../../../public/images/mypage/onstar.png")}
            />
            <StarIcon
              source={require("../../../../public/images/mypage/onstar.png")}
            />
            <StarIcon
              source={require("../../../../public/images/mypage/onstar.png")}
            />
            <StarIcon
              source={require("../../../../public/images/mypage/offstar.png")}
            />
          </ReviewStarWrapper>
          <LabelWrapper>
            <Label>리뷰 작성 & 리뷰 수정</Label>
            <LableLine />
          </LabelWrapper>
          <ReviewContentWrapper>
            <ReviewContentInput
              style={{ flexShrink: 1 }}
              multiline={true}
            ></ReviewContentInput>
          </ReviewContentWrapper>
          <ReviewWriteButton>
            <ReviewWriteButtonText>리뷰 작성 & 리뷰 수정</ReviewWriteButtonText>
          </ReviewWriteButton>
        </ReviewWriteView>
      </ScrollView>
    </>
  );
}
