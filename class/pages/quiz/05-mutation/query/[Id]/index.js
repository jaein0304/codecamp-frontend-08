import { useRouter } from "next/router";
import { useQuery, gql } from "@apollo/client";

const FETCH_PRODUCT = gql`
  query fetchProduct($productId: ID) {
    fetchProduct(productId: $productId) {
      _id
      seller
      name
      detail
      price
    }
  }
`;

export default function DynamicRoutedPage() {
  const router = useRouter();
  console.log(router);

  const { data } = useQuery(FETCH_PRODUCT, {
    variables: { productId: router.query.Id }, // 설정된값 : 내가설정한폴더이름값
    // variables: { productId: "4310b681-47ea-43e9-8493-2eee7e93286d"}
  });
  // console.log(router.query);
  console.log(data);

  return (
    <>
      <div>상세보기</div> <br></br>
      <div>{router.query.productId}</div>
      <div>판매자 : {data?.fetchProduct.seller}</div>
      <div>상품명 : {data?.fetchProduct.name}</div>
      <div>상품내용 : {data?.fetchProduct.detail}</div>
      <div>상품가격 : {data?.fetchProduct.price}</div>
    </>
  );
}
