import * as S from "./LayoutBody.styles";
import { ILayoutBodyProps } from "./LayoutBody.types";
import { FcNews } from "react-icons/fc";
export default function LayoutBodyUI(props: ILayoutBodyProps) {
  return (
    <>
      <S.Wrapper>
        <S.Headline>Industry Headlines</S.Headline>
        {/* 1 */}
        <S.BorderLine></S.BorderLine>
        <S.MainWrapper>
          <S.ImgWrapper>
            <S.Img src="/images/body/04.jpg" />
          </S.ImgWrapper>
          <S.ContextWrapper>
            <S.IconWrapper>
              <FcNews />
              <S.News>News</S.News>
            </S.IconWrapper>
            <S.Title>Xenoblade Chronicles 3 Review Embargo Details</S.Title>
            <S.Context>
              Xenoblade Chronicles 3 reviews are expected Tuesday morning! Here
              are the full embargo details.
            </S.Context>
            <S.SubContext>by Matthew Enthoven | July 26, 2022</S.SubContext>
            <S.Button>READ MORE</S.Button>
          </S.ContextWrapper>
        </S.MainWrapper>
        {/* 2 */}
        <S.BorderLine></S.BorderLine>
        <S.MainWrapper>
          <S.ContextWrapper>
            <S.IconWrapper>
              <FcNews />
              <S.News>News</S.News>
            </S.IconWrapper>
            <S.Title>Xenoblade Chronicles 3 Review Embargo Details</S.Title>
            <S.Context>
              Xenoblade Chronicles 3 reviews are expected Tuesday morning! Here
              are the full embargo details.
            </S.Context>
            <S.SubContext>by Matthew Enthoven | July 26, 2022</S.SubContext>
            <S.Button>READ MORE</S.Button>
          </S.ContextWrapper>
          <S.ImgWrapper>
            <S.Img src="/images/body/01.jpg" />
          </S.ImgWrapper>
        </S.MainWrapper>
        {/* 3 */}
        <S.BorderLine></S.BorderLine>
        <S.MainWrapper>
          <S.ImgWrapper>
            <S.Img src="/images/body/02.jpg" />
          </S.ImgWrapper>
          <S.ContextWrapper>
            <S.IconWrapper>
              <FcNews />
              <S.News>News</S.News>
            </S.IconWrapper>
            <S.Title>Xenoblade Chronicles 3 Review Embargo Details</S.Title>
            <S.Context>
              Xenoblade Chronicles 3 reviews are expected Tuesday morning! Here
              are the full embargo details.
            </S.Context>
            <S.SubContext>by Matthew Enthoven | July 26, 2022</S.SubContext>
            <S.Button>READ MORE</S.Button>
          </S.ContextWrapper>
        </S.MainWrapper>
        {/* 4 */}
        <S.BorderLine></S.BorderLine>
        <S.MainWrapper>
          <S.ContextWrapper>
            <S.IconWrapper>
              <FcNews />
              <S.News>News</S.News>
            </S.IconWrapper>
            <S.Title>Xenoblade Chronicles 3 Review Embargo Details</S.Title>
            <S.Context>
              Xenoblade Chronicles 3 reviews are expected Tuesday morning! Here
              are the full embargo details.
            </S.Context>
            <S.SubContext>by Matthew Enthoven | July 26, 2022</S.SubContext>
            <S.Button>READ MORE</S.Button>
          </S.ContextWrapper>
          <S.ImgWrapper>
            <S.Img src="/images/body/03.jpg" />
          </S.ImgWrapper>
        </S.MainWrapper>
      </S.Wrapper>
    </>
  );
}
