
import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import ProductWriteUI from "./ProductWrite.presenter";
import { CREATE_PRODUCT, UPDATE_PRODUCT } from "./ProductWrite.queries";

export default function ProductWrite(props) {
  const router = useRouter();

  const [myColor, setMyColor] = useState(false);

  const [seller, setSeller] = useState("");
  const [name, setName] = useState("");
  const [detail, setDetail] = useState("");
  const [price, setPrice] = useState(0);

  const [createProduct] = useMutation(CREATE_PRODUCT);
  const [updateProduct] = useMutation(UPDATE_PRODUCT);

  //등록
  const onClickCreate = async () => {
    const result = await createProduct({
      variables: {
        seller,
        createProductInput: {
          name: name,
          detail: detail,
          price: Number(price),
        },
      },
    });
    console.log(result);
    console.log(result.data.createProduct.message);
    // router.push(`/quiz/08-01-product/${router.query.id}`);
    router.push(`/quiz/08-01-product/${result.data.createProduct._id}`); //
  };;

  //수정
  const onClickUpdate = async () => {
    const result = await updateProduct({
      variables: {
        productId: router.query.id,
        updateProductInput: { 
          name,
          detail,
          price: Number(price)
        }
        
      },
    });
    console.log(result);
    console.log(result.data.updateProduct.message);
    router.push(`/quiz/08-01-product/${result.data.updateProduct._id}`); //
  };

  const onChangeSeller = (event) => {
    setSeller(event.target.value);
    if (event.target.value && name && detail && price) setMyColor(true);
    else setMyColor(false);
  };

  const onChangeName = (event) => {
    setName(event.target.value);
    if (seller && event.target.value && detail && price) setMyColor(true);
    else setMyColor(false);
  };

  const onChangeDetail = (event) => {
    setDetail(event.target.value);
    if (seller && name && event.target.value && price) setMyColor(true);
    else setMyColor(false);
  };
  const onChangePrice = (event) => {
    setPrice(event.target.value);
    if (seller && name && detail && event.target.value) setMyColor(true);
    else setMyColor(false);
  };

  return (
    <>
      <div>Product</div> <br />
      <ProductWriteUI
        onClickCreate={onClickCreate} // const props = {aaa:onClickGraphqlApi} //키:밸류 이름 같게 설정 해줌 {onClickGraphqlApi:onClickGraphqlApi}
        onClickUpdate={onClickUpdate}
        onChangeSeller={onChangeSeller}
        onChangeName={onChangeName}
        onChangeDetail={onChangeDetail}
        onChangePrice={onChangePrice}
        myColor={myColor}
        isEdit={props.isEdit}
      />
    </>
  );
}
