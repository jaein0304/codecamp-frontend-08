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
            <S.Img src="https://c.opencritic.com/cdn-cgi/image/h=287,w=510,fit=crop,q=50,f=auto/images/articles/GE8WYU9mYu1bRsmYEsR7XyAv79MEXJdhE807J07cWylyIEVsEFS3Ghe7V3dxQUzC.jpg" />
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
            <S.Img src="https://c.opencritic.com/cdn-cgi/image/h=287,w=510,fit=crop,q=50,f=auto/images/games/12353/EBIilUFS0KCyAjmcA22Qm3orbHVePVrCkK6HY1NUVIEIdISM.jpg" />
          </S.ImgWrapper>
        </S.MainWrapper>
        {/* 3 */}
        <S.BorderLine></S.BorderLine>
        <S.MainWrapper>
          <S.ImgWrapper>
            <S.Img src="https://c.opencritic.com/cdn-cgi/image/h=287,w=510,fit=crop,q=50,f=auto/images/articles/UCfxu1MtnkrB8tY3r6PEXUv4eSRn4mtBZQJqntfrLkmGthuFYF9nxEyOwhjGR7eJ_th.jpg" />
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
            <S.Img src="https://c.opencritic.com/images/articles/Vz07zTdpAibTmcTSwmmpcET5pre5xinMDBv7mAGhQNTitHzO2nHDTNeVAA0xnocW_th.jpg" />
          </S.ImgWrapper>
        </S.MainWrapper>
      </S.Wrapper>
    </>
  );
}
