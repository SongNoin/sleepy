import styled from "@emotion/native";

export const Wrapper = styled.View`
  flex: 1;
  align-items: center;
  background-color: white;
  margin-bottom: 2%;
`;

export const ProductWrapper = styled.View`
  width: 339px;
  margin-bottom: 4%;
  border-bottom-width: 3px;
  border-bottom-color: #f1eef7;
`;

export const ProductImage = styled.Image`
  border: 1px solid black;
  border: none;
  width: 339px;
  height: 174px;
  border-radius: 13px;
  margin-bottom: 7%;
`;

export const ReviewInfoWrapper = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 5%;
`;

export const ReviewStar = styled.Image`
  width: 16.88px;
  height: 16.16px;
  margin-right: 3.12px;
`;

export const ReviewAverage = styled.Text``;

export const ProductName = styled.Text`
  font-weight: 700;
  font-style: normal;
  font-size: 17px;
  line-height: 24.52px;
  color: black;
  margin-bottom: 1%;
`;

export const ProductPrice = styled.Text`
  font-weight: 700;
  font-style: normal;
  font-size: 14px;
  line-height: 19.07px;
  color: #5b5bc0;
  margin-bottom: 5%;
`;

export const DetaillWrapper = styled.View`
  width: 339px;
  border: 2px solid #f9f8f8;
  border-radius: 13px;
  padding: 12px 10px 10px 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 5%;
`;

export const DetailContent = styled.Text`
  text-align: center;
  font-weight: 400;
  font-style: normal;
  font-size: 14px;
  line-height: 16.34px;
  color: black;
  margin-bottom: 8%;
`;

export const Photo = styled.Image`
  width: 320px;
  height: 320px;
  border: 1px solid black;
  border: none;
  border-radius: 13px;
`;

export const ReviewWrapper = styled.View`
  background-color: white;
`;

export const Title = styled.Text`
  margin-top: 4%;
  font-weight: 600;
  font-style: normal;
  font-size: 18px;
  line-height: 24.52px;
  color: black;
  margin-bottom: 4%;
  padding-left: 4%;
  padding-bottom: 3%;
  margin-left: 4%;
  margin-bottom: 6%;
  width: 339px;
  border-bottom-width: 2px;
  border-bottom-color: #f1eef7;
`;

export const IconBackGround = styled.TouchableOpacity``;

export const BuyButton = styled.Text``;
