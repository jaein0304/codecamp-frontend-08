import { useState } from "react";
import {
  Container,
  BackWrapper,
  MapImg,
  Label,
  MediumPadding,
  MapWrapper,
  EmailWrapper,
  PasswordWrapper,
  WriteWrapper,
  LoginButton,
  LoginName,
  FindButton,
  FindCategory,
  KakaoButton,
  KakaoName,
  UnderPadding,
  KakaoIcon,
} from "../../../styles/emotion";

export default function StateLoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  function onChangeEmail(event) {
    setEmail(event.target.value);
    if (email.includes("@") === false) {
      setEmailError("이메일 주소를 다시 확인해주세요.");
    } else {
      setEmailError("");
    }
  }

  function onChangePassword(event) {
    setPassword(event.target.value);
    if (password.length >= 8 && password.length <= 16) {
      setPasswordError("");
    } else {
      setPasswordError("8~16자의 영문, 문자, 특수 문자만 사용 가능합니다.");
    }
  }

  //   function isPassword(asValue) {
  //     var regExp =
  //       /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+]).{8,16}$/;

  //     return regExp.test(asValue); // 형식에 맞는 경우 true 리턴
  //   }

  function onClickLogin() {
    if (emailError === "" && passwordError === "") {
      alert("게시글이 등록되었습니다.");
    }
  }
  return (
    <Container>
      <BackWrapper>
        <MapWrapper>
          <MapImg></MapImg>
        </MapWrapper>
        <MediumPadding>
          <Label>잇츠로드</Label>
        </MediumPadding>
        <EmailWrapper
          type="text"
          placeholder="이메일을 입력해주세요"
          onChange={onChangeEmail}
        ></EmailWrapper>
        <WriteWrapper></WriteWrapper>
        <PasswordWrapper
          type="password"
          placeholder="비밀번호를 입력해주세요"
          onChange={onChangePassword}
        ></PasswordWrapper>
        <WriteWrapper></WriteWrapper>
        <LoginButton onclick={onClickLogin}>
          <LoginName>로그인</LoginName>
        </LoginButton>
        <FindButton>
          <FindCategory>이메일 찾기</FindCategory>
          <FindCategory>|</FindCategory>
          <FindCategory>비밀번호 찾기</FindCategory>
          <FindCategory>|</FindCategory>
          <FindCategory>회원가입</FindCategory>
        </FindButton>
        <KakaoButton>
          <KakaoName>
            <KakaoIcon></KakaoIcon>
            카카오톡으로 로그인
            </KakaoName>
        </KakaoButton>
        <UnderPadding></UnderPadding>
      </BackWrapper>
    </Container>
  );
}
