import { useRouter } from "next/router";
import { ReactNode } from "react";
import LayoutBanner from "./banner";
import LayoutFooter from "./footer";
import LayoutHeader from "./header";
import LayoutNavigation from "./navigation";

const HIDDEN_HEADERS = [
  "/12-05-modal-refactoring",
  // ...,
  // ...,
  // ...
];
interface ILayoutProps {
  children: ReactNode;
}

export default function Layout(props: ILayoutProps) {
  const router = useRouter();
  console.log(router);
  const isHiddenHeader = HIDDEN_HEADERS.includes(router.asPath);
  return (
    <>
      {/* 조건부렌더링 */}
      {!isHiddenHeader && <LayoutHeader />}
      <LayoutBanner />
      <LayoutNavigation />
      <div style={{ display: "flex" }}>
        <div
          style={{
            width: "30%",
            height: "700px",
            backgroundColor: "orange",
          }}
        >
          사이드바 sidebar
        </div>
        <div style={{ width: "70%" }}>{props.children}</div>
      </div>

      <LayoutFooter />
    </>
  );
}
