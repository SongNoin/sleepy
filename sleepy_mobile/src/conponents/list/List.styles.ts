import styled from "@emotion/native";

export const ListView = styled.View`
  background-color: white;
  width: 100%;
  height: 100%;
`;

export const ListText = styled.Text`
  font-size: 50px;
  color: red;
`;

export const DetailProductWrapper = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 32px;
`;

export const ProductImageWrapper = styled.TouchableOpacity`
  width: 339px;
  height: 193px;
`;

export const ProductImage = styled.Image``;

export const InfoWrapper = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 12px;
`;

export const InfoTextWrapper = styled.View``;

export const InfoTitle = styled.Text`
  width: 300px;
  height: 19px;
  font-size: 13px;
  letter-spacing: -0.3px;
  color: #3b3b3b;
`;

export const InfoPrice = styled.Text`
  width: 190px;
  height: 19px;
  font-weight: bold;
  font-size: 13px;
  color: #5b5bc0;
`;

export const InfoFavoriteImage = styled.Image``;
