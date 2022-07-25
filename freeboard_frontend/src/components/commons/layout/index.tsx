import { useRouter } from "next/router";
import { ReactNode } from "react";
import LayoutBanner from "./banner/LayoutBanner.container";
import LayoutFooter from "./footer/LayoutFooter.container";
import LayoutHeader from "./header/LayoutHeader.container";
import LayoutNavigation from "./navigation/LayoutNavigation.container";

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
      <div style={{ display: "flex" }}>
        {/* <div
          style={{
            width: "10%",
            height: "auto",
            backgroundColor: "pink",
          }}
        >
          사이드바
        </div> */}
        <div style={{ width: "80%" }}>{props.children}</div>
        {/* <div
          style={{
            width: "10%",
            height: "auto",
            backgroundColor: "pink",
          }}
        >
          Sidebar
        </div> */}
      </div>

      <LayoutFooter />
    </>
  );
}
