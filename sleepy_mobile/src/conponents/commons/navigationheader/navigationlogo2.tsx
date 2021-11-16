import React from "react";

import styled from "@emotion/native";

const LogoWrapper = styled.View`
  width: 100%;
  height: 40px;
  flex-direction: row;
  align-items: center;
`;
const EmptyWrapper = styled.View`
  width: 35%;
`;

const InnerWrapper = styled.View`
  width: 93%;
  display: flex;
  flex-direction: row;
`;

import Sleepy from "../../../../public/images/navigation/Sleepy.svg";
import Cart from "../../../../public/images/navigation/Cart.svg";

const NavigationLogo2 = () => {
  return (
    <LogoWrapper>
      <InnerWrapper>
        <EmptyWrapper />
        <Sleepy width={60} height={30} />
      </InnerWrapper>
      <Cart width={24} height={24} />
    </LogoWrapper>
  );
};

export default NavigationLogo2;
