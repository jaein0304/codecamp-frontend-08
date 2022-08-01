import styled from "@emotion/styled";
import { useRouter } from "next/router";
import LayoutBanner from "../../src/components/commons/layout/banner/LayoutBanner.container";
import LayoutBody from "../../src/components/commons/layout/body/LayoutBody.container";
import LayoutHeader from "../../src/components/commons/layout/header/LayoutHeader.container";

const Body = styled.div`
  height: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export default function MainPage() {
  const router = useRouter();
  console.log(router);

  return (
    <>
      {/* <LayoutHeader /> */}
      <LayoutBanner />
      <Body></Body>
      <LayoutBody />
    </>
  );
}
