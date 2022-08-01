import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { ReactNode } from "react";
import LayoutBanner from "./banner/LayoutBanner.container";
import LayoutBody from "./body/LayoutBody.container";
import LayoutFooter from "./footer/LayoutFooter.container";
import LayoutHeader from "./header/LayoutHeader.container";
import LayoutNavigation from "./navigation/LayoutNavigation.container";

const Body = styled.div`
  height: 100px;
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
      {/* <LayoutBanner /> */}
      <Body>{props.children}</Body>
      {/* <LayoutBody /> */}
      {/* <LayoutFooter /> */}
    </>
  );
}
