import { useQuery, gql } from "@apollo/client";

const FETCH_BOARD = gql`
  query fetchBoard($number: Int) {
    fetchBoard(number: 1) {
      number
      writer
      title
      contents
    }
  }
`;

export default function StaticRoutedBoardPage() {
  const { data } = useQuery(FETCH_BOARD, {
    variables: { number: 1 },
  }); // data라는걸 함부로 aaa같은걸로 바꾸면 안돼요
  // 페이지가 열리자마자 useQuery 자동 실행 (mutation과의 차이점, mutation은 실행하고 싶을 때 실행)
  // -> useQuery안에 variables 넣기

  console.log(data);

  return (
    <>
      {/* 안나오는 이유는 1번에 정보가 없어서  */}
      <div>1번 게시글 이동이 완료되었습니다</div>
      {/* <div>작성자:{data !== undefined ? data.fetchBoard.writer : "받아오는 중 입니다"}</div> */}
      <div>작성자:{data ? data.fetchBoard.writer : "받아오는 중 입니다"}</div>
      <div>제목: {data ? data.fetchBoard.title : "받아오는 중 입니다"}</div>
      <div>내용: {data ? data.fetchBoard.contents : "받아오는 중 입니다"}</div>
      {/* 데이터가 있으면 뒤에꺼 보여줘 없으면 앞에꺼  */}
      <div>제목: {data && data.fetchBoard.title}</div>
      {/* 위에꺼 최신버전, 옵셔널 체이닝이라함, 이거 사용! */}
      <div>제목: {data?.fetchBoard.title}</div>
    </>
  );
}
