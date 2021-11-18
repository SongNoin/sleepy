import React from "react";
import Sleepy from "../../../../public/images/navigation/Sleepy.svg";
import Cart from "../../../../public/images/navigation/Cart.svg";
import styled from "@emotion/native";
import { useNavigation } from "@react-navigation/native";

const LogoWrapper = styled.View`
  width: 100%;
  height: 40px;
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const InnerWrapper = styled.View`
  width: 77%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-left: 16%;
`;

const SleepyWrapper = styled.View`
  margin-right: 9%;
`;

const GoMyFavoritePage = styled.TouchableOpacity``;
const CartWrapper = styled.View``;

const NavigationLogo = () => {
  const navigation = useNavigation();
  const goToMyFavoritePage = () => {
    navigation.navigate("장바구니");
  };

  return (
    <LogoWrapper>
      <InnerWrapper>
        <SleepyWrapper>
          <Sleepy width={60} height={30} />
        </SleepyWrapper>
      </InnerWrapper>
      <GoMyFavoritePage onPress={goToMyFavoritePage}>
        <CartWrapper>
          <Cart width={24} height={24} />
        </CartWrapper>
      </GoMyFavoritePage>
    </LogoWrapper>
  );
};

export default NavigationLogo;
