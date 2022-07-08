 import { useMutation, gql } from "@apollo/client"   
 import { useState } from "react"

/*createProduct(
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
}*/

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
    const [seller, setSeller] = useState("")
    const [name, setName] = useState("")
    const [detail, setDetail] = useState("")
    const [price, setPrice] = useState(0)
    const [createProduct] = useMutation(CREATE_PRODUCT) //2번


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

    const onClickRegistration = async () => {
        //3번
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
    console.log(result) //성공
    } catch(error) { //변수로 error 선언 
        console.log(error.message);
        console.log("실패")
    }
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