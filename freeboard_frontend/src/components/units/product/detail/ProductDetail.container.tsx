import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import {
  IMutation,
  IMutationDeleteUseditemArgs,
  IQuery,
  IQueryFetchUseditemArgs,
} from "../../../../commons/types/generated/types";
import { useAuth } from "../../../commons/hooks/useAuth";
import { useMoveToPage } from "../../../commons/hooks/useMoveToPage";
import ProductDetailUI from "./ProductDetail.presenter";
import { DELETE_USED_ITEM, FETCH_USED_ITEM } from "./ProductDetail.queries";

export default function ProductDetail() {
  const router = useRouter();
  useAuth();
  const [deleteUsedItem] = useMutation<
    Pick<IMutation, "deleteUseditem">,
    IMutationDeleteUseditemArgs
  >(DELETE_USED_ITEM);

  const { data } = useQuery<
    Pick<IQuery, "fetchUseditem">,
    IQueryFetchUseditemArgs
  >(FETCH_USED_ITEM, {
    variables: { useditemId: String(router.query.productId) },
  });

  // 25-03-custom-hooks 참고하기
  const { onClickMoveToPage } = useMoveToPage();

  const onClickDelete = async () => {
    if (typeof router.query.boardId !== "string") return;
    try {
      await deleteUsedItem({
        variables: { useditemId: String(router.query.productId) },
      });
      alert("상품이 정상적으로 삭제되었습니다.");
      router.push("/mainpage"); // 상품목록 완성 시 경로 바꾸기
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  return (
    <ProductDetailUI
      data={data}
      // onClickMoveToPage={onClickMoveToPage}
      onClickDelete={onClickDelete}
    />
  );
}
