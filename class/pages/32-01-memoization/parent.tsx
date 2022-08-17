import { useCallback, useMemo, useState } from "react";
import MemoizationChildPage from "./child";

export default function MemoizationParentPage() {
  console.log("부모가 렌더링 됩니다");
  let countLet = 0;
  const [countState, setCountState] = useState(0);

  // 1. useMemo로 변수 기억
  const aaa = useMemo(() => Math.random(), []);
  console.log(aaa);

  // 2. useCallback 함수 기억
  const onClickCountLet = useCallback(() => {
    console.log(countLet + 1);
    countLet += 1;
  }, []);

  // 3. useCallback 사용 시 주의사항 => state 사용
  /*   const onClickCountState = useCallback(() => {
    // console.log(countState + 1);
    // setCountState(countState + 1);
    setCountState((prev) => prev + 1);
  }, []);
 */

  // 4. useMemo로 나만의 useCallback 만들기
  const onClickCountState = useMemo(
    () => () => {
      setCountState((prev) => prev + 1); // countState + 1 (x)
    },
    []
  );

  return (
    <>
      <div>=====================================</div>
      <h1>저는 부모 컴포넌트 입니다</h1>

      <div>카운트(let) : {countLet}</div>
      <button onClick={onClickCountLet}>카운트(let)+1 올리기</button>

      <div>카운트(state) : {countState}</div>
      <button onClick={onClickCountState}>카운트(state)+1 올리기</button>

      {/* 좋지 않은 방법, 유지보수 어려움 */}
      <button
        onClick={() => {
          console.log("ㅁㄴㅇ");
          setCountState(countState + 1);
        }}
      >
        카운트 올리기
      </button>
      <div>=====================================</div>
      <MemoizationChildPage counterState={countState} />
    </>
  );
}
