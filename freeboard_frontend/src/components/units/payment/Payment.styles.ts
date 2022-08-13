import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
  padding: 50px;
  border-radius: 100px;
  box-shadow: 2px 3px 5px 3px;
`;

export const Title = styled.div`
  margin-top: 40px;
  font-size: 40px;
  text-align: center;
  font-weight: bold;
  line-height: 20px;
`;

export const PointAmount = styled.div`
  font-weight: 500;
  font-size: 20px;
  line-height: 36px;
  color: #000000;
  margin-top: 40px;
`;

export const Input = styled.input`
  width: 300px;
  height: 52px;
  background: #f2f2f2;
  border-color: #da400d;
  border-radius: 20px;
  margin-top: 20px;

  margin-bottom: 50px;
  padding-left: 20px;
`;

export const Button = styled.button`
  padding: 10px;
  border: 2px solid darkgray;
  border-radius: 20px;
  box-shadow: 1px 1px 1px 0px;
  :hover {
    background-color: #fe5d0a;
    color: white;
  }
`;
