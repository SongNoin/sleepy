import styled from "@emotion/native";

export const ReviewWriteView = styled.View`
  flex: 1;
  background-color: white;
  padding-left: 16px;
  background-color: #ffffff;
  padding-bottom: 20px;
  align-items: center;
`;

export const ProductCard = styled.View`
  width: 339px;
  height: 140px;

  border: 1px solid #e2e2ff;
  box-shadow: 0px 4px 8px rgba(84, 84, 84, 0.05);
  border-radius: 15px;
  display: flex;
  flex-direction: row;

  margin-top: 12px;
  padding-top: 15px;
  padding-left: 25px;
`;

export const ProductImage = styled.Image`
  width: 110px;
  height: 105px;
  border-radius: 15px;
`;

export const ProductInfo = styled.View`
  margin-left: 15px;
  margin-top: 15px;
`;
export const CategoryWrapper = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const Category = styled.Text`
  font-family: "NotoSans-Bold";
  font-weight: 600;
  font-size: 12px;
  line-height: 15px;

  color: #646464;
`;
export const CategoryContent = styled.Text`
  font-family: "NotoSans-Regular";
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 15px;

  color: #5b5bc0;

  margin-left: 2px;
`;
export const ProductNameWrapper = styled.View`
  margin-top: 8px;
`;
export const ProductName = styled.Text`
  font-family: "NotoSans-Bold";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;

  color: #3c3c3c;
`;
export const ProductPriceWrapper = styled.View`
  margin-top: 5px;
`;

export const ProductPrice = styled.Text`
  font-family: "NotoSans-Bold";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 19px;

  color: #5b5bc0;
`;

export const LabelWrapper = styled.View`
  display: flex;
  margin-top: 36px;
`;

export const Label = styled.Text`
  font-family: "NotoSans-Bold";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 25px;

  color: #3b3b3b;
`;

export const LableLine = styled.View`
  width: 339px;
  border-bottom-width: 1px;
  border-bottom-color: #f1eef6;

  margin-top: 12px;
`;

export const FlexLine = styled.View`
  width: 339px;
`;
export const ReviewPhotoWrapper = styled.View`
  margin-top: 12px;

  display: flex;
  flex-direction: column;
`;
export const ReviewStarWrapper = styled.View`
  margin-top: 13px;

  display: flex;
  flex-direction: column;
`;

export const Star = styled.View`
  display: flex;
  flex-direction: row;
`;

export const StarButton = styled.TouchableOpacity``;

export const StarIcon = styled.Image`
  width: 22px;
  margin-right: 7px;
`;

export const ReviewContentWrapper = styled.View`
  width: 339px;
  height: 339px;
  border: 1px solid #f9f8f8;
  border-radius: 15px;

  margin-top: 12px;
  padding-left: 10px;
  padding-right: 10px;
`;

export const ReviewContentInput = styled.TextInput`
  width: 100%;

  font-family: "NotoSans-Regular";
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 16px;

  color: #585858;
`;

export const ReviewWriteButton = styled.TouchableOpacity`
  width: 339px;
  height: 70px;
  background: #5b5bc0;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: 24px;
`;

export const ReviewWriteButtonText = styled.Text`
  font-family: "NotoSans-Bold";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 25px;
  /* identical to box height */

  color: #ffffff;
`;
