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

export default function Board() {
  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const [writerError, setWriterError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [titleError, setTitleError] = useState("");
  const [contentError, setContentError] = useState("");

  function onChangeWriter(event) {
    setWriter(event.target.value);
    //console.log(writer)
  }

  function onChangePassword(event) {
    setPassword(event.target.value);
  }

  function onChangeTitle(event) {
    setTitle(event.target.value);
  }

  function onChangeContent(event) {
    setContent(event.target.value);
  }

  function onBlankConfirm() {
    if((writer.length === 0) && (password.length===0) && (title.length===0)){
      setWriterError("이름을 적어주세요.");
      setPasswordError("비밀번호를 입력해주세요.");
      setTitleError("제목을 작성해주세요.");
      setContentError("내용을 작성해주세요.");
    }
    if (writer.length === 0) {
      //(writer.value=="") {
      setWriterError("이름을 적어주세요.");
    } else if (password.length === 0) {
      setPasswordError("비밀번호를 입력해주세요.");
      if (writer.length >= 1) setWriterError("");
    } else if (title.length === 0) {
      setTitleError("제목을 작성해주세요.");
      if (password.length >= 1) setPasswordError("");
    } else if (content.length === 0) {
      setContentError("내용을 작성해주세요.");
      if (title.length >= 1) setTitleError("");
    } else {
      alert("게시글이 등록되었습니다.");
      setWriterError("");
      setPasswordError("");
      setTitleError("");
      setContentError("");
    }

    // if (writer.length === 0) {
    //   setWriterError("이름을 적어주세요.");
    // } 
    // if (password.length === 0) {
    //   setPasswordError("비밀번호를 입력해주세요.");
    // } 
    // if (title.length === 0) {
    //   setTitleError("제목을 작성해주세요.");
    
    // } 
    // if (content.length === 0) {
    //   setContentError("내용을 작성해주세요.");
    // } 
    // if(writer.length >=1 && password.length >= 1 && title.length >=1 && content.length >= 1) {
    //   alert("게시글이 등록되었습니다.");
    // }
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
        <ErrorMessage>{contentError}</ErrorMessage>
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
          <button onClick={onBlankConfirm}>등록하기</button>
        </SubmitButton>
      </ButtonWrapper>
    </Wrapper>
  );
}
