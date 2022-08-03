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
          {/* <Image src="/img/hello.png" />
          <Image src="/img/emoticon_1.gif" />
          <Image src="/img/emoticon_2.gif" />
          <Image src="/img/emoticon_3.gif" />
          <Image src="/img/emoticon_4.gif" />
          <Image src="/img/emoticon_6.gif" />
          <Image src="/img/emoticon_9.gif" />
          <Image src="/img/emoticon_7.gif" />
          <Image src="/img/emoticon_8.gif" />
          <Image src="/img/emoticon_10.gif" /> */}
          <div>
            <S.Image src="https://c.opencritic.com/cdn-cgi/image/h=240,f=auto,q=70/images/games/8586/E6MHUKQjWm2upGGwOXZX9ZP4NbaaUk1EAxCvbuJWJACfuReS.jpg" />
          </div>
          <div>
            <S.Image src="https://c.opencritic.com/cdn-cgi/image/h=240,f=auto,q=70/images/games/302/rH0hZvYGJP4Ku96E6xKn2BGjmezfaFXjfqbDspzwszqyA1JV.jpg" />
          </div>
          <div>
            <S.Image src="https://c.opencritic.com/cdn-cgi/image/h=240,f=auto,q=70/images/games/11066/Xi1AhzsVPytEaaWzk53xdF5T1H3A3HheAFt3BWhW00IaTwCr.jpg" />
          </div>
          <div>
            <S.Image src="https://c.opencritic.com/cdn-cgi/image/h=240,f=auto,q=70/images/games/12091/eTtcDcKWnoJcfM4g6LBpJIVM036qhGt6r7chxniNUQbwu7C4.jpg" />
          </div>
          <div>
            <S.Image src="https://c.opencritic.com/cdn-cgi/image/h=240,f=auto,q=70/images/games/1402/mACKwBElXahtWnOIHiiaIMTdaXXbFS0TGS7RX7S4uRg7s8XZ.jpg" />
          </div>
          <div>
            <S.Image src="https://c.opencritic.com/cdn-cgi/image/h=240,f=auto,q=70/images/games/13386/R3RzFQRkm8JTmMub2yhTndLzIyP0sSEC1FTe185nem0oUKch.jpg" />
          </div>
          <div>
            <S.Image src="https://c.opencritic.com/cdn-cgi/image/h=240,f=auto,q=70/images/games/13148/ieK1UHpn0P3SQc0lY6Xfg9rOF4AneYqaGUoyUEJhD9m9TYXp.jpg" />
          </div>
          <div>
            <S.Image src="https://c.opencritic.com/cdn-cgi/image/h=240,f=auto,q=70/images/games/13434/S6kevRrEj1f5Ujukwrt6GyAlUBXWSTef1eJPZw7zK0wFdD0r.jpg" />
          </div>
          <div>
            <S.Image src="https://c.opencritic.com/cdn-cgi/image/h=240,f=auto,q=70/images/games/12090/D6LG77jjtFpgGeCbrXXqKv0JEy558naF3hDAEFjGA970uNPB.jpg" />
          </div>
          <div>
            <S.Image src="https://c.opencritic.com/cdn-cgi/image/h=240,f=auto,q=70/images/games/12947/g0v7e1C7x8XMn8uvbFNDNkd8qRY7q0EY8b1JHBLzkoUwyeZ8.jpg" />
          </div>
          <div>
            <S.Image src="https://c.opencritic.com/cdn-cgi/image/h=240,f=auto,q=70/images/games/13232/rD2mLRjyHShyA4dlea5LQ0Vr39sDGCvxrEiiPDs2o2zyFEYY.jpg" />
          </div>
          <div>
            <S.Image src="https://c.opencritic.com/cdn-cgi/image/h=240,f=auto,q=70/images/games/8020/ruoUowJ82EkLq7mFGvo9UGpLO33LkZTOsnGpF46u3gtZtqkQ.jpg" />
          </div>
          <div>
            <S.Image src="https://c.opencritic.com/cdn-cgi/image/h=240,f=auto,q=70/images/games/9585/FVKOcRjCj8BuVWw0VAZz7eGLSlgQuY0OHeJBhsSu7g1lvquN.jpg" />
          </div>
          <div>
            <S.Image src="https://c.opencritic.com/cdn-cgi/image/h=240,f=auto,q=70/images/games/5032/mzXPV8TFETlNu0blb3JNGA5PBzEeKe9Ij471SelEWUQFtz0P.jpg" />
          </div>
          <div>
            <S.Image src="https://c.opencritic.com/cdn-cgi/image/h=240,f=auto,q=70/images/games/9258/CjHcsjXetCcimbvsrea4wztr9UxwBZwcKrTe44BySFuGExC5.jpg" />
          </div>
        </Slider>
      </S.SliderWrapper>
    </S.Wrapper>
  );
}
