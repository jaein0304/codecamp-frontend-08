//상세보기 페이지 
import BoardDetail from "../../../src/components/units/board/detail/BoardDetail.container";
import BoardCommentWrite from "../../../src/components/units/comment/write/CommentWrite.container";
import BoardCommentList from "../../../src/components/units/comment/list/CommentList.container";
export default function BoardDetailPage() {
  return (
    <>
      <BoardDetail />
      <BoardCommentWrite isEdit={false} />
      <BoardCommentList />
    </>
  );
}
