//수정하기 /boards/[number]/edit

import BoardWrite from "../../../../src/components/units/board/08-write/BoardWrite.container";

export default function GraphqlMutationPage() {
  return <BoardWrite isEdit={true} />;
}
