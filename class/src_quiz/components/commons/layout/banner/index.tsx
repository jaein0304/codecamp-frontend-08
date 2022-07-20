import styled from "@emotion/styled";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
const Wrapper = styled.div`
  height: 300px;
  background-color: rgb(221, 186, 192);
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
  };
  return (
    <Wrapper>
      <SliderWrapper>
        <Slider {...settings}>
          <Image src="/img/slider-1.png" />
          <Image src="/img/slider-2.png" />
          <Image src="/img/slider-3.png" />
          <Image src="/img/slider-4.png" />
          <Image src="/img/slider-5.png" />
          <Image src="/img/slider-6.png" />
        </Slider>
      </SliderWrapper>
    </Wrapper>
  );
}
