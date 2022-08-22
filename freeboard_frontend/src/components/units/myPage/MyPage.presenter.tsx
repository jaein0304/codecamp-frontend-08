import * as S from "./MyPage.styles";
import { IMyPageUIProps } from "./MyPage.types";
export default function MyPageUI(props: IMyPageUIProps) {
  return (
    <>
      <S.Wrapper>
        <S.SideWrapper>
          {/* <S.Line></S.Line> */}
          <S.MyPage>MYPAGE</S.MyPage>
          <S.UserProfile src="/images/profile.jpeg" />
          <S.Point>{props.data?.fetchUserLoggedIn.name} 님</S.Point>
          <S.Point>
            💲 {props.data?.fetchUserLoggedIn.userPoint.amount}P
          </S.Point>
          <S.SideMenu>SHOP</S.SideMenu>
          <S.SideMenu onClick={props.onCLickPoint}>POINT</S.SideMenu>
          <S.SideMenu>PROFILE</S.SideMenu>
          <S.SideArrow onClick={props.onClickArrow}></S.SideArrow>
        </S.SideWrapper>
        <S.Line></S.Line>
        <S.MainWrapper></S.MainWrapper>
      </S.Wrapper>
    </>
  );
}
