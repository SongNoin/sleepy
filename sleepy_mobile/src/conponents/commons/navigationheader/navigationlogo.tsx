import React from "react";

import styled from "@emotion/native";

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

import Sleepy from "../../../../public/images/navigation/Sleepy.svg";
import Cart from "../../../../public/images/navigation/Cart.svg";

const NavigationLogo = () => {
  return (
    <LogoWrapper>
      <InnerWrapper>
        <SleepyWrapper>
          <Sleepy width={60} height={30} />
        </SleepyWrapper>
      </InnerWrapper>
      <Cart width={24} height={24} />
    </LogoWrapper>
  );
};

export default NavigationLogo;
