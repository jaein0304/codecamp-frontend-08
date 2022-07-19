import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import { FETCH_BOARD } from "./DynamicRoutedBoard.query";
import DynamicRoutedBoardUI from "./DynamicRoutedBoard.presenter";

export default function DynamicRoutedBoard() {
  const router = useRouter();

  const { data } = useQuery(FETCH_BOARD, {
    variables: { number: Number(router.query.number) }, // 문자열이기 때문에 숫자로 변환해줘야함
  });

  console.log(data);

  return <DynamicRoutedBoardUI data={data} number={router.query.number} />;
}
