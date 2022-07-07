export default function CounterPage() {
  function counterUp() {
    let count = Number(document.getElementById("count").innerText) + 1; // 문자열 숫자로 변환 후 1 더하기
    document.getElementById("count").innerText = count;
  }

  return (
    <>
      <div id="count">0</div>
      <button onClick={counterUp}>카운트 증가</button>
    </>
  );
}
