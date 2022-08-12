import Link from "next/link";
import { useRouter } from "next/router";

export default function KakaoMapPage() {
  const router = useRouter(); // next 기능
  const onClickMoveToMap = () => {
    router.push("/29-03-kakao-map-routed");
  };
  return (
    <>
      {/* <button onClick={onClickMoveToMap}>맵으로 이동하기</button> */}
      {/* <button>
      <a href="/29-03-kakao-map-routed">맵으로 이동하기 </a>
    </button> */}
      {/* 위 2가지 방법을 합친 것  */}
      <Link href="/29-03-kakao-map-routed">
        <a>맵으로 이동하기</a>
      </Link>
    </>
  );
}
