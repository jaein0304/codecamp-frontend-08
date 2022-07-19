import { useState } from "react";
import { ErrorMessage } from "../../../styles/emotion";

export default function SignupStatePage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checkPassword, setCheckPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  function onChangeEmail(event) {
    setEmail(event.target.value);
  }

  function onChangePassword(event) {
    setPassword(event.target.value);
  }

  function onCheckPassword(event) {
    setCheckPassword(event.target.value);
  }

  function onClickSignup() {
    // 검증하기
    if (email.includes("@") === false && password !== checkPassword) {
      setEmailError("이메일이 올바르지 않습니다.");
      setPasswordError("비밀번호가 서로 다릅니다.");
    } else if (email.includes("@") === false) {
      setEmailError("이메일이 올바르지 않습니다.");
      setPasswordError("");
    } else if (password !== checkPassword) {
      setPasswordError("비밀번호가 서로 다릅니다.");
      setEmailError("");
      // console.log("test")
    } else {
      alert("회원가입 되었습니다.");
    }
  }

  return (
    <>
      이메일 : <input type="text" onChange={onChangeEmail} />
      <br />
      <ErrorMessage>{emailError}</ErrorMessage>
      비밀번호 : <input type="password" onChange={onChangePassword} />
      <br />
      비밀번호 확인 : <input type="password" onChange={onCheckPassword} />
      <br />
      <ErrorMessage>{passwordError}</ErrorMessage>
      <button onClick={onClickSignup}>가입하기</button>
    </>
  );
}
