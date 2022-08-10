import styled from "@emotion/styled";
import { useRecoilState } from "recoil";
import { userInfoState } from "../../src/commons/store";
import { withAuth } from "../../src/components/commons/hocs/withAuth";
import LayoutBanner from "../../src/components/commons/layout/banner/LayoutBanner.container";
import LayoutBody from "../../src/components/commons/layout/body/LayoutBody.container";

const Body = styled.div`
  height: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function MainPage() {
  const [userInfo] = useRecoilState(userInfoState);

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
export default withAuth(MainPage);
