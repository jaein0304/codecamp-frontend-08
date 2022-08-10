import { useApolloClient, useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import { useRecoilState } from "recoil";
import { accessTokenState, userInfoState } from "../../../../commons/store";
import {
  IMutation,
  IMutationLoginUserArgs,
  IQuery,
} from "../../../../commons/types/generated/types";
import LoginPageUI from "./login.presenter";
import { FETCH_USER_LOGGED_IN, LOGIN_USER } from "./login.queries";

export default function LoginPage() {
  const router = useRouter();
  const client = useApolloClient();
  const [, setAccessToken] = useRecoilState(accessTokenState);
  const [userInfo, setUserInfo] = useRecoilState(userInfoState);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loginUser] = useMutation<
    Pick<IMutation, "loginUser">,
    IMutationLoginUserArgs
  >(LOGIN_USER);

  const { data, refetch } =
    useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER_LOGGED_IN);

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

        /* refetchQueries: [
          {
            query: FETCH_USER_LOGGED_IN,
            variables: { boardId: router.query.name },
          },
        ], */
      });
      const accessToken = result.data?.loginUser.accessToken;
      if (!accessToken) return;

      // 2. 로그인 토큰으로 유저정보 받아오기
      const resultUserInfo = await client.query({
        query: FETCH_USER_LOGGED_IN,
        context: {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        },
      });
      const userInfo = resultUserInfo.data?.fetchUserLoggedIn;

      // 3. 글로벌 스테이트에 저장하기
      setAccessToken(accessToken);
      setUserInfo(userInfo);

      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("userInfo", JSON.stringify(userInfo));

      alert("로그인에 성공하였습니다");
      // router.push("./sign-confirm");
      // alert(`${data?.fetchUserLoggedIn.name}님 환영합니다!`);
      router.push("/../mainpage");
    } catch (error) {
      alert("로그인을 먼저 해주세요.");
    }
  };

  return (
    <LoginPageUI
      onChangeEmail={onChangeEmail}
      onChangePassword={onChangePassword}
      onClickLogin={onClickLogin}
      refetch={refetch}
    />
  );
}
