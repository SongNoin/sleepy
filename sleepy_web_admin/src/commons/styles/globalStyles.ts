import { css } from "@emotion/react";

export const globalStyles = css`
  * {
    margin: 0px;
    box-sizing: border-box;
    font-family: NotoSans-Regular;
  }
  @font-face {
    font-family: "NotoSans-Regular";
    src: url("/font/NotoSansKR-Regular.otf");
  }

  @font-face {
    font-family: "NotoSans-Bold";
    src: url("/font/NotoSansKR-Bold.otf");
  }
`;
