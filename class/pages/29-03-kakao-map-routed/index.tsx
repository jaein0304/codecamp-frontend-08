import Head from "next/head";
import { useEffect } from "react";

declare const window: typeof globalThis & {
  kakao: any;
}; // window 안에 kakao도 있다고 말해줌
export default function KakaoMapPage() {
  useEffect(() => {
    // html 태그 만들기
    const script = document.createElement("script"); // <script></script> 태그가 만들어짐
    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?appkey=cc653075a49daa7a2446f11dbeae75f7&autoload=false"; // app키와 autoload를 같이쓰고싶을 때 &사용 (query string)
    document.head.appendChild(script); // head태그 안에 script 태그가 들어가게됨, <Head> 안에 있는 밑의 코드와 별 차이 없음, 굳이 위에 변수를 만든 이유는 밑에처럼 쓰기위해
    script.onload = () => {
      window.kakao.maps.load(function () {
        const container = document.getElementById("map"); // 지도를 담을 영역의 DOM 레퍼런스
        const options = {
          // 지도를 생성할 때 필요한 기본 옵션
          center: new window.kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표.
          level: 3, // 지도의 레벨(확대, 축소 정도)
        };

        const map = new window.kakao.maps.Map(container, options); // 지도 생성 및 객체 리턴
        console.log(map);

        // 마커가 표시될 위치입니다
        const markerPosition = new window.kakao.maps.LatLng(
          33.450701,
          126.570667
        );

        // 마커를 생성합니다
        const marker = new window.kakao.maps.Marker({
          position: markerPosition,
        });

        // 마커가 지도 위에 표시되도록 설정합니다
        marker.setMap(map);
      });
    };
  }, []);
  return (
    <>
      {/* <Head>
        <script
          type="text/javascript"
          src="//dapi.kakao.com/v2/maps/sdk.js?appkey=cc653075a49daa7a2446f11dbeae75f7"
        ></script>
      </Head> */}
      <div id="map" style={{ width: "500px", height: "400px" }}></div>
    </>
  );
}
