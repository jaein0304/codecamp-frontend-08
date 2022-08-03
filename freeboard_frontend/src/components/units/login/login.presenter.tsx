import * as S from "./login.styles";
import { ILoginUIProps } from "./login.types";

export default function LoginPageUI(props: ILoginUIProps) {
  return (
    <>
      <S.Wrapper>
        <S.InputWrapper>
          <S.Label>이메일 :</S.Label>
          <S.Input type="text" onChange={props.onChangeEmail} />
        </S.InputWrapper>
        <S.InputWrapper>
          <S.Label>비밀번호 :</S.Label>
          <S.Input type="password" onChange={props.onChangePassword} />
        </S.InputWrapper>
        <S.LoginButton onClick={props.onClickLogin}>로그인</S.LoginButton>
      </S.Wrapper>
    </>
  );
}
