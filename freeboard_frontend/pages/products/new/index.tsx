import { withAuth } from "../../../src/components/commons/hocs/withAuth";
import ProductWrite from "../../../src/components/units/product/write/ProductWrite.container";

// 상품 등록하기

const ProductWritePage = () => {
  return <ProductWrite />;
};

export default withAuth(ProductWritePage);
