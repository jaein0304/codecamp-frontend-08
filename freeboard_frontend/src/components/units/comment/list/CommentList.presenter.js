import { getDate } from "../../../../commons/libraries/utils";
import * as S from "./CommentList.styles";

export default function BoardCommentListUI(props) {
  return (
    <>
      {props.data?.fetchBoardComments.map((el) => (
        <S.Wrapper>
          {/* <S.IdWrapper key={el._id}> */}
          <S.CommentWrapper>
            <S.ProfileWrapper>
              <S.Profile src="/img-board-detail/ic_profile-24px.png" />
            </S.ProfileWrapper>
            <S.DataWrapper>
              <S.Writer>{el.writer}</S.Writer>
              <S.Contents>{el.contents} </S.Contents>
              <S.CreatedAt>{getDate(el.createdAt)}</S.CreatedAt>
            </S.DataWrapper>
            <S.ButtonWrapper>
              <S.EditButton src="/img-board-detail/ic_comment_write.png" />
              <S.DeleteButton
                src="/img-board-detail/ic_comment_delete.png"
                id={el._id}
                onClick={props.OnClickDelete}
              />
            </S.ButtonWrapper>
          </S.CommentWrapper>
          {/* </S.IdWrapper> */}
        </S.Wrapper>
      ))}
    </>
  );
}
