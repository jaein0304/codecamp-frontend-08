import styled from "@emotion/styled";
import { Rate } from "antd";
import { ICommentSubmitButtonProps } from "./CommentWrite.types";

export const Wrapper = styled.div`
  width: 1200px;
  /* height: 300px; */
  border: 1px solid black;
  margin: 100px;
  padding-top: 80px;
  padding-bottom: 100px;
  padding-left: 102px;
  padding-right: 102px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: none;
`;

export const EditIcon = styled.img``;
export const Title = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 36px;
  font-weight: bold;
`;

export const WriterWrapper = styled.div`
  /* width: 100%; */
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  /* padding-right: 810px; */
  padding-top: 40px;
`;

export const Writer = styled.input`
  width: 180px;
  height: 52px;
  padding-left: 16px;
  border: 1px solid #bdbdbd;
`;

export const Password = styled.input`
  width: 180px;
  height: 52px;
  padding-left: 16px;
  border: 1px solid #bdbdbd;
`;

export const Rating = styled(Rate)`
  width: 100%;
  margin-top: 10px;
`;

export const InputWrapper = styled.div`
  padding-top: 40px;
  padding-right: 25px;
`;

export const Subject = styled.input`
  width: 996px;
  height: 52px;
  padding-left: 16px;
  border: 1px solid #bdbdbd;
`;

export const Contents = styled.textarea`
  width: 1200px;
  height: 161px;
  padding-left: 16px;
  padding: 14px;
  border: 1px solid #bdbdbd;
`;

export const ContentsLength = styled.div``;

export const ZipcodeWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Zipcode = styled.input`
  width: 77px;
  height: 52px;
  padding-left: 16px;
  border: 1px solid #bdbdbd;
`;

export const Error = styled.div`
  padding-top: 10px;
  font-size: 14px;
  color: red;
`;

export const SubmitButton = styled.button`
  width: 91px;
  height: 52px;
  border: none;
  font-size: 16px;
  font-weight: 500;
  color: white;
  /* background-color: black; */
  margin-left: 1110px;
  cursor: pointer;

  background-color: ${(props: ICommentSubmitButtonProps) =>
    props.submitButton ? "violet" : "black"};
`;
