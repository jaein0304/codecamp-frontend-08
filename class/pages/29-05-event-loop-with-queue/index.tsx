export default function EventLoopPage() {
  const onClickTimer = () => {
    console.log("============ 시작합니다 ============");
    // 비동기 작업 (매크로큐에 들어감) //
    setTimeout(() => {
      console.log(
        "⭐️ 저는 setTimeout | 매크로 큐 | 0초 뒤에 실행될 거에요 ⭐️ "
      );
    }, 0); // 1sec

    // 비동기 작업 (마이크로큐에 들어감) //
    new Promise((resolve, reject) => {
      resolve("철수");
    }).then((res) => {
      console.log("저는 Promise | 마이크로큐 | 0초 뒤에 실행될거에요🎉");
    });

    // 비동기 작업 (매크로큐에 들어감) //
    setInterval(() => {
      console.log("저는 Promise | 매크로큐 | 0초 마다 실행될거에요👀");
    });

    let sum = 0;
    for (let i = 0; i <= 9000000000; i++) sum = sum + 1;

    // 비동기 작업 (마이크로큐에 들어감) //
    new Promise((resolve, reject) => {
      resolve("철수");
    }).then((res) => {
      console.log("저는 Promise | 마이크로큐 | 0초 뒤에 실행될거에요🎉 - 2");
    });

    console.log("============ 종료합니다 ============");
  };
  return <button onClick={onClickTimer}>setTimeout 실행시키기</button>;
}
