import { useRouter } from "next/router";
import { ReactNode } from "react";
import Banner from "./banner";
import Footer from "./footer";
import Navigation from "./navigation";

interface ILayoutProps {
  children: ReactNode;
}

export default function Layout(props: ILayoutProps) {
  const router = useRouter();
  console.log(router);

  return (
    <>
      <div
        style={{
          width: "100%",
          height: "100px",
          backgroundColor: "rgb(187, 71, 54)",
        }}
      >
        Footer
      </div>
      <Banner></Banner>

      <Navigation />
      <div style={{ display: "flex" }}>
        <div
          style={{
            width: "300px",
            height: "400px",
            backgroundColor: "rgb(173,202,227)",
          }}
        >
          SideBar
        </div>
        <div>{props.children}</div>
      </div>
      <Footer />
    </>
  );
}
