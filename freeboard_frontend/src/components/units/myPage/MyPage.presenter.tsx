import * as S from "./MyPage.styles";
import { IMyPageUIProps } from "./MyPage.types";
import PointListPage from "./pointList/PointList";

export default function MyPageUI(props: IMyPageUIProps) {
  return (
    <>
      <S.Wrapper>
        <S.SideWrapper>
          {/* <S.Line></S.Line> */}
          <S.MyPage>MYPAGE</S.MyPage>
          <S.UserProfile src="/images/profile.jpeg" />
          <S.Point>{props.data?.fetchUserLoggedIn.name} 님</S.Point>
          <S.Point>💲 {props.data?.fetchUserLoggedIn.userPoint.amount}P</S.Point>
          <S.SideMenu>SHOP</S.SideMenu>
          <S.SideMenu onClick={props.onCLickPoint}>POINT</S.SideMenu>
          <S.SideMenu>PROFILE</S.SideMenu>
          <S.SideArrow onClick={props.onClickArrow}></S.SideArrow>
        </S.SideWrapper>
        <S.Line></S.Line>
        <S.MainWrapper>
          <S.SelectList>
            <S.List>판매내역</S.List>
            <S.List>충전내역</S.List>
            <S.List>구매내역</S.List>
            <S.List>판매내역</S.List>
          </S.SelectList>
          {/* isOpen 으로 버튼 누를 때 열리는 페이지들 */}
          <PointListPage />
        </S.MainWrapper>
      </S.Wrapper>
    </>
  );
}
