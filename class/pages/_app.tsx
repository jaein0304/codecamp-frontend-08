// import "../styles/globals.css";
import "antd/dist/antd.css"; // 이부분이 import가 되어야 css를 가져올 수 있음 여기에 하면 모든 페이지에 적용됨
import { AppProps } from "next/app";
import Layout from "../src/components/commons/layout";
import { RecoilRoot } from "recoil";
import { initializeApp } from "firebase/app";
import ApolloSetting from "../src/components/commons/layout/apollo";
import Head from "next/head";

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
  return (
    <>
      {/*   <Head> 모든 페이지에서 카카오맵을 다운로드 받는 비효율적인 방법
        <script
          type="text/javascript"
          src="//dapi.kakao.com/v2/maps/sdk.js?appkey=cc653075a49daa7a2446f11dbeae75f7"
        ></script>
      </Head> */}
      <RecoilRoot>
        <ApolloSetting>
          {/* <Global styles={globalStyles} /> */}
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ApolloSetting>
      </RecoilRoot>
    </>
  );
  // 여기 Component는 우리가 접속한 페이지 컴포넌트
}

export default MyApp;
