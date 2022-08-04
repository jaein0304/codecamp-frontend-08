import {
  ApolloClient,
  ApolloLink,
  ApolloProvider,
  InMemoryCache,
} from "@apollo/client";
import { createUploadLink } from "apollo-upload-client";
import { ReactNode, useEffect } from "react";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../../commons/store";
// import { accessTokenState } from "../../../../../src_quiz/commons/store";

const APOLLO_CACHE = new InMemoryCache();

interface IApolloSettingProps {
  children: ReactNode;
}
export default function ApolloSetting(props: IApolloSettingProps) {
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);

  useEffect(() => {
    console.log("지금은 브라우저다");
    const result = localStorage.getItem("accessToken") || "";
    console.log(result);
    setAccessToken(result); // accessToken 이면안돼요
  }, []);
  // 1. 프리렌더링 예제 - process.browser 방법
  /*  if (process.browser) {
    console.log("지금은 브라우저다");
    const result = localStorage.getItem("accessToken");
    console.log(result);
  } else {
    console.log("지금은 프론트엔드 서버입니다, 즉 yarn dev 프로그램 내부");
    const result = localStorage.getItem("accessToken");
    console.log(result);
  } */

  // 2. 프리렌더링 예제 - typeof window 방법
  // window가 있다 -> 브라우저가 있다
  // 만약 window가 비어있지 않다면
  /*  if (typeof window !== "undefined") {
    console.log("지금은 브라우저다");
    const result = localStorage.getItem("accessToken");
    console.log(result);
  } else {
    console.log("지금은 프론트엔드 서버입니다, 즉 yarn dev 프로그램 내부");
    const result = localStorage.getItem("accessToken");
    console.log(result);
  } */

  // 3. 프리렌더링 무시 - useEffect 방법
  // 1시간마다 로그인해야하는 문제는 해결못함

  const uploadLink = createUploadLink({
    uri: "http://backend08.codebootcamp.co.kr/graphql",
    headers: { Authorization: `Bearer ${accessToken}` }, // 0803
  });

  const client = new ApolloClient({
    link: ApolloLink.from([uploadLink]),
    cache: APOLLO_CACHE, // RAM에다 저장한다
    connectToDevTools: true, // 0802
  });

  // prettier-ignore
  return <ApolloProvider client={client}>
        {props.children}
    </ApolloProvider>;
}
