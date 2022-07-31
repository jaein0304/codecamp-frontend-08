import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { ReactNode } from "react";
import LayoutBanner from "./banner/LayoutBanner.container";
import LayoutFooter from "./footer/LayoutFooter.container";
import LayoutHeader from "./header/LayoutHeader.container";
import LayoutNavigation from "./navigation/LayoutNavigation.container";

const Body = styled.div`
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
interface ILayoutProps {
  children: ReactNode;
}

export default function Layout(props: ILayoutProps) {
  const router = useRouter();
  console.log(router);

  return (
    <>
      <LayoutHeader />
      <LayoutBanner />
      <LayoutNavigation />
      {/* <div
          style={{
            width: "10%",
            height: "auto",
            backgroundColor: "pink",
          }}
        >
          사이드바
        </div> */}
      <Body>
        <div className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          TailWind CSS 적용기..!{" "}
        </div>
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
        {props.children}
        <LayoutFooter />
      </Body>
    </>
  );
}
