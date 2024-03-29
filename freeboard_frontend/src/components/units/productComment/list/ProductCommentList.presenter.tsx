import InfiniteScroll from "react-infinite-scroller";
import ProductCommentListUIItem from "./ProductCommentList.presenterItem";
import { IProductCommentListUIProps } from "./ProductCommentList.types";

export default function ProductCommentListUI(props: IProductCommentListUIProps) {
  return (
    <>
      <InfiniteScroll pageStart={0} loadMore={props.onLoadMore} hasMore={true}>
        {props.data?.fetchUseditemQuestions.map((el) => (
          <ProductCommentListUIItem key={el._id} el={el} />
        ))}
      </InfiniteScroll>
    </>
  );
}
