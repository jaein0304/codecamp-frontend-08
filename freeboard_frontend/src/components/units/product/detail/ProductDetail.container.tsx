import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import {
  IMutation,
  IMutationDeleteUseditemArgs,
  IQuery,
  IQueryFetchUseditemArgs,
} from "../../../../commons/types/generated/types";
import { useAuth } from "../../../commons/hooks/useAuth";
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

  // 상품 삭제
  const onClickDelete = async () => {
    console.log("삭제버튼클릭");
    if (typeof router.query.productId !== "string") return;
    try {
      console.log("삭제중...👀");
      await deleteUsedItem({
        variables: { useditemId: String(router.query.productId) },
        refetchQueries: [
          {
            query: FETCH_USED_ITEM,
            variables: { boardId: router.push("/products/") },
          },
        ],
      });
      alert("상품이 정상적으로 삭제되었습니다.");
      // router.push("/products");
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  return (
    <ProductDetailUI
      data={data}
      onClickDelete={onClickDelete}
      // isEdit={undefined}
    />
  );
}
