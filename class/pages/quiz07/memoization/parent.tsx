import { useCallback, useMemo, useState } from "react";
import MemoizationChildPage from "./child";
export default function MemoizationParentPage() {
  let countLet = 0;
  const [countState, setCountState] = useState(0);

  // 5번
  /* const onClickCountLet = () => {
    countLet += 1;
  };
  const onClickCountState = () => {
    console.log(countState + 1);
    setCountState(countState + 1);
  };
 */

  const memo = useMemo(() => {
    return Math.random();
  }, []);
  console.log(memo);
  // const onClickCountLet = () => { };

  // 7번
  /*   const onClickCountLet = useCallback(() => {
    console.log(countLet + 1);
    countLet += 1;
  }, []);

  const onClickCountState = useCallback(() => {
    console.log(countState + 1);
    setCountState(countState + 1);
  }, []); */

  // 8번
  const onClickCountLet = useCallback(() => {
    console.log(countLet + 1);
    countLet += 1;
  }, []);

  // const onClickCountState = useCallback(() => {
  //   setCountState((prev) => prev + 1);
  // }, []);

  // 9번
  const onClickCountState = useMemo(
    () => () => {
      setCountState((prev) => prev + 1);
    },
    []
  );

  return (
    <>
      <div>{countLet}</div>
      <button onClick={onClickCountLet}>let</button>
      <div>{countState}</div>
      <button onClick={onClickCountState}>State</button>
      <button
        onClick={() => {
          console.log("10번");
          setCountState(countState + 1);
        }}
      >
        10번
      </button>
      <MemoizationChildPage />
    </>
  );
}
