import styled from "@emotion/styled";

export const Wrapper = styled.div`
  height: 70px;
  background-color: #c5ffc5;
`;
export const MenuItem = styled.div`
  width: 100px;
  margin: auto;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 30px;
  font-weight: 700;
  /* border: 3px solid red; */
  cursor: pointer;
  color: green;

  :hover {
    color: orange;
  }
`;
