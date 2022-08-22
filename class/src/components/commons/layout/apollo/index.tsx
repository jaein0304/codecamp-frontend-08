import {
  ApolloClient,
  ApolloLink,
  ApolloProvider,
  fromPromise,
  gql,
  InMemoryCache,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import { createUploadLink } from "apollo-upload-client";
import { ReactNode, useEffect } from "react";
import { useRecoilState } from "recoil";
import {
  userInfoState,
  accessTokenState,
  isLoadedState,
} from "../../../../commons/store";
import { GraphQLClient } from "graphql-request";
import { getAccessToken } from "../../../../commons/libraries/getAccessToken";

const APOLLO_CACHE = new InMemoryCache();

interface IApolloSettingProps {
  children: ReactNode;
}
export default function ApolloSetting(props: IApolloSettingProps) {
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  const [userInfo, setUserInfo] = useRecoilState(userInfoState);
  const [isLoaded, setIsLoaded] = useRecoilState(isLoadedState);

  // 새로고침 시 useEffect 으로 accessToken 받아옴
  // useEffect(() => {
  //   console.log("지금은 브라우저다");
  //   const accessToken = localStorage.getItem("accessToken") || "";
  //   const userInfo = localStorage.getItem("userInfo");
  //   setAccessToken(accessToken);

  //   if (!accessToken || !userInfo) return;
  //   if (!userInfo) return;
  //   setUserInfo(JSON.parse(userInfo)); // string이니까(string형태로 못넣음) 다시 객체로바꿔 넣어주는 것
  // }, []);

  // 새로운 방식
  // ================================================= //
  // [해결방법 1번째 - restoreAccessToken 2번 요청하기]
  useEffect(() => {
    // getAccessToken().then((newAccessToken) => {
    //   setAccessToken(newAccessToken);
    // });
    //
    // ================================================= //
    // [해결방법 2번째 - 나만의 loading 활용하기 ]
    // getAccessToken().then((newAccessToken) => {
    //   setAccessToken(newAccessToken);
    //   setIsLoaded(true);
    // });
    // ================================================= //
    // [해결방법 3번째 - Recoil Selector 활용하기 ]
  }, []);

  // 0815
  const errorLink = onError(({ graphQLErrors, operation, forward }) => {
    // 1-1. 에러 캐치 (graphQLErrors)
    if (graphQLErrors) {
      for (const err of graphQLErrors) {
        // apollo docs 참고
        // 1-2. 해당 에러가 토큰 만료 에러인지 체크
        if (err.extensions.code === "UNAUTHENTICATED") {
          return fromPromise(
            // 2-1. refreshToken으로 accessToken 재발급 (operation)
            getAccessToken().then((newAccessToken) => {
              // 2-2. 재발급받은 accessToken을 글로벌스테이트에 저장
              setAccessToken(newAccessToken);

              // 3-1. 재발급 받은 accessToken으로 실패한 쿼리 재요청 (forward) (토큰바꿔치기)
              operation.getContext().headers(); // 기존의 쿼리를 하기 위한 정보들을 받아올 수 있음 -> headers() -> 그 중 헤더의 정보들만, 만료되어있는 토큰이 추가되어 있는 상태
              operation.setContext({
                // 헤더(:요약정보)부분 바꿔치기
                headers: {
                  ...operation.getContext().headers, // 기존의 정보를 다가지고 오기위해 스프레드 사용, 만료된 토큰이 추가되어있는 상태
                  Authorization: `Bearer ${newAccessToken}`, // 토큰만 새걸로 바꿔치기
                },
              });
            })
          ).flatMap(() => forward(operation)); // 3-2. 재발급 받은 accessToken으로 실패한 쿼리 재요청 (forward) (변경된 operation 재요청하기)
        }
      }
    }
  });
  const uploadLink = createUploadLink({
    uri: "https://backend08.codebootcamp.co.kr/graphql", // http -> https (0815)
    headers: { Authorization: `Bearer ${accessToken}` }, // 0803
    credentials: "include", // 0815
  });

  // 세팅 완료
  const client = new ApolloClient({
    link: ApolloLink.from([errorLink, uploadLink]), // 에러링크가 먼저와야함 순서 중요 0815
    cache: APOLLO_CACHE, // RAM에다 저장한다
    connectToDevTools: true, // 0802
  });

  // prettier-ignore
  return <ApolloProvider client={client}>
        {props.children}
    </ApolloProvider>;
}
