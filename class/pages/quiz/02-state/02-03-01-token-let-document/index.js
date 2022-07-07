export default function TokenLetDocumentPage() {
  function getToken() {
    //let token = Number(document.getElementById("auth").innerText) + 1; // 문자열 숫자로 변환 후 1 더하기
    const token = String(Math.floor(Math.random() * 1000000)).padStart(6, "0");
    document.getElementById("auth").innerText = token;
  }

  return (
    <>
      <div id="auth">000000</div>
      <button onClick={getToken}>인증번호 전송</button>
    </>
  );
}
