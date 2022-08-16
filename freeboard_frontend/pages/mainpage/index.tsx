import styled from "@emotion/styled";
import { useAuth } from "../../src/components/commons/hooks/useAuth";
import LayoutBanner from "../../src/components/commons/layout/banner/LayoutBanner.container";
import LayoutBody from "../../src/components/commons/layout/body/LayoutBody.container";

const Body = styled.div`
  height: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function MainPage() {
  useAuth();
  return (
    <>
      {/* <LayoutHeader /> */}
      <LayoutBanner />

      <Body></Body>
      <LayoutBody />
    </>
  );
}
