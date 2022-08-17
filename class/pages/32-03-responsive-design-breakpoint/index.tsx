import styled from "@emotion/styled";
import { NodeNextRequest } from "next/dist/server/base-http/node";
import { breakPoints } from "../../src/commons/styles/media";

const Wrapper = styled.div`
  width: 1000px;
  height: 1000px;
  background-color: #ffb2b2;

  @media ${breakPoints.tablet} {
    width: 500px;
    height: 500px;
    background-color: skyblue;
  }

  @media ${breakPoints.mobile} {
    width: 100px;
    height: 100px;
    background-color: yellowgreen;
    display: none;
  }
`;
const NWrapper = styled.div`
  display: none;

  @media ${breakPoints.mobile} {
    width: 30%;
    height: 300px;
    background-color: orange;
    display: block;
  }
`;
export default function ResponsiveDesignPage() {
  <NWrapper>모바일</NWrapper>;
  return <Wrapper>상자</Wrapper>;
}
