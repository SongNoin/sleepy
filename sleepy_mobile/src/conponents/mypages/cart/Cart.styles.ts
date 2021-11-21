import styled from "@emotion/native";

interface IProps {
  isSoldOut: Boolean;
}

export const EmptyWrapper = styled.View`
  height:470px;
  justify-content: center;
`

export const MyCartView = styled.View`
  flex: 1;
  background-color: white;
  padding-bottom: 20px;
`;

export const EmptyText = styled.Text`
  font-family: "NotoSans-Bold";
  color: #5b5bc0;
`


export const CartListWrapper = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CartCard = styled.View`
  width: 339px;
  height: 140px;
  opacity: ${(props: IProps) => (props.isSoldOut ? "0.4" : "1")};
  border: 1px solid #e2e2ff;
  box-shadow: 0px 4px 8px black;
  border-radius: 15px;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 12px;
  padding-left: 25px;
`;

export const CartImage = styled.Image`
  width: 110px;
  height: 105px;
  border-radius: 15px;
`;

export const CartContent = styled.View`
  margin-left: 15px;
  display: flex;
  padding-bottom: 35px;
`;

export const CartName = styled.Text`
  font-family: "NotoSans-Bold";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  color: #3c3c3c;
  margin-bottom: 5px;
`;

export const CartPrice = styled.Text`
  font-family: "NotoSans-Bold";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 19px;
  color: #5b5bc0;
`;

export const DelButton = styled.TouchableOpacity`
  width: 20px;
  height: 20px;
  position: absolute;
  left: 152px;
  bottom: 70px;
`;

export const BuyButton = styled.TouchableOpacity`
  height: 20px;
  position: absolute;
  top: 60px;
  border: none;
  background-color: #5b5bc0;
  height: 25px;
  width: 65px;
  display: flex;
  justify-content: center;
  border-radius: 5px;
  align-items: center;
`;

export const BuyButtonText = styled.Text`
  font-family: "NotoSans-Bold";
  font-style: normal;
  font-weight: 600;
  font-size: 10px;
  color: white;
`;

export const CartImageWrapper = styled.TouchableOpacity``;
