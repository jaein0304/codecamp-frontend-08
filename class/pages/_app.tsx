// import "../styles/globals.css";
import {
  ApolloClient,
  ApolloLink,
  ApolloProvider,
  InMemoryCache,
} from "@apollo/client";
import { Global } from "@emotion/react";
import "antd/dist/antd.css"; // 이부분이 import가 되어야 css를 가져올 수 있음 여기에 하면 모든 페이지에 적용됨
import { AppProps } from "next/app";
import { globalStyles } from "../src/commons/styles/globalStyles";
import Layout from "../src/components/commons/layout";
import { createUploadLink } from "apollo-upload-client";
import { RecoilRoot } from "recoil";

import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDcDpcYev0-Ar6LSN2hpgetzzYOK-m-wqc",
  authDomain: "codecamp-08-jaein.firebaseapp.com",
  projectId: "codecamp-08-jaein",
  storageBucket: "codecamp-08-jaein.appspot.com",
  messagingSenderId: "30546454898",
  appId: "1:30546454898:web:ad9741ff6f748c7e9455eb",
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);

function MyApp({ Component, pageProps }: AppProps) {
  const uploadLink = createUploadLink({
    uri: "http://backend08.codebootcamp.co.kr/graphql",
  });

  const client = new ApolloClient({
    link: ApolloLink.from([uploadLink]),
    cache: new InMemoryCache(), // RAM에다 저장한다
    connectToDevTools: true, // 0802
  });

  return (
    <RecoilRoot>
      <ApolloProvider client={client}>
        {/* <Global styles={globalStyles} /> */}
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ApolloProvider>
    </RecoilRoot>
  );
  // 여기 Component는 우리가 접속한 페이지 컴포넌트
}

export default MyApp;
