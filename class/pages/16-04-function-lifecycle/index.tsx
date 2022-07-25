import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function ClassCounterPage() {
  const router = useRouter();
  const [count, setCount] = useState(5);

  /* componentDidMount() {
    console.log("그려지고 나서 실행");
  }

  componentDidUpdate() {
    console.log("변경되고 나서 실행");
  }

  componentWillUnmount() {
    console.log("사라질때 실행");
    // 채팅방 나가기 api 요청
  }
 */

  // componentDidMount
  useEffect(() => {
    console.log("그려지고 나서 실행");
  }, [count]); // 의존성 배열 (Dependency Array)

  // componentDidUpdate
  useEffect(() => {
    console.log("변경되고 나서 실행");
  });

  // componentWillUnmount
  useEffect(() => {
    return () => {
      console.log("사라질때 실행");
    };
  }, []);

  // 1. 하나로 합치기 가능
  /* useEffect(() => {
    console.log("변경되고 나서 실행");

    return () => {
      console.log("사라질때 실행");
    };
  }, []);
 */

  // 2. useEffect의 잘못된 사용 (1. 추가렌더링, 2. 무한루프)
  /*   useEffect(() => {
    setCount((prev) => prev + 1);
  }, [count]); // 무한루프로 멈추게됨  */

  const counterUp = () => {
    console.log(count);
    setCount(1);
  };

  const onClickMove = () => {
    router.push("/");
  };

  return (
    <>
      <div>{count}</div>
      <button onClick={counterUp}>카운트 올리기</button>
      <button onClick={onClickMove}>나가기</button>
    </>
  );
}
