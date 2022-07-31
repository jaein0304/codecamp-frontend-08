import { SliderWrapper, Wrapper, Image } from "./LayoutBanner.styles";
import Slider from "react-slick";
import { ILayoutBannerProps } from "./LayoutBanner.types";

export default function LayoutBannerUI(props: ILayoutBannerProps) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    // fade: true,
    // cssEase: "linear",
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000, // 5초
  };

  return (
    <Wrapper>
      Banner{" "}
      <SliderWrapper>
        <Slider {...settings}>
          <Image src="/img/hello.png" />
          <Image src="/img/emoticon_1.gif" />
          <Image src="/img/emoticon_2.gif" />
          <Image src="/img/emoticon_3.gif" />
          <Image src="/img/emoticon_4.gif" />
          {/* <Image src="/img/emoticon_5.gif" /> */}
          <Image src="/img/emoticon_6.gif" />
          <Image src="/img/emoticon_9.gif" />
          <Image src="/img/emoticon_7.gif" />
          <Image src="/img/emoticon_8.gif" />
          <Image src="/img/emoticon_10.gif" />
        </Slider>
      </SliderWrapper>
    </Wrapper>
  );
}
