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

export const ProductImage = styled.Image`
  width: 100%;
  height: 100%;
  border-radius: 15px;
  border: 1px solid #f1eef6;
`;

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
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 19px;
  color: #3b3b3b;
`;

export const InfoPrice = styled.Text`
  width: 190px;
  height: 19px;
  font-family: "NotoSans-Bold";
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 19px;
  color: #5b5bc0;
`;

export const InfoFavoriteImage = styled.Image`
  width: 22.62px;
  height: 24.52px;
`;

export const InfoPickedCount = styled.Text``;

export const FavoriteWrapper = styled.TouchableOpacity`
  display: flex;
  justify-content: center;
  align-items: center;
`;
