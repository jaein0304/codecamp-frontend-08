import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import {
  IMutation,
  IMutationLoginUserArgs,
} from "../../src/commons/types/generated/types";
import { ChangeEvent, useState } from "react";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../src/commons/store";

const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      accessToken
    }
  }
`;

export default function LoginPage() {
  const [, setAccessToken] = useRecoilState(accessTokenState);
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginUser] = useMutation<
    Pick<IMutation, "loginUser">,
    IMutationLoginUserArgs
  >(LOGIN_USER);

  const onChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const onClickLogin = async () => {
    const result = await loginUser({
      variables: { email, password },
    });
    //   console.log(result.data.loginUser.accessToken)

    const accessToken = result.data?.loginUser.accessToken;
    console.log(accessToken);
    if (!accessToken) {
      alert("로그인에 실패하였습니다");
      return;
    }

    setAccessToken(accessToken); // 위에꺼아니구 함수안에 있는 accessToken
    alert("로그인에 성공하였습니다");
    router.push("/22-02-login-success");
  };
  return (
    <>
      이메일: <input type="text" onChange={onChangeEmail} />
      비밀번호: <input type="password" onChange={onChangePassword} />
      <button onClick={onClickLogin}>로그인하기</button>
    </>
  );
}
