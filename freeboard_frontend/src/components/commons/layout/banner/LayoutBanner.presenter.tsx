import { SliderWrapper, Wrapper, Image } from "./LayoutBanner.styles";
import * as S from "./LayoutBanner.styles";
import Slider from "react-slick";
import { ILayoutBannerProps } from "./LayoutBanner.types";

export default function LayoutBannerUI(props: ILayoutBannerProps) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    // fade: true,
    // cssEase: "linear",
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000, // 초
  };
  // const arr = ["8586/E6MHUKQjWm2upGGwOXZX9ZP4NbaaUk1EAxCvbuJWJACfuReS.jpg"];
  return (
    <S.Wrapper>
      <S.HeadTitle>Popular Games</S.HeadTitle>
      <S.HeadSubTitle>
        Don't miss the most popular games on OpenCritic today
      </S.HeadSubTitle>
      <S.SliderWrapper>
        <Slider {...settings}>
          <div>
            <S.Image src="/images/banner/01.jpg" />
          </div>
          <div>
            <S.Image src="/images/banner/02.jpg" />
          </div>
          <div>
            <S.Image src="/images/banner/03.jpg" />
          </div>
          <div>
            <S.Image src="/images/banner/04.jpg" />
          </div>
          <div>
            <S.Image src="/images/banner/05.jpg" />
          </div>
          <div>
            <S.Image src="/images/banner/06.jpg" />
          </div>
          <div>
            <S.Image src="/images/banner/07.jpg" />
          </div>
          <div>
            <S.Image src="/images/banner/08.jpg" />
          </div>
          <div>
            <S.Image src="/images/banner/09.jpg" />
          </div>
          <div>
            <S.Image src="/images/banner/10.jpg" />
          </div>
          <div>
            <S.Image src="/images/banner/11.jpg" />
          </div>
          <div>
            <S.Image src="/images/banner/12.jpg" />
          </div>
          <div>
            <S.Image src="/images/banner/13.jpg" />
          </div>
          <div>
            <S.Image src="/images/banner/14.jpg" />
          </div>
          <div>
            <S.Image src="/images/banner/15.jpg" />
          </div>
          <div>
            <S.Image src="/images/banner/16.jpg" />
          </div>
          <div>
            <S.Image src="/images/banner/17.jpg" />
          </div>
          <div>
            <S.Image src="/images/banner/18.jpg" />
          </div>
          <div>
            <S.Image src="/images/banner/19.jpg" />
          </div>
          <div>
            <S.Image src="/images/banner/20.jpg" />
          </div>
          <div>
            <S.Image src="/images/banner/21.jpg" />
          </div>
          <div>
            <S.Image src="/images/banner/22.jpg" />
          </div>
          <div>
            <S.Image src="/images/banner/23.jpg" />
          </div>
          <div>
            <S.Image src="/images/banner/24.jpg" />
          </div>
          <div>
            <S.Image src="/images/banner/25.jpg" />
          </div>
          <div>
            <S.Image src="/images/banner/26.jpg" />
          </div>
          <div>
            <S.Image src="/images/banner/27.jpg" />
          </div>
          <div>
            <S.Image src="/images/banner/28.jpg" />
          </div>
          <div>
            <S.Image src="/images/banner/29.jpg" />
          </div>
          <div>
            <S.Image src="/images/banner/30.jpg" />
          </div>
        </Slider>
      </S.SliderWrapper>
    </S.Wrapper>
  );
}
