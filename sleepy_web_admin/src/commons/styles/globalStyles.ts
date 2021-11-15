import { css } from "@emotion/react";

export const globalStyles = css`
  * {
    margin: 0px;
    box-sizing: border-box;
  }
  @font-face {
    font-family: "NotoSans-Regular";
    src: url("/font/NotoSans-Regular.ttf");
  }

  @font-face {
    font-family: "NotoSans-Bold";
    src: url("/font/NotoSans-Bold.ttf");
  }
`;
