import styled from "@emotion/styled";

const Wrapper = styled.div`
  width: 1000px;
  height: 1000px;
  background-color: #ffb2b2;

  @media (min-width: 767px) and (max-width: 991px) {
    width: 500px;
    height: 500px;
    background-color: skyblue;
  }

  @media (max-width: 767px) {
    width: 100px;
    height: 100px;
    background-color: yellowgreen;
    display: none;
  }
`;

export default function ResponsiveDesignPage() {
  return <Wrapper>상자</Wrapper>;
}
