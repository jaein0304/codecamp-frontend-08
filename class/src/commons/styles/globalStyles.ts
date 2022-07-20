import { css } from "@emotion/react";

export const globalStyles = css`
  * {
    margin: 0;
    box-sizing: border-box;
    font-size: 15px;
    font-family: "myFont"; // command + i
  }

  @font-face {
    font-family: "myFont";
    src: url("fonts/scifibit.ttf");
  }
`;
