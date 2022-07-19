export default function CounterconstDocumentPage() {
  function counterUp() {
    const count = Number(document.getElementById("count").innerText) + 1; // 문자열 숫자로 변환 후 1 더하기
    document.getElementById("count").innerText = count;
  }

  function counterDown() {
    const count = Number(document.getElementById("count").innerText) - 1; // 문자열 숫자로 변환 후 1 더하기
    document.getElementById("count").innerText = count;
  }

  return (
    // fragment <> </>
    // <fragment> </fragment>
    <>
      <div id="count">0</div>
      <button onClick={counterUp}>카운트 올리기</button>
      <button onClick={counterDown}>카운트 내리기</button>
    </>
  );
}
