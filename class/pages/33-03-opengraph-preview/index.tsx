import axios from "axios";

// 내가 만약 디스코드/카카오톡 개발자일 때 (미리보기 사용자)
export default function OpenGraphPreviewPage() {
  const onClickOpenGraph = async () => {
    const result = await axios.get("https://www.gmarket.co.kr"); // CORS : https://www.naver.com
    console.log(result.data);
    console.log(result.data.split("<meta").filter((el) => el.includes("og:")));
  };
  return (
    <div>
      <h1>사이트 미리보기 구현 연습</h1>
      <button onClick={onClickOpenGraph}>미리보기 실행</button>
    </div>
  );
}
