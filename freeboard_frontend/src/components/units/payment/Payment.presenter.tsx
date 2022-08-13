import * as S from "./Payment.styles";

export default function PaymentUI(props) {
  return (
    <>
      <S.Wrapper>
        <S.Title>포인트충전</S.Title>
        <S.PointAmount>
          {props.data?.fetchUserLoggedIn.userPoint?.amount.toLocaleString(
            "ko-KR"
          )}
        </S.PointAmount>
        <S.Input
          onChange={props.onChangeMyPoint}
          placeholder="충전할 금액을 입력해주세요."
        />
        <S.Button onClick={props.onClickPayment}>충전하기</S.Button>
      </S.Wrapper>
    </>
  );
}
