import { getDate } from "../../../../commons/libraries/utils";
import * as S from "./CommentList.styles";
import { IBoardCommentListUIProps } from "./CommentList.types";

export default function BoardCommentListUI(props: IBoardCommentListUIProps) {
  return (
    <>
      {props.data?.fetchBoardComments.map((el) => (
        <S.Wrapper key={el._id}>
          <S.CommentWrapper>
            <S.ProfileWrapper>
              <S.Profile src="/img-board-detail/ic_profile-24px.png" />
            </S.ProfileWrapper>
            <S.DataWrapper>
              <S.Writer>{el.writer}</S.Writer>{" "}
              <S.Rating value={el.rating} disabled />
              <S.Contents>{el.contents} </S.Contents>
              <S.CreatedAt>{getDate(el.createdAt)}</S.CreatedAt>
            </S.DataWrapper>
            <S.ButtonWrapper>
              <S.EditButton src="/img-board-detail/ic_comment_write.png" />
              <S.DeleteButton
                src="/img-board-detail/ic_comment_delete.png"
                id={el._id}
                onClick={props.onClickDeleteModal}
              />
            </S.ButtonWrapper>
          </S.CommentWrapper>
        </S.Wrapper>
      ))}
      {props.isOpenDeleteModal && (
        <S.PasswordModal visible={true} onOk={props.onClickDelete}>
          <div>비밀번호 입력: </div>
          <S.PasswordInput
            type="password"
            onChange={props.onInputDeletePassword}
          />
        </S.PasswordModal>
      )}
    </>
  );
}
