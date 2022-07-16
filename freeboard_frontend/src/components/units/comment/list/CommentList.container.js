import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useMutation } from "@apollo/client";
import { FETCH_BOARD_COMMENTS, DELETE_BOARD_COMMENT } from "./CommentList.queries";
import BoardCommentListUI from "./CommentList.presenter";


export default function BoardCommentList() {
  const router = useRouter();
  const { data } = useQuery(FETCH_BOARD_COMMENTS, {
    variables: { boardId: String(router.query.boardId) },
   // refetchQueries: [{ query: FETCH_BOARD_COMMENTS }], //작동해ㅐㅐㅐㅐ
  });

  const [deleteBoardComment] = useMutation(DELETE_BOARD_COMMENT)
  
  const OnClickDelete = async (event) => {
    const password = prompt("비밀번호 입력");
    try {
      await deleteBoardComment({
        variables: {
          password,
          boardCommentId: event.target.id,
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: {boardId: router.query.boardId}
          }
        ]
      })
    } catch (error) {
      alert("비밀번호가 틀렸습니다.");
    }
  }

  return <BoardCommentListUI
    data={data}
    OnClickDelete={OnClickDelete}
  />;
}
