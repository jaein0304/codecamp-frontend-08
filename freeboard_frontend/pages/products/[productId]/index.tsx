// 상품 상세보기 페이지

import ProductDetail from "../../../src/components/units/product/detail/ProductDetail.container";
import ProductCommentList from "../../../src/components/units/productComment/list/ProductCommentList.container";
import ProductCommentWrite from "../../../src/components/units/productComment/write/ProductCommentWrite.container";

export default function ProductDetailPage() {
  return (
    <>
      <ProductDetail />
      <ProductCommentWrite />
      <ProductCommentList />
    </>
  );
}
