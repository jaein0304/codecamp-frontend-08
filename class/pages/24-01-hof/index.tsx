import router, { useRouter } from "next/router";
import { MouseEvent } from "react";

const FETCH_BOARDS = [
  { _id: "111", writer: "철수", title: "안녕하세요" },
  { _id: "222", writer: "영희", title: "안녕하세요" },
  { _id: "333", writer: "훈이", title: "안녕하세요" },
  { _id: "444", writer: "맹구", title: "안녕하세요" },
];

export default function HofPage() {
  const router = useRouter();

  const onClickMove =
    (boardId: string) => (event: MouseEvent<HTMLDivElement>) => {
      router.push(`/boards/${boardId}`);
    };

  return (
    <div>
      {FETCH_BOARDS.map((el) => (
        //   실행준비 상태 (바인딩 상태)
        <div key={el._id} id={el._id} onClick={onClickMove(el._id)}>
          <span>{el.writer}</span>
          <span>{el.title}</span>
        </div>
      ))}
    </div>
  );
}
//   const aaa = (apple) => (banana) => {

// } aaa(10)(20)

// const qqq = (apple) => {

// }
