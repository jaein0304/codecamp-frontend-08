// 등록하기 /boards/new
import BoardWrite from "../../../src/components/units/board/09-write/BoardWrite.container";
// class/src/components/units/board/08-write
export default function GraphqlMutationPage() {
  //   router.query.number; //undefined, 주의하기
  //   console.log(router.query.number + "주의");

  return <BoardWrite isEdit={false} />;
}
