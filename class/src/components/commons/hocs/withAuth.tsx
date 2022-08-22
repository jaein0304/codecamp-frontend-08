import { useRouter } from "next/router";
import { useEffect } from "react";
import { useRecoilState, useRecoilValueLoadable } from "recoil";
import { getAccessToken } from "../../../commons/libraries/getAccessToken";
import {
  accessTokenState,
  isLoadedState,
  restoreAccessTokenLoadable,
} from "../../../commons/store";

export const withAuth = (Component) => (props) => {
  const router = useRouter();
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  const [isLoaded, setIsLoaded] = useRecoilState(isLoadedState);
  const aaa = useRecoilValueLoadable(restoreAccessTokenLoadable);
  useEffect(() => {
    if (!localStorage.getItem("accessToken")) {
      alert("로그인 후 이용 가능합니다");
      router.push("/23-06-login-check-hoc");
    }

    // [해결방법 1번째 - restoreAccessToken 2번 요청하기]
    // 똑같은게 2번 동시에 날라가게 되니까 비효율적
    /* if (!accessToken) {
      getAccessToken().then((newAccessToken) => {
        if (newAccessToken) {
          setAccessToken(newAccessToken);
        } else {
          alert("로그인 후 이용 가능합니다");
          router.push("/23-06-login-check-hoc");
        }
      });
    } */
  }, []);

  // ================================================= //
  // [해결방법 2번째 - 나만의 loading 활용하기]
  /* useEffect(() => {
    // 로딩이 되어있고 accessToken이 없다면
    if (isLoaded && !accessToken) {
      alert("로그인 후 이용 가능합니다");
      router.push("/23-06-login-check-hoc");
    }
  }, [isLoaded]); */

  // ================================================= //
  // [해결방법 3번째 - Recoil Selector 활용하기 ]
  useEffect(() => {
    aaa.toPromise().then((newAccessToken) => {
      if (!newAccessToken) {
        alert("로그인 후 이용 가능합니다");
        router.push("/23-06-login-check-hoc");
      }
    });
  });
  return <Component {...props} />;
};
