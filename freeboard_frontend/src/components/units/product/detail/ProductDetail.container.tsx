import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import {
  IMutation,
  IMutationCreatePointTransactionOfBuyingAndSellingArgs,
  IMutationDeleteUseditemArgs,
  IMutationToggleUseditemPickArgs,
  IQuery,
  IQueryFetchUseditemArgs,
} from "../../../../commons/types/generated/types";
import { useAuth } from "../../../commons/hooks/useAuth";
import ProductDetailUI from "./ProductDetail.presenter";
import {
  CREATE_POINT_TRANSACTION_OF_BUYING_AND_SELLING,
  DELETE_USED_ITEM,
  FETCH_USED_ITEM,
  TOGGLE_USEDITEM_PICK,
} from "./ProductDetail.queries";

export default function ProductDetail() {
  const router = useRouter();
  useAuth();
  const [toggleUseditemPick] = useMutation<
    Pick<IMutation, "toggleUseditemPick">,
    IMutationToggleUseditemPickArgs
  >(TOGGLE_USEDITEM_PICK);

  const [createPointTransactionOfBuyingAndSelling] = useMutation<
    Pick<IMutation, "createPointTransactionOfBuyingAndSelling">,
    IMutationCreatePointTransactionOfBuyingAndSellingArgs
  >(CREATE_POINT_TRANSACTION_OF_BUYING_AND_SELLING);

  const [deleteUsedItem] = useMutation<
    Pick<IMutation, "deleteUseditem">,
    IMutationDeleteUseditemArgs
  >(DELETE_USED_ITEM);

  const { data } = useQuery<
    Pick<IQuery, "fetchUseditem">,
    IQueryFetchUseditemArgs
  >(FETCH_USED_ITEM, {
    variables: { useditemId: String(router.query.productId) },
    fetchPolicy: "network-only", // 이걸 사용한다
  });
  // 상품 구매
  const onClickBuy = async () => {
    try {
      await createPointTransactionOfBuyingAndSelling({
        //  if (typeof data.target?.result === "string") {
        variables: { useritemId: router.query._id },
      });
      alert("상품 구매가 완료되었습니다.");
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  // 상품 수정으로 가기
  const onClickMoveToEdit = () => {
    router.push(`/products/${router.query.productId}/edit`);
  };

  // 상품 삭제
  const onClickDelete = async () => {
    console.log("삭제버튼클릭");
    // if (typeof router.query.productId !== "string") return;
    try {
      console.log("삭제중...👀");
      await deleteUsedItem({
        variables: { useditemId: String(router.query.productId) },
        refetchQueries: [
          {
            query: FETCH_USED_ITEM,
            // variables: { ProductId: router.push("/products/") },
          },
        ],
      });
      alert("상품이 정상적으로 삭제되었습니다.");
      router.push("/products");
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  return (
    <ProductDetailUI
      data={data}
      onClickDelete={onClickDelete}
      onClickMoveToEdit={onClickMoveToEdit}
      onClickBuy={onClickBuy}
      // isEdit={undefined}
    />
  );
}
