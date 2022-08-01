import "../styles/styles.css";
import {
  ApolloClient,
  ApolloLink,
  ApolloProvider,
  InMemoryCache,
} from "@apollo/client";
import "antd/dist/antd.css"; // ant를 쓰기위한 import
import Layout from "../src/components/commons/layout";
import { Global } from "@emotion/react";
import { AppProps } from "next/app";
import { globalStyles } from "../src/commons/styles/globalStyles";
import { createUploadLink } from "apollo-upload-client";

function MyApp({ Component, pageProps }: AppProps) {
  // const client = new ApolloClient({
  //   uri: "http://backend08.codebootcamp.co.kr/graphql",
  //   cache: new InMemoryCache(),
  // });
  const uploadLink = createUploadLink({
    uri: "http://backend08.codebootcamp.co.kr/graphql",
  });

  const client = new ApolloClient({
    link: ApolloLink.from([uploadLink]),
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
      <Global styles={globalStyles} />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ApolloProvider>
  ); // 여기 Component는 우리가 접속한 페이지 컴포넌트
}

export default MyApp;
