import "../styles/globals.css";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import "antd/dist/antd.css"; // 이부분이 import가 되어야 css를 가져올 수 있음 여기에 하면 모든 페이지에 적용됨
import { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  const client = new ApolloClient({
    uri: "http://example.codebootcamp.co.kr/graphql",
    cache: new InMemoryCache(), // RAM에다 저장한다
  });

  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
  // 여기 Component는 우리가 접속한 페이지 컴포넌트
}

export default MyApp;
