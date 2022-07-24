import { useState } from "react";
import { getDate } from "../../../../commons/libraries/utils";
import BoardCommentWrite from "../write/CommentWrite.container";
import * as S from "./CommentList.styles";
import { IBoardCommentListUIProps } from "./CommentList.types";

export default function BoardCommentListUI(props: any) {
  const [isEdit, setIsEdit] = useState(false);
  const onClickUpdate = () => {
    setIsEdit(true);
  };
  // const onClickDeleteModal = (event: MouseEvent<HTMLImageElement>) => {
  //   setBoardCommentId(event.target.id);
  //   setIsOpenDeleteModal(true);
  // };

  return (
    <>
      {props.isOpenDeleteModal && (
        <S.PasswordModal visible={true} onOk={onClickDelete}>
          <div>비밀번호 입력: </div>
          <S.PasswordInput type="password" onChange={onInputDeletePassword} />
        </S.PasswordModal>
      )}
      {props.data?.fetchBoardComments.map((el) => (
        <div key={el._id} id={String(el)}>
          {!isEdit && (
            <S.Wrapper key={el._id}>
              <S.CommentWrapper>
                <S.ProfileWrapper>
                  <S.Profile src="/img-board-detail/ic_profile-24px.png" />
                </S.ProfileWrapper>
                <S.DataWrapper>
                  <S.Writer>{props.el?.writer}</S.Writer>
                  <S.Rating value={props.el?.rating} disabled />
                  <S.Contents>{props.el?.contents} </S.Contents>
                  <S.CreatedAt>{getDate(props.el?.createdAt)}</S.CreatedAt>
                </S.DataWrapper>
                <S.ButtonWrapper>
                  <S.EditButton
                    src="/img-board-detail/ic_comment_write.png"
                    onClick={onClickUpdate}
                  />
                  <S.DeleteButton
                    src="/img-board-detail/ic_comment_delete.png"
                    onClick={onClickDeleteModal}
                  />
                </S.ButtonWrapper>
              </S.CommentWrapper>
            </S.Wrapper>
          )}
        </div>
      ))}
      {isEdit && (
        <BoardCommentWrite isEdit={true} setIsEdit={setIsEdit} el={props.el} />
      )}
    </>
  );
}
