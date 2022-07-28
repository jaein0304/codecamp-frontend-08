import { useEffect, useRef } from "react";

/* 
1. 비밀번호 입력창 1개를 만들어 주세요. o
2. 해당 페이지에 접속하면 자동으로 비밀번호에 커서가 깜빡이도록 만들어 주세요. o
*/
export default function UseRefPasswordPage() {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  });

  return <input type="password" ref={inputRef} />;
}
