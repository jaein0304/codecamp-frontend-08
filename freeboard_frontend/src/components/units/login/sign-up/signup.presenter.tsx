import * as S from "./signup.styles";
import { ISignUpUIProps } from "./signup.types";

export default function SignUpPageUI(props: ISignUpUIProps) {
  return (
    <form onSubmit={props.handleSubmit(props.onClickButton)}>
      <S.Wrapper>
        회원정보를 입력해주세요
        <S.InputWrapper>
          <S.Input
            type="text"
            placeholder="이메일"
            {...props.register("email")}
          />
          <div>{props.formState.errors.email?.message}</div>
        </S.InputWrapper>
        <S.InputWrapper>
          <S.Input
            type="password"
            placeholder="비밀번호"
            {...props.register("password")}
          />
          <div>{props.formState.errors.password?.message}</div>
        </S.InputWrapper>
        {/* <S.InputWrapper>
          <S.Label>비밀번호 확인 :</S.Label>
          <S.Input type="password" register={register("password")} />
        </S.InputWrapper> */}
        <S.InputWrapper>
          <S.Input type="text" placeholder="이름" {...props.register("name")} />
          <div>{props.formState.errors.name?.message}</div>
        </S.InputWrapper>
        <S.InputWrapper>
          <S.Input
            type="tel"
            placeholder="휴대폰 번호"
            {...props.register("phone")}
          />
          <div>{props.formState.errors.phone?.message}</div>
        </S.InputWrapper>
        <S.LoginButton>회원가입</S.LoginButton>
      </S.Wrapper>
    </form>
  );
}
