import {
  ApolloClient,
  ApolloLink,
  ApolloProvider,
  InMemoryCache,
} from "@apollo/client";
import { createUploadLink } from "apollo-upload-client";
import { ReactNode, useEffect } from "react";
import { useRecoilState } from "recoil";
import { accessTokenState, userInfoState } from "../../../../commons/store";

const APOLLO_CACHE = new InMemoryCache();

interface IApolloSettingProps {
  children: ReactNode;
}

export default function ApolloSetting(props: IApolloSettingProps) {
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  const [userInfo, setUserInfo] = useRecoilState(userInfoState);

  useEffect(() => {
    console.log("apollo 토큰받기");
    const accessToken = localStorage.getItem("accessToken") || "";
    const userInfo = localStorage.getItem("userInfo");
    setAccessToken(accessToken);

    if (!accessToken || !userInfo) return;
    setUserInfo(JSON.parse(userInfo));
  }, []);

  /*  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    setAccessToken(token);
  }, []);
 */
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
