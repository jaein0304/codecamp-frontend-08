import {
  ApolloClient,
  ApolloLink,
  ApolloProvider,
  InMemoryCache,
} from "@apollo/client";
import { createUploadLink } from "apollo-upload-client";
import { ReactNode, useEffect } from "react";
import { useRecoilState } from "recoil";
import { userInfoState, accessTokenState } from "../../../../commons/store";
// import { accessTokenState } from "../../../../../src_quiz/commons/store";

const APOLLO_CACHE = new InMemoryCache();

interface IApolloSettingProps {
  children: ReactNode;
}
export default function ApolloSetting(props: IApolloSettingProps) {
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  const [userInfo, setUserInfo] = useRecoilState(userInfoState);

  // 새로고침 시 useEffect 으로 accessToken 받아옴
  useEffect(() => {
    console.log("지금은 브라우저다");
    const accessToken = localStorage.getItem("accessToken") || "";
    const userInfo = localStorage.getItem("userInfo");
    setAccessToken(accessToken);

    if (!accessToken || !userInfo) return;
    if (!userInfo) return;
    setUserInfo(JSON.parse(userInfo)); // string이니까(string형태로 못넣음) 다시 객체로바꿔 넣어주는 것
  }, []);

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
