export default function HelloButton() {
  function press() {
    const hello = "반갑습니다";
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
