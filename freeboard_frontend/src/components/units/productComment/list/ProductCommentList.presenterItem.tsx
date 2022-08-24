import * as S from "./ProductCommentList.styles";
import { DELETE_USED_ITEM_QUESTION, FETCH_USED_ITEM_QUESTIONS } from "./ProductCommentList.queries";
import { IBoardCommentListUIItemProps } from "./ProductCommentList.types";
import router from "next/router";

import { useMutation } from "@apollo/client";
import {
  IMutation,
  IMutationDeleteUseditemQuestionArgs,
} from "../../../../commons/types/generated/types";
import { Modal } from "antd";
import { useState } from "react";
import ProductCommentWrite from "../write/ProductCommentWrite.container";
import ProductCommentReplyWrite from "../reply/write/ProductCommentReplyWrite.container";
import ProductCommentList from "../reply/list/ProductCommentReplyList.container";

export default function ProductCommentListUIItem(props: IBoardCommentListUIItemProps) {
  const [deleteUseditemQuestion] = useMutation<
    Pick<IMutation, "deleteUseditemQuestion">,
    IMutationDeleteUseditemQuestionArgs
  >(DELETE_USED_ITEM_QUESTION);

  const [isEdit, setIsEdit] = useState(false);
  const [isReply, setIsReply] = useState(false);

  const onClickUpdate = () => {
    setIsEdit(true);
  };

  const onClickReply = () => {
    console.log("Asadasdd");
    setIsReply((prev) => !prev);
  };

  const onClickDelete = async () => {
    try {
      await deleteUseditemQuestion({
        variables: {
          useditemQuestionId: props.el?._id,
        },
        refetchQueries: [
          {
            query: FETCH_USED_ITEM_QUESTIONS,
            variables: { useditemId: router.query.productId },
          },
        ],
      });
      alert("댓글이 삭제되었습니다.");
    } catch (error) {
      if (error instanceof Error) Modal.error({ content: error.message });
    }
  };

  return (
    <>
      {!isEdit && (
        <S.Wrapper>
          <S.CommentListWrapper>
            <S.CommentWrapper>
              <S.UserInfoWrapper>
                <S.UserInfo>
                  <S.UserName>{props.el?.user?.name}</S.UserName>
                  <S.Comment>{props.el?.contents}</S.Comment>
                  <S.CreatedAt>
                    {props.el?.createdAt.slice(0, 10) + " "}
                    {props.el?.createdAt.slice(11, 19)}
                  </S.CreatedAt>
                </S.UserInfo>
              </S.UserInfoWrapper>
              <S.ButtonWrapper>
                <S.Button onClick={onClickReply} src="/images/reply.png" />
                <S.Button onClick={onClickUpdate} src="/img-board-detail/ic_comment_write.png" />
                <S.Button onClick={onClickDelete} src="/img-board-detail/ic_comment_delete.png" />
              </S.ButtonWrapper>
            </S.CommentWrapper>
          </S.CommentListWrapper>
          <S.LineWrapper>
            <S.Line />
          </S.LineWrapper>
        </S.Wrapper>
      )}

      {isEdit && <ProductCommentWrite isEdit={true} setIsEdit={setIsEdit} el={props.el} />}

      <ProductCommentList el={props.el} />
      {isReply && <ProductCommentReplyWrite setIsReply={setIsReply} el={props.el} />}
    </>
  );
}
