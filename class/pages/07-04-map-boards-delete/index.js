import { useQuery, gql, useMutation } from "@apollo/client";
import styled from "@emotion/styled";

// fetchBoard(
//     number: Int
//     ): BoardReturn

const FETCH_BOARDS = gql`
  query fetchBoards {
    fetchBoards {
      number
      writer
      title
      contents
    }
  }
`;

const DELETE_BOARD = gql`
  mutation deleteBoard($number: Int) {
    #괄호
    deleteBoard(number: $number) {
      message
    }
  }
`;
const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Column = styled.div`
  width: 20%;
`;

export default function MapFruitsPage() {
  const [deleteBoard] = useMutation(DELETE_BOARD); // 대괄호임!
  const { data } = useQuery(FETCH_BOARDS);

  console.log(data);

  //삭제버튼 클릭시 실행 될 함수
  const onClickDelete = (event) => {
    deleteBoard({
      variables: { number: Number(event.target.id) },
      refetchQueries: [{ query: FETCH_BOARDS }],
    });
    console.log("지우고있니");
    console.log(event.target.id);
  };

  return (
    <>
      {data?.fetchBoards.map((el, index) => (
        // <Fragment> 에도 키를 쓸 수 있음 </Fragment>
        // <Fragment = key={el.number}>
        <Row key={el.number}>
          {/* 키값 안은 가급적이면 index로 하지말기 */}
          <Column>
            <input type="checkbox" />
          </Column>
          <Column>{el.number}</Column>
          <Column>{el.writer}</Column>
          <Column>{el.title}</Column>
          <Column>
            <button id={el.number} onClick={onClickDelete}>
              삭제
            </button>
          </Column>
        </Row>
      ))}
    </>
  );
}
