import { useState } from "react";

export default function TokenStatePage() {
  const [auth, setAuth] = useState("000000");

  function randomNumber() {
    return String(Math.floor(Math.random() * 1000000)).padStart(6, "0");
  }

  function token() {
    setAuth(randomNumber(1, 999999));
  }

  return (
    <>
      <div>{auth}</div>
      <button onClick={token}>인증번호 전송</button>
    </>
  );
}
