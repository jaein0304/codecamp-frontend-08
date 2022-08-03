import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  width: 50%;
  margin: 10%;
  border: 3px solid lightgray;
  box-shadow: 0px 5px 5px rgba(0, 0, 0, 1);
`;
export const Label = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
`;
export const InputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: auto;
  /* margin: auto; */
`;

export const Input = styled.input`
  margin: 10%;
  border: 2px solid black;
  border-radius: 10px;
`;

export const LoginButton = styled.button`
  width: 30%;
  height: 50px;
  margin: auto;
  margin-bottom: 5%;
  background-color: rgb(218, 64, 13);
  border-radius: 30px;
  color: white;
`;
