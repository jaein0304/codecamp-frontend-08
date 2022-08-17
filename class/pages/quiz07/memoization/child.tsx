import { memo } from "react";

function MemoizationChildPage() {
  console.log("3번 자식 렌더링");
  return <div>자식 컴포넌트</div>;
}

export default memo(MemoizationChildPage);
