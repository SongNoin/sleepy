import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 290px;
  padding-top: 32px;
`;

export const Line = styled.div`
  width: 85%;
  border-top: 1px solid #ededed;
`;

export const TopWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Avatar = styled.img`
  width: 100px;
  height: 100px;
  margin-bottom: 6%;
  border-radius: 50%;
`;

export const Name = styled.div`
  font-family: NotoSans-Bold;
  font-weight: 600;
  font-style: normal;
  font-size: 16px;
  line-height: 21.79px;
  margin-bottom: 3%;
`;

export const Phrase = styled.div`
  font-family: NotoSans-Regular;
  font-weight: 400;
  font-style: normal;
  font-size: 14px;
  line-height: 19.07px;
  color: #8c8c8c;
  margin-bottom: 9%;
`;

export const BottomWrapper = styled.div`
  /* padding-left: 36px; */
`;

export const InnerWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 15px 0px 15px 36px;
  /* background-color: #f5f5fb; */
`;

export const InnerWrapperRegister = styled.div<{ isActive: string }>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 15px 0px 15px 36px;
  cursor: pointer;
  background-color: ${(props) =>
    props.isActive === "/register" ? "#F5F5FB" : "#normal"};
`;

export const InnerWrapperProduct = styled.div<{ isActive: string }>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 15px 0px 15px 36px;
  cursor: pointer;

  background-color: ${(props) =>
    props.isActive === "/productstable" ? "#F5F5FB" : "#normal"};
`;

export const InnerWrapperSales = styled.div<{ isActive: string }>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  padding: 15px 0px 15px 36px;
  cursor: pointer;

  background-color: ${(props) =>
    props.isActive === "/salestable" ? "#F5F5FB" : "#normal"};
`;

export const InnerWrapperDashboard = styled.div<{ isActive: string }>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 20px 0px 20px 36px;
  cursor: pointer;

  background-color: ${(props) =>
    props.isActive === "/dashboard" ? "#F5F5FB" : "#normal"};
`;

export const InnerWrapperModify = styled.div<{ isActive: string }>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 15px 0px 15px 36px;
  cursor: pointer;

  background-color: ${(props) =>
    props.isActive === "/profilemodify" ? "#F5F5FB" : "#normal"};
`;

export const SideMenuButtonModify = styled.div<{ isActive: string }>`
  width: 100%;
  height: 18px;
  display: flex;
  align-items: center;
  font-family: NotoSans-Regular;
  font-size: 14px;
  font-style: normal;
  line-height: 19.07px;
  color: #3b3b3b;
  font-weight: ${(props) =>
    props.isActive === "/profilemodify" ? "700" : "400"};
`;

export const SideMenuIcon = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 15px;
`;
export const SideMenuDashboardIcon = styled.img`
  width: 24px;
  height: 14px;
  margin-right: 15px;
`;
export const SideMenuButton = styled.div`
  width: 100%;
  height: 18px;
  display: flex;
  align-items: center;
  font-family: NotoSans-Regular;
  font-weight: 400;
  font-size: 14px;
  font-style: normal;
  line-height: 19.07px;
  color: #3b3b3b;
  cursor: pointer;
`;

export const SideMenuButtonRegister = styled.div<{ isActive: string }>`
  width: 100%;
  height: 18px;
  display: flex;
  align-items: center;
  font-family: NotoSans-Regular;
  font-size: 14px;
  font-style: normal;
  line-height: 19.07px;
  color: #3b3b3b;
  font-weight: ${(props) => (props.isActive === "/register" ? "700" : "400")};
`;

export const SideMenuButtonProduct = styled.div<{ isActive: string }>`
  width: 100%;
  height: 18px;
  display: flex;
  align-items: center;
  font-family: NotoSans-Regular;
  font-size: 14px;
  font-style: normal;
  line-height: 19.07px;
  color: #3b3b3b;
  font-weight: ${(props) =>
    props.isActive === "/productstable" ? "700" : "400"};
`;

export const SideMenuButtonSales = styled.div<{ isActive: string }>`
  width: 100%;
  height: 18px;
  display: flex;
  align-items: center;
  font-family: NotoSans-Regular;
  font-weight: ${(props) => (props.isActive === "/salestable" ? "700" : "400")};
  font-size: 14px;
  font-style: normal;
  line-height: 19.07px;
  color: #3b3b3b;
`;

export const SideMenuButtonDashboard = styled.div<{
  isActive: string;
}>`
  width: 100%;
  height: 18px;
  display: flex;
  align-items: center;
  font-family: NotoSans-Regular;
  font-weight: ${(props) => (props.isActive === "/dashboard" ? "700" : "400")};
  font-size: 14px;
  font-style: normal;
  line-height: 19.07px;
  color: #3b3b3b;
`;
