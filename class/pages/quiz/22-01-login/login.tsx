/*  
    1. login 페이지에서 아이디, 비밀번호 입력창을 만들고 loginUser를 활용하여 accessToken을 받아보세요.
    2. 받은 accessToken을 Recoil을 활용해 _app.tsx의 state에 저장해 보세요.
    3. 이후 모든 http request 통신에 accessToken을 첨부하기 위해 _app.tsx에 저장된 accessToken을 apollo의 request-header 영역에 추가해 보세요.
    4. 로그인에 성공하면 성공한 페이지로 이동해 보세요.
    단, accessToken이 없는 유저는 "로그인을 먼저 해주세요" 라는 경고문과 함께 login 페이지로 보내줍니다. 
*/
import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import { useRecoilState } from "recoil";
import {
  IMutation,
  IMutationLoginUserArgs,
} from "../../../src/commons/types/generated/types";
import { accessTokenState } from "../../../src_quiz/commons/store";

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
    try {
      const result = await loginUser({
        variables: { email, password },
      });
      const accessToken = result.data?.loginUser.accessToken;
      if (!accessToken) return;
      setAccessToken(accessToken);
      alert("로그인에 성공하였습니다");

      router.push("/quiz/22-01-login/login-success");
    } catch (error) {
      alert("로그인을 먼저 해주세요.");
    }
  };
  return (
    <>
      <h1>
        이메일: <input type="text" onChange={onChangeEmail} />
      </h1>
      <h1>
        비밀번호: <input type="password" onChange={onChangePassword} />
      </h1>
      <h1>
        <button onClick={onClickLogin}>로그인하기</button>
      </h1>
    </>
  );
}
