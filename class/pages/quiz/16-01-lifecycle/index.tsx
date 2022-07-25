import { useEffect, useState } from "react";
import { useRouter } from "next/router";

/* 1. isChange 라는 state를 만들어 주세요. 초기값은 false로 합니다.
2. [변경], [이동] 2개의 버튼을 만들어 주세요.
3. [변경] 버튼을 누르면 isChange를 true로 변경해 주세요.
4. 이동 버튼을 누르면 '/' 페이지로 이동시켜 주세요.
5. 컴포넌트가 렌더링이 되고난 이후에 경고메시지로 "Rendered!"를 표시해 주세요.
6. 변경 버튼을 클릭하면 경고메시지로 "Changed!!"를 표시해 주세요.
⇒ 단, useEffect의 의존성 배열을 활용해 주세요.
7. 이동 버튼을 클릭하면 경고메시지로 "Bye!!" 를 표시해 주세요.
⇒ 단, 경고메시지는 useEffect에서 작성되어야 합니다. */

export default function ClassCounterPage() {
  const router = useRouter();
  const [isChange, SetIsChange] = useState(false);

  // componentDidMount
  useEffect(() => {
    alert("Rendered!");
  }, []); // 의존성 배열 (Dependency Array)

  // componentDidUpdate
  useEffect(() => {
    alert("Changed!!");
  }, [isChange]);

  // componentWillUnmount
  useEffect(() => {
    return () => {
      alert("Bye!!");
    };
  }, []);

  const onClickChange = () => {
    SetIsChange(true);
  };

  const onClickMove = () => {
    router.push("/");
  };

  return (
    <>
      {/* <div>{isChange}</div> */}
      <button onClick={onClickChange}>변경</button>
      <button onClick={onClickMove}>이동</button>
    </>
  );
}
