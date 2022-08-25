import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 80%;
  margin-left: 7%;
`;

export const Title = styled.h1`
  padding: 10px;
  font-size: 18px;
  font-weight: 500;
  margin: 1px;
`;

export const TitleLine = styled.hr`
  border: 1px solid #000000;
`;

export const Line = styled.hr`
  border: 1px solid #bdbdbd;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

export const Date = styled.div`
  width: 25%;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #4f4f4f;
`;
export const ContentsUp = styled.div`
  font-size: 16px;
  font-weight: 700;
  color: yellow;
`;

export const ContentsDown = styled(ContentsUp)`
  color: blue;
`;
