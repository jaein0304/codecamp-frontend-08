import { useMutation, useQuery } from "@apollo/client";
import ProductCommentListUI from "./ProductCommentReplyList.presenter";
import {
  DELETE_USEDITEM_QUESTION_ANSWER,
  FETCH_USEDITEM_QUESTIONS_ANSWERS,
} from "./ProductCommentReplyList.queries";

export default function ProductCommentList(props) {
  const { data, fetchMore } = useQuery(FETCH_USEDITEM_QUESTIONS_ANSWERS, {
    variables: {
      useditemQuestionId: props.el?._id,
    },
  });

  const [deleteUseditemQuestionAnswer] = useMutation(DELETE_USEDITEM_QUESTION_ANSWER);
  const onLoadMore = () => {
    if (!data) return;
    fetchMore({
      variables: {
        page: Math.ceil(data?.fetchUseditemQuestionAnswers.length / 10) + 1,
      },
      updateQuery: (prev: any, { fetchMoreResult }) => {
        return {
          fetchUseditemQuestionAnswers: [
            ...prev.fetchUseditemQuestionAnswers,
            ...fetchMoreResult.fetchUseditemQuestionAnswers,
          ],
        };
      },
    });
  };

  const onClickDeleteAnswer = (useditemQuestionAnswerId) => async () => {
    try {
      await deleteUseditemQuestionAnswer({
        variables: {
          useditemQuestionAnswerId,
        },
        update(cache, { data }) {
          const deleteId = data.deleteUseditemQuestionAnswer;
          cache.modify({
            fields: {
              fetchUseditemQuestionAnswers: (prev, { readField }) => {
                const newFetchUseditemQuestionAnswers = prev.filter(
                  (el) => readField("_id", el) !== deleteId
                );
                return [...newFetchUseditemQuestionAnswers];
              },
            },
          });
        },
      });
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <ProductCommentListUI
      data={data}
      onLoadMore={onLoadMore}
      onClickDeleteAnswer={onClickDeleteAnswer}
    />
  );
}
