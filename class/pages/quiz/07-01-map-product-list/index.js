import { useQuery, gql, useMutation } from "@apollo/client";
import styled from "@emotion/styled";

// fetchProduct(
//     productId: ID
//     ): ProductReturn

const FETCH_PRODUCTS = gql`
  query fetchProducts {
    fetchProducts {
      _id
      seller
      name
      detail
      price
    }
  }
`;

const DELETE_PRODUCT = gql`
  mutation deleteProduct($productId: ID) {
    deleteProduct(productId: $productId) {
      message
    }
  }
`;
const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Column = styled.div`
  width: 100%;
`;

export default function MapFruitsPage() {
  const [deleteProduct] = useMutation(DELETE_PRODUCT);
  const { data } = useQuery(FETCH_PRODUCTS);

  console.log(data);

  /* ========================= */
  //삭제버튼 클릭시 실행 될 함수
  const onClickDelete = (event) => {
    deleteProduct({
      variables: { productId: event.target.id },
      refetchQueries: [{ query: FETCH_PRODUCTS }], // #5. refetchQueries를 활용하여 표를 업데이트 해주세요.
    });
    //console.log(event.target); // 꿀팁..!
    console.log("지우고있니");
     //return event.target.id ? true : false;
  };

  // 체크박스 함수
  const onCheckBox = (event) => {
    return event.target.id ? onClickDelete(true) : onClickDelete(false);
    
    // let result = "";
    // if (event.target.checked) result = event.target.value;
    // else result = "";
  };

  
  return (
    <>
      {data?.fetchProducts.map((el) => (
        <Row key={el._id}>
          <Column>
            <input type="checkbox" name="checkBoxName" />
            {/* checked='checked'로 하면 모든 체크박스가 표시된다. */}
            {/* 아니면 checked 그냥 선언해줘도 모든 체크박스가 표시된다. */}
          </Column>
          <Column>{el._id}</Column>
          <Column>{el.seller}</Column>
          <Column>{el.name}</Column>
          <Column>{el.detail}</Column>
          <Column>{el.price}</Column>
          <Column>
            <button id={el._id} onClick={onClickDelete}>
              삭제
            </button>
            {/* <button  onClick={onCheckBox}>
              삭제테스트
            </button> */}
          </Column>
        </Row>
      ))}
    </>
  );
}
