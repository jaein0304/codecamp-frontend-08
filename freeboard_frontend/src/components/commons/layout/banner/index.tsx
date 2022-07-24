import styled from "@emotion/styled";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
const Wrapper = styled.div`
  height: 300px;
  background-color: rgb(255, 255, 255);
  display: flex;
  flex-direction: row;
`;
const SliderWrapper = styled.div`
  width: 300px;
  height: 300px;
  margin: auto;
`;
const Image = styled.img`
  width: 300px;
  height: 300px;
`;
export default function Banner() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    // fade: true,
    // cssEase: "linear",
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
  };
  return (
    <Wrapper>
      배너 영역
      <SliderWrapper>
        <Slider {...settings}>
          <Image src="/img/hello.png" />
          {/* <Image src="/img/slider-1.png" />
          <Image src="/img/slider-2.png" />
          <Image src="/img/slider-3.png" />
          <Image src="/img/slider-4.png" />
          <Image src="/img/slider-5.png" />
          <Image src="/img/slider-6.png" /> */}
          <Image src="/img/emoticon_1.gif" />
          <Image src="/img/emoticon_2.gif" />
          <Image src="/img/emoticon_3.gif" />
          <Image src="/img/emoticon_4.gif" />
          {/* <Image src="/img/emoticon_5.gif" /> */}
          <Image src="/img/emoticon_6.gif" />
          <Image src="/img/emoticon_7.gif" />
          <Image src="/img/emoticon_8.gif" />
          <Image src="/img/emoticon_9.gif" />
          <Image src="/img/emoticon_10.gif" />
        </Slider>
      </SliderWrapper>
    </Wrapper>
  );
}
