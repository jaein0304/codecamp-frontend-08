import { useRouter } from "next/router";
import { ReactNode } from "react";
import LayoutBanner from "./banner";
import LayoutFooter from "./footer";
import LayoutHeader from "./header";
import LayoutNavigation from "./navigation";

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
        <div
          style={{
            width: "10%",
            height: "auto",
            backgroundColor: "pink",
          }}
        >
          사이드바
        </div>
        <div style={{ width: "70%" }}>{props.children}</div>
      </div>

      <LayoutFooter />
    </>
  );
}
