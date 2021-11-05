import styled from "@emotion/native";

export const MyMainView = styled.View`
  flex: 1;
  align-items: center;
  background-color: white;
  padding-bottom: 20px;
`;

export const ProfileWrapper = styled.View`
  height: 100px;
  display: flex;
  flex-direction: row;
  margin-top: 24px;
`;

export const ProfileImage = styled.Image`
  width: 100px;
  height: 100px;
`;

export const ProfileInfoWrapper = styled.View`
  margin-left: 24px;
`;

export const ProfileNameWapper = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const ProfileName = styled.Text`
  font-family: Noto Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;
  color: #000000;
`;
export const ProfileNameNim = styled.Text`
  margin-left: 3px;
`;

export const ProfileEmailWrapper = styled.View`
  margin-top: 5px;
`;

export const ProfileEmail = styled.Text`
  font-family: Noto Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 19px;
  color: #3b3b3b;
`;
export const ProfileEmailContent = styled.Text`
  font-family: Noto Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
`;

export const ProfilePointWrapper = styled.View`
  margin-top: 5px;
`;
export const ProfilePoint = styled.Text`
  font-family: Noto Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 19px;
  color: #3b3b3b;
`;
export const ProfilePointContent = styled.Text`
  font-family: Noto Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 16px;
  color: #5b5bc0;
`;
export const IconBackGround = styled.TouchableOpacity`
  width: 56px;
  height: 50px;
  border-radius: 8px;
  background-color: #5b5bc0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const IconWrapper = styled.View`
  width: 75%;
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 32px;
  justify-content: space-between;
`;

export const InsertImage = styled.Image``;

export const HistoryWrapper = styled.View``;
export const HistoryTitleWrapper = styled.View`
  display: flex;
  flex-direction: row;

  margin-top: 30px;
`;

export const BuyLineWrapper = styled.View<{ isPoint: boolean }>`
  width: 80px;
  border-bottom-width: ${(props) => (props.isPoint === false ? "2px" : "0px")};
  border-bottom-color: #5b5bc0;
  margin-right: 26px;
  padding-bottom: 4px;
`;
export const PointLineWrapper = styled.View<{ isPoint: boolean }>`
  width: 80px;
  border-bottom-width: ${(props) => (props.isPoint === true ? "2px" : "0px")};
  border-bottom-color: #5b5bc0;
  padding-bottom: 4px;
`;

export const BuyHistory = styled.Text<{ isPoint: boolean }>`
  font-family: Noto Sans;
  font-style: normal;
  font-weight: ${(props) => (props.isPoint === false ? "bold" : "normal")};
  font-size: 14px;
  line-height: 19px;
  color: ${(props) => (props.isPoint === false ? "#5b5bc0" : "#8c8c8c")};
  text-align: center;
`;
export const PointHistory = styled.Text<{ isPoint: boolean }>`
  font-family: Noto Sans;
  font-style: normal;
  font-weight: ${(props) => (props.isPoint === true ? "bold" : "normal")};
  font-size: 14px;
  line-height: 19px;
  color: ${(props) => (props.isPoint === true ? "#5b5bc0" : "#8c8c8c")};
  text-align: center;
`;

export const BuyHistoryWrapper = styled.View`
  margin-top: 10px;
`;
export const ProductCard = styled.View`
  width: 339px;
  height: 140px;

  border: 1px solid #e2e2ff;
  box-shadow: 0px 4px 8px rgba(84, 84, 84, 0.05);
  border-radius: 15px;
  display: flex;
  flex-direction: row;
  align-items: center;

  margin-top: 12px;
  padding-left: 25px;
`;

export const ProductImage = styled.Image`
  width: 110px;
  height: 105px;
  border-radius: 15px;
`;

export const ProductInfo = styled.View`
  margin-left: 15px;
`;
export const ProductDateWrapper = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const ProductDate = styled.Text`
  font-family: Noto Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 9px;
  line-height: 12px;

  color: #646464;
`;
export const ProductDateContent = styled.Text`
  font-family: Noto Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 9px;
  line-height: 12px;

  color: #646464;

  margin-left: 2px;
`;
export const ProductNameWrapper = styled.View`
  margin-top: 5px;
`;
export const ProductName = styled.Text`
  font-family: Noto Sans;
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
  font-family: Noto Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 19px;

  color: #5b5bc0;
`;
export const ReviewButon = styled.TouchableOpacity`
  width: 133px;
  height: 24px;

  background: #5b5bc0;
  border-radius: 5px;

  justify-content: center;
  align-items: center;
  margin-top: 5px;
`;
export const ReviewButtonText = styled.Text`
  font-family: Noto Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 10px;
  line-height: 14px;
  /* identical to box height */

  color: #ffffff;
`;

export const PointHistoryWrapper = styled.View`
  margin-top: 20px;
`;

export const RowName = styled.View`
  width: 339px;
  display: flex;
  flex-direction: row;

  padding-top: 7px;
  padding-bottom: 7px;

  border-top-width: 2px;
  border-top-color: #5b5bc0;

  border-bottom-width: 2px;
  border-bottom-color: #5b5bc0;
`;
export const ColumnName = styled.Text`
  width: 25%;

  font-family: Noto Sans;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  color: #5b5bc0;
  text-align: center;
`;
export const Row = styled.View`
  width: 339px;
  display: flex;
  flex-direction: row;

  padding-top: 7px;
  padding-bottom: 7px;
`;
export const Column = styled.Text`
  width: 25%;

  font-family: Noto Sans;
  font-style: normal;
  font-weight: 300;
  font-size: 10px;
  line-height: 14px;
  color: #848484;
  text-align: center;
`;
export const ColumnContentWapper = styled.View`
  width: 25%;
  justify-content: center;
  align-items: center;
`;

export const ColumnContent = styled.Text`
  width: 34px;
  height: 14px;
  border: 1px solid #5b5bc0;
  border-radius: 2px;
  text-align: center;

  font-family: Noto Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 9px;
  line-height: 12px;
  color: #5b5bc0;
`;
