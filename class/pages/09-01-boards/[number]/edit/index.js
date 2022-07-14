//수정하기 /boards/[number]/edit
import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { gql } from "@apollo/client";
import BoardWrite from "../../../../src/components/units/board/09-write/BoardWrite.container";
// fetchBoard(
// number: Int
// ): BoardReturn

// type BoardReturn {
// number: Int
// writer: String
// title: String
// contents: String
// like: Int
// createdAt: Date
// }
const FETCH_BOARD = gql` 
query fetchBoard($number: Int) {
  fetchBoard(number: $number) {
    number
    writer
    title
    contents
  }
}
`


export default function GraphqlMutationPage() {
  const router = useRouter();

  const { data } = useQuery(FETCH_BOARD, {
    variables: { number: Number(router.query.number) },
  });
  return <BoardWrite isEdit={true} data={data} />;
}
