import { useMutation, gql } from "@apollo/client"   
 import { useState } from "react"
 import { useRouter } from 'next/router'

/* createProduct(
seller: String
createProductInput: CreateProductInput!
): Return 

type Return {
_id: String
number: Int
message: String
}

type CreateProductInput {
name: String
detail: String
price: Int
} */

const CREATE_PRODUCT = gql`
mutation createProduct($seller: String, $createProductInput: CreateProductInput!){
    createProduct(seller: $seller, createProductInput: $createProductInput) {
        _id
      number
      message
      }
  }
`
export default function CreateProductPage() {
    const router = useRouter() // 4번
    const [seller, setSeller] = useState("")
    const [name, setName] = useState("")
    const [detail, setDetail] = useState("")
    const [price, setPrice] = useState(0)
    const [createProduct] = useMutation(CREATE_PRODUCT) // 2번

    const onClickRegistration = async () => {
        // 3번
        try {
        const result = await createProduct({
            variables: {
                seller,
                createProductInput: {
                    name, 
                    detail, 
                    price: Number(price) 
                }
            }
    })
    router.push(`/quiz/05-mutation/query/${result.data.createProduct._id}`) 
    // ._id로바꾸니까 주소 넘어감 ! 원래는 []안에있는 폴더 이름 넣었음
    // router.push(`https://www.naver.com`)
    console.log(result) // 성공
    console.log(result.data.createProduct.message)
    } catch(error) { // 변수로 error 선언 
        console.log(error.message);
        console.log("실패")
    }
}
    const onChangeSeller = (event) => {
        setSeller(event.target.value)
    }

    const onChangeProductName = (event) => {
        setName(event.target.value)
    }

    const onChangeProductContents = (event) => {
        setDetail(event.target.value)
    }

    const onChangeProductPrice = (event) => {
        setPrice(event.target.value)
    }

  
    return (
        <>
        판매자 : <input type="text" onChange={onChangeSeller}/><br></br> 
        상품명 : <input type="text" onChange={onChangeProductName}/><br></br>
        상품내용 : <input type="text" onChange={onChangeProductContents}/><br></br>
        상품가격 : <input type="text" onChange={onChangeProductPrice}/><br></br>
        <button onClick={onClickRegistration}>상품등록</button>        
        </>
    )
}
