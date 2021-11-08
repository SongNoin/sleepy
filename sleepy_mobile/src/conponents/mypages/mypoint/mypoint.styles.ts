import styled from "@emotion/native";

export const MyPointView = styled.View`
  flex: 1;
  align-items: center;
  background-color: white;
`;

export const MyPointInput = styled.TextInput`
  width: 339px;
  height: 36px;

  border: 1px solid #5b5bc0;
  border-radius: 8px;
  margin-top: 5px;

  padding-left: 15px;
`;

export const ChargeButton = styled.TouchableOpacity`
  width: 339px;
  height: 36px;

  background: #5b5bc0;
  border-radius: 8px;

  margin-top: 10px;
  justify-content: center;
  align-items: center;
`;

export const ChangeText = styled.Text`
  font-family: "NotoSans-Bold";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 19px;
  color: #ffffff;
`;
