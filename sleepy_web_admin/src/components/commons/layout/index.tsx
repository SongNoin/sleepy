import styled from "@emotion/styled";
import Header from "./header/header.container";
import Sidebar from "./sidebar/sidebar.container";

const SideWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;
const Body = styled.div`
  width: 1440px;
  height: 1086px;
`;

export default function Layout(props) {
  return (
    <>
      <Header />
      <SideWrapper>
        <Sidebar />
        <Body>{props.children}</Body>
      </SideWrapper>
    </>
  );
}
