import React from "react";

import styled from "@emotion/native";

const LogoWrapper = styled.View`
  width: 100%;
  height: 40px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
const EmptyWrapper = styled.View``;

import Sleepy from "../../../../public/images/navigation/Sleepy.svg";
import Cart from "../../../../public/images/navigation/Cart.svg";

const NavigationLogo2 = () => {
  return (
    <LogoWrapper>
      <EmptyWrapper />
      <Sleepy width={60} height={30} />
      <Cart width={24} height={24} />
    </LogoWrapper>
  );
};

export default NavigationLogo2;
