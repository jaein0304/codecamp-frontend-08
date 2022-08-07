import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../../commons/store";
import {
  IMutation,
  IMutationLoginUserArgs,
  IQuery,
} from "../../../../commons/types/generated/types";
import LoginPageUI from "./login.presenter";
import { FETCH_USER_LOGGED_IN, LOGIN_USER } from "./login.queries";

export default function LoginPage() {
  const router = useRouter();
  const [, setAccessToken] = useRecoilState(accessTokenState);
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

        refetchQueries: [
          {
            query: FETCH_USER_LOGGED_IN,
            variables: { boardId: router.query.name },
          },
        ],
      });
      const accessToken = result.data?.loginUser.accessToken;
      if (!accessToken) return;
      setAccessToken(accessToken);
      alert("로그인에 성공하였습니다");
      router.push("./sign-confirm");
      // alert(`${data?.fetchUserLoggedIn.name}님 환영합니다!`);
      // router.push("/../mainpage");
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
