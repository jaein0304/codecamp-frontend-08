import styled from "@emotion/styled";
import { useRecoilState } from "recoil";
import { userInfoState } from "../../src/commons/store";
import { withAuth } from "../../src/components/commons/hocs/withAuth";
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
  const [userInfo] = useRecoilState(userInfoState);
  useAuth();
  return (
    <>
      {/* <LayoutHeader /> */}
      <LayoutBanner />
      <br />
      <br />
      <div>{userInfo.name}님 환영합니다🎉</div>
      <Body></Body>
      <LayoutBody />
    </>
  );
}
