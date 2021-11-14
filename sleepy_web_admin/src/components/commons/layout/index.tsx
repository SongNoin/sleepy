import styled from "@emotion/styled";
import Header from "./header/header.container";
import Sidebar from "./sidebar/sidebar.container";

const Wrapper = styled.div`
  width: 1910px;
`;

const SideWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const Body = styled.div`
  width: 1620px;
  display: flex;
`;

export default function Layout(props) {
  return (
    <Wrapper>
      <Header />
      <SideWrapper>
        <Sidebar />
        <Body>{props.children}</Body>
      </SideWrapper>
    </Wrapper>
  );
}
