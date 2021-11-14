import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 290px;
  /* padding: 32px 36px 0px 32px; */
  /* background-color: beige; */
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
`;

export const Name = styled.div`
  font-family: "NotoSans-Bold";
  font-weight: 600;
  font-style: normal;
  font-size: 16px;
  line-height: 21.79px;
  margin-bottom: 3%;
`;

export const Phrase = styled.div`
  font-family: "NotoSans-Regular";
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

interface IProps {
  isClickRegister: boolean;
  isClickProduct: boolean;
  isClickSales: boolean;
  isClickSignup: boolean;
  isClickLogin: boolean;
}

export const InnerWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 15px 0px 15px 36px;
  /* background-color: #f5f5fb; */
`;

export const InnerWrapperRegister = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 15px 0px 15px 36px;
  background-color: ${(props: IProps) =>
    props.isClickRegister === true ? "#F5F5FB" : "#normal"};
`;

export const InnerWrapperProduct = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 15px 0px 15px 36px;
  background-color: ${(props: IProps) =>
    props.isClickProduct === true ? "#F5F5FB" : "#normal"};
`;

export const InnerWrapperSales = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 15px 0px 15px 36px;
  background-color: ${(props: IProps) =>
    props.isClickSales === true ? "#F5F5FB" : "#normal"};
`;

export const InnerWrapperSignup = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 15px 0px 15px 36px;
  background-color: ${(props: IProps) =>
    props.isClickSignup === true ? "#F5F5FB" : "#normal"};
`;

export const InnerWrapperLogin = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 15px 0px 15px 36px;
  background-color: ${(props: IProps) =>
    props.isClickLogin === true ? "#F5F5FB" : "#normal"};
`;

export const SideMenuIcon = styled.img`
  width: 19.5px;
  height: 19.47px;
  margin-right: 15px;
`;

export const SideMenuButton = styled.div`
  width: 100%;
  height: 18px;
  display: flex;
  align-items: center;
  font-family: "NotoSans-Regular";
  font-weight: 400;
  font-size: 14px;
  font-style: normal;
  line-height: 19.07px;
  color: #3b3b3b;
`;

export const SideMenuButtonRegister = styled.div`
  width: 100%;
  height: 18px;
  display: flex;
  align-items: center;
  font-family: "NotoSans-Regular";
  font-size: 14px;
  font-style: normal;
  line-height: 19.07px;
  color: #3b3b3b;
  font-weight: ${(props: IProps) =>
    props.isClickRegister === true ? "700" : "400"};
`;

export const SideMenuButtonProduct = styled.div`
  width: 100%;
  height: 18px;
  display: flex;
  align-items: center;
  font-family: "NotoSans-Bold";
  font-size: 14px;
  font-style: normal;
  line-height: 19.07px;
  color: #3b3b3b;
  font-weight: ${(props: IProps) =>
    props.isClickProduct === true ? "700" : "400"};
`;

export const SideMenuButtonSales = styled.div`
  width: 100%;
  height: 18px;
  display: flex;
  align-items: center;
  font-family: "NotoSans-Regular";
  font-weight: ${(props: IProps) =>
    props.isClickSales === true ? "700" : "400"};
  font-size: 14px;
  font-style: normal;
  line-height: 19.07px;
  color: #3b3b3b;
`;

export const SideMenuButtonSignup = styled.div`
  width: 100%;
  height: 18px;
  display: flex;
  align-items: center;
  font-family: "NotoSans-Regular";
  font-weight: ${(props: IProps) =>
    props.isClickSignup === true ? "700" : "400"};
  font-size: 14px;
  font-style: normal;
  line-height: 19.07px;
  color: #3b3b3b;
`;

export const SideMenuIconLogin = styled.div`
  width: 100%;
  height: 18px;
  display: flex;
  align-items: center;
  font-weight: ${(props: IProps) =>
    props.isClickLogin === true ? "700" : "400"};
  font-size: 14px;
  font-style: normal;
  line-height: 19.07px;
  color: #3b3b3b;
`;
