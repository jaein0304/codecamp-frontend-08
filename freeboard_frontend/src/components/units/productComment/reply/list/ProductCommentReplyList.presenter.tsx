import InfiniteScroll from "react-infinite-scroller";
import ProductCommentReplyItemUI from "./ProductCommentReplyList.presenteritem";

export default function ProductCommentListUI(props) {
  return (
    <InfiniteScroll pageStart={0} loadMore={props.onLoadMore} hasMore={true}>
      {props.data?.fetchUseditemQuestionAnswers.map((replyEl) => (
        <ProductCommentReplyItemUI
          key={replyEl._id}
          replyEl={replyEl}
          onClickDeleteAnswer={props.onClickDeleteAnswer}
        />
      ))}
    </InfiniteScroll>
  );
}
