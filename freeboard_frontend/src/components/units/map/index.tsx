import styled from "@emotion/styled";
import { useEffect } from "react";

declare const window: typeof globalThis & {
  kakao: any;
};

const Wrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  margin-left: 20px;
`;

const MapWrapper = styled.div`
  width: 384px;
  height: 252px;
  margin: auto;
`;

export default function KakaoMapPage(props) {
  const address = String(props.address);
  useEffect(() => {
    const script = document.createElement("script");
    // <script type="text/javascript" src="//dapi.kakao.com/v2/maps/sdk.js?appkey=APIKEY&libraries=services"></script>
    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?appkey=cc653075a49daa7a2446f11dbeae75f7&autoload=false&libraries=services ";
    document.head.appendChild(script);

    script.onload = () => {
      window.kakao.maps.load(function () {
        const container = document.getElementById("map"); // 지도를 담을 영역의 DOM 레퍼런스
        const options = {
          // 지도를 생성할 때 필요한 기본 옵션
          center: new window.kakao.maps.LatLng(37.4849, 126.8964), // 지도의 중심좌표.
          level: 3, // 지도의 레벨(확대, 축소 정도)
        };

        const map = new window.kakao.maps.Map(container, options); // 지도 생성 및 객체 리턴

        // 주소-좌표 변환 객체를 생성합니다
        const geocoder = new window.kakao.maps.services.Geocoder();

        // 주소로 좌표를 검색합니다
        geocoder.addressSearch(address, function (result, status) {
          // 정상적으로 검색이 완료됐으면
          if (status === window.kakao.maps.services.Status.OK) {
            const coords = new window.kakao.maps.LatLng(
              result[0].y,
              result[0].x
            );
            console.log(coords);

            if (props.setGPS) props.setGPS(coords);
            // 결과값으로 받은 위치를 마커로 표시합니다
            const marker = new window.kakao.maps.Marker({
              map,
              position: coords,
            });

            // 인포윈도우로 장소에 대한 설명을 표시합니다
            const info = new window.kakao.maps.InfoWindow({
              content: `<div style="width:150px;text-align:center;padding:6px 0;">${address}</div>`,
            });
            info.open(map, marker);
            // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
            map.setCenter(coords);
          }
        });
      });
    };
  }, [address]);

  return (
    <Wrapper>
      <MapWrapper id="map"></MapWrapper>
    </Wrapper>
  );
}
