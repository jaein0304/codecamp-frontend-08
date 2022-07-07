export default function HelloButton() {
  function press() {
    let hello = "반갑습니다";
    document.getElementById("greeting").innerText = hello;
  }

  return (
    <>
      <button onClick={press}>
        <div id="greeting">안녕하세요</div>
      </button>
    </>
  );
}
