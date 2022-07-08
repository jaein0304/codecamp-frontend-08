import {
  Wrapper,
  Title,
  WriterWrapper,
  Writer,
  Password,
  Label,
  InputWrapper,
  Subject,
  Contents,
  HouseWrapper,
  HouseCode,
  SearchButton,
  Address,
  Youtube,
  ImageWrapper,
  UploadButton,
  OptionWrapper,
  RadioButton,
  RadioLabel,
  ButtonWrapper,
  SubmitButton,
} from "../styles/emotion";

import { useState } from "react";
import { ErrorMessage } from "../styles/emotion";
import { useMutation, gql } from '@apollo/client';

const CREATE_BOARD = gql`
mutation createBoard($writer: String,  $title: String, $contents: String) {
  createBoard(writer: $writer, title:$title, contents:$contents) {
    _id
    number
    message
  }
}
`


export default function Board() {
  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  const [createBoard] = useMutation(CREATE_BOARD)

  const [writerError, setWriterError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [titleError, setTitleError] = useState("");
  const [contentsError, setContentsError] = useState("");

//게시물 등록하기 기능 구현(createBoard), 확인 시 fetchBoard 활용 
const onClickGraphqlApi = async() => {
  const result = await createBoard({
    variables: {
      writer: writer,
     //createboard에는 패스워드 없음 
      title: title,
      contents: contents
    }
  })
  console.log(result)
  console.log(result.data.createBoard.message)
}
  

  function onChangeWriter(event) {
    setWriter(event.target.value);
    if (writer === "") {// 작성 시 빨간글씨 즉시 제거 
      setWriterError("");
    }
  }

  function onChangePassword(event) {
    setPassword(event.target.value);
    if (password === "") {
      setPasswordError("");
    }
  }

  function onChangeTitle(event) {
    setTitle(event.target.value);
    if (title === "") {
      setTitleError("");
    }
  }

  function onChangeContent(event) {
    setContents(event.target.value);
    if (contents === "") {
      setContentsError("");
    }
  }

  function onBlankConfirm() {
    if (!writer) {
      setWriterError("작성자를 입력해주세요.");
    }
    if (!password) {
      setPasswordError("비밀번호를 입력해주세요.");
    }
    if (!title) {
      setTitleError("제목을 입력해주세요.");
    }
    if (!contents) {
      setContentsError("내용을 입력해주세요.");
    }
    if (writer && password && title && contents) {
        alert("게시글이 등록되었습니다.");
    }
  }

  return (
    <Wrapper>
      <Title>게시판 등록</Title>
      <WriterWrapper>
        <InputWrapper>
          <Label>작성자</Label>
          <Writer
            type="text"
            placeholder="이름을 적어주세요."
            onChange={onChangeWriter}
          />
          <ErrorMessage>{writerError}</ErrorMessage>
        </InputWrapper>
        <InputWrapper>
          <Label>비밀번호</Label>
          <Password
            type="password"
            placeholder="비밀번호를 입력해주세요."
            onChange={onChangePassword}
          />
          <ErrorMessage>{passwordError}</ErrorMessage>
        </InputWrapper>
      </WriterWrapper>
      <InputWrapper>
        <Label>제목</Label>
        <Subject
          type="text"
          placeholder="제목을 작성해주세요."
          onChange={onChangeTitle}
        />
        <ErrorMessage>{titleError}</ErrorMessage>
      </InputWrapper>
      <InputWrapper>
        <Label>내용</Label>
        <Contents
          placeholder="내용을 작성해주세요."
          onChange={onChangeContent}
        />
        <ErrorMessage>{contentsError}</ErrorMessage>
      </InputWrapper>
      <InputWrapper>
        <Label>주소</Label>
        <HouseWrapper>
          <HouseCode placeholder="07250" />
          <SearchButton>우편번호 검색</SearchButton>
        </HouseWrapper>
        <Address />
        <Address />
      </InputWrapper>
      <InputWrapper>
        <Label>유튜브</Label>
        <Youtube placeholder="링크를 복사해주세요." />
      </InputWrapper>
      <ImageWrapper>
        <Label>사진첨부</Label>
        <UploadButton>+ Upload </UploadButton>
        <UploadButton>+ Upload </UploadButton>
        <UploadButton>+ Upload </UploadButton>
      </ImageWrapper>
      <OptionWrapper>
        <Label>메인설정</Label>
        <RadioButton type="radio" id="youtube" name="radio-button" />
        <RadioLabel htmlFor="youtube">유튜브</RadioLabel>
        <RadioButton type="radio" id="image" name="radio-button" />
        <RadioLabel htmlFor="image">사진</RadioLabel>
      </OptionWrapper>
      <ButtonWrapper>
        <SubmitButton>
          {/* <button onClick={onBlankConfirm}>등록하기</button> */}
          <button onClick={onClickGraphqlApi}>게시물 등록하기</button>
        </SubmitButton>
      </ButtonWrapper>
    </Wrapper>
  );
}
