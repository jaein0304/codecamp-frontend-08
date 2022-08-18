import { useRouter } from "next/router";
import { useEffect } from "react";
import { useRecoilState, useRecoilValueLoadable } from "recoil";
import {
  accessTokenState,
  restoreAccessTokenLoadable,
} from "../../../commons/store";

export function useAuth() {
  const router = useRouter();
  const [accessToken] = useRecoilState(accessTokenState);
  const restoreAccessToken = useRecoilValueLoadable(restoreAccessTokenLoadable);
  useEffect(() => {
    /*     if (!localStorage.getItem("accessToken")) {
      alert("로그인 후 이용 가능합니다!!!");
      console.log("useauth 입니당");
      console.log(localStorage.getItem("accessToken"));
      router.push("/login/sign-in");
    } */
    if (!accessToken) {
      restoreAccessToken.toPromise().then((newAccessToken) => {
        console.log(newAccessToken);
        if (!newAccessToken) {
          alert("로그인을 먼저 해주세요.");
          router.push("/login");
        }
      });
    }
  }, []);
}
