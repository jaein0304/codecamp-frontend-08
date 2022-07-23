import { useState } from "react";
import { getDate } from "../../../../commons/libraries/utils";
import BoardCommentWrite from "../write/CommentWrite.container";
import * as S from "./CommentList.styles";
import { IBoardCommentListUIProps } from "./CommentList.types";

export default function BoardCommentListUI(props: IBoardCommentListUIProps) {
  const [isEdit, setIsEdit] = useState(false);

  return (
    <>
      {props.data?.fetchBoardComments.map((el) => (
        <div key={el._id} id={String(el)}>
          {!isEdit && (
            <S.Wrapper key={el._id}>
              <S.CommentWrapper>
                <S.ProfileWrapper>
                  <S.Profile src="/img-board-detail/ic_profile-24px.png" />
                </S.ProfileWrapper>
                <S.DataWrapper>
                  <S.Writer>{el?.writer}</S.Writer>{" "}
                  <S.Rating value={el.rating} disabled />
                  <S.Contents>{el.contents} </S.Contents>
                  <S.CreatedAt>{getDate(el.createdAt)}</S.CreatedAt>
                </S.DataWrapper>
                <S.ButtonWrapper>
                  <S.EditButton
                    src="/img-board-detail/ic_comment_write.png"
                    onClick={props.onClickMoveToBoardCommentUpdate}
                  />
                  <S.DeleteButton
                    src="/img-board-detail/ic_comment_delete.png"
                    onClick={props.onClickDeleteModal}
                  />
                </S.ButtonWrapper>
              </S.CommentWrapper>
            </S.Wrapper>
          )}
        </div>
      ))}
      {isEdit && (
        <BoardCommentWrite isEdit={true} setIsEdit={setIsEdit} el={el} />
      )}
    </>
  );
}
