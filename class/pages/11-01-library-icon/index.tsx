import { SmileTwoTone } from "@ant-design/icons";
import styled from "@emotion/styled";

const MyIcon = styled(SmileTwoTone)`
  font-size: 100px;
  color: pink;
`;

export default function LibraryIconPage() {
  return <MyIcon />;
  // <MyIcon id="qqq"/>아이콘을 클릭해서 이벤트 타겟 아이디를 가져오는건 아직 어렵다
}
