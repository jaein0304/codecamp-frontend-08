import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 1200px;
  margin-top: 100px;
  /* border: 3px solid black; */
`;

export const Label = styled.label`
  width: 1200px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-top: 40px;
  margin-bottom: 20px;
  /* padding-right: 30px; */
`;
export const InputWrapper = styled.div``;

export const Input = styled.input`
  width: 180px;
  height: 52px;
  padding-left: 20px;
  border: 1px solid lightgray;
  margin-right: 20px;
`;
export const ContentsWrapper = styled.div`
  border: 1px solid lightgray;
`;

export const Contents = styled.textarea`
  width: 1200px;
  min-height: 108px;
  padding: 20px;
  border: none;
  border-bottom: 1px solid lightgray;
`;

export const ButtonWrapper = styled.div`
  width: 1200px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin: 10px;
`;
export const Button = styled.button`
  width: 100px;
  padding: 10px;
  margin-left: 10px;
  border: 3px solid black;
  border-radius: 20px;
`;
