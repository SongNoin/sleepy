import styled from "@emotion/styled";
import { useRouter } from "next/dist/client/router";
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
  height: 830px;
  display: flex;
  background-color: #f6f6fb;
`;
const MainBody = styled.div``;
const HiddenLayout = ["/", "/login", "/signup"];
export default function Layout(props) {
  const router = useRouter();
  const isHiddenLayout = HiddenLayout.includes(router.pathname);
  return (
    <Wrapper>
      {!isHiddenLayout ? (
        <>
          <Header />
          <SideWrapper>
            <Sidebar />
            <Body>{props.children}</Body>
          </SideWrapper>
        </>
      ) : (
        <MainBody>{props.children}</MainBody>
      )}
    </Wrapper>
  );
}
