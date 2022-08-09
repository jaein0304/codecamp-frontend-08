import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import { useRecoilState } from "recoil";
import {
  IBoard,
  IMutation,
  IMutationLoginUserArgs,
} from "../../../src/commons/types/generated/types";
import { accessTokenState } from "../../../src/commons/store";

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

  // const baskets: Pick<IBoard, "contents" | "title" | "_id" | "writer">[] =
  //   JSON.parse(localStorage.getItem("baskets") || "[]");

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
      // router.push("/quiz06/boards/");
      if (localStorage) {
        alert(
          "비회원으로 담긴 게시물 장바구니가 존재합니다. 이동하시겠습니까?"
        );
        router.push("/quiz06/basket/");
      }
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
