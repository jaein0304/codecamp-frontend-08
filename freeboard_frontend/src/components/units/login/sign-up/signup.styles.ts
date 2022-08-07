import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  width: 200%;
  margin: 10%;
  margin-top: 20%;
  border: 3px solid lightgray;
  box-shadow: 0px 5px 5px rgba(0, 0, 0, 1);
`;
/* export const Label = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
`; */
export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: auto;
  margin: 3%;
  /* margin: auto; */
`;

export const Input = styled.input`
  margin-right: 10%;
  border: 2px solid black;
  border-radius: 10px;
`;

export const LoginButton = styled.button`
  width: 30%;
  height: 50px;
  margin: auto;
  margin-top: 5%;
  margin-bottom: 5%;
  background-color: rgb(218, 64, 13);
  border-radius: 30px;
  color: white;
`;
