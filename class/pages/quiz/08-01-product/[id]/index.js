//상세보기 /product/[Id]

import { useQuery, gql } from '@apollo/client'
import { useRouter } from 'next/router'

const FETCH_PRODUCT = gql`
  query fetchProduct($productId: ID) {
    fetchProduct(productId: $productId) {
      _id
      seller
      name
      detail
      price 
      createdAt
    }
  }
`;

export default function StaticRoutedPage(){
    const router = useRouter() 
    const { data } = useQuery(FETCH_PRODUCT, {
      variables: { productId: router.query.id }, //
    });

  console.log(router.query.id)
  console.log(data)
  
  const onClickMoveToEdit = () => {
    router.push(`/quiz/08-01-product/${router.query.id}/edit`)
  }

    return (
      <>
        {/* <div>{router.query.productId}상품이 정상적으로 등록되었습니다.</div> */}
        <div>판매자 : {data?.fetchProduct.seller}</div>
        <div>이름 : {data?.fetchProduct.name}</div>
        <div>내용 : {data?.fetchProduct.detail}</div>
        <div>가격 : {data?.fetchProduct.price}</div>
        <div>생성시간 : {data?.fetchProduct.createdAt}</div>
        <button onClick={onClickMoveToEdit}>수정하기 </button>
      </>
    );
}