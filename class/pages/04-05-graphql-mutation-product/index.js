import { useMutation, gql } from '@apollo/client'
// import { __Directive } from 'graphql'
import { useState } from 'react'

//흔히 대문자로 사용함
const CREATE_PRODUCT = gql`
  mutation createProduct($seller: String, $createProductInput: CreateProductInput!){
    createProduct(seller: $seller, createProductInput: $createProductInput) {
        _id
      number
      message
      }
  }
`

export default function GraphqlMutationPage() {
    const [seller, setSeller] = useState("")
    const [name, setName] = useState("")
    const [detail, setDetail] = useState("")
    const [price, setPrice] = useState(0)
    const [createProduct] = useMutation(CREATE_PRODUCT)

    const onClickGraphqlApi = async () => {
        const result = await createProduct({
            variables: {
                seller: seller,
                createProductInput: {
                    name: name,  //오른쪽꺼 -> 19번 파랭이
                    detail: detail, //오른쪽꺼 -> 20줄 파랭이
                    price: Number(price) //오른쪽꺼 -> 21줄 파랭이 // 문자열로 되니까 int형으로 바꿔줘야함
                }
            }
        })
        console.log("실행 됐다!",result)
        console.log(result.data.createProduct.message)
    }

    const onChangeSeller = (event) => {
        setSeller(event.target.value)
    }

    const onChangeName = (event) => {
        setName(event.target.value)
    }

    const onChangeDetail = (event) => {
        setDetail(event.target.value)
    }

    const onChangePrice = (event) => {
        setPrice(event.target.value)
    }


    return(
        <>
        {/* 원래는 br태그 대신 emotion 사용해 css 만들어 줄바꿈  */}
        판매자 : <input type="text" onChange={onChangeSeller}/><br />
        상품명 : <input type="text"onChange={onChangeName}/><br />
        상품상세설명 : <input type="text"onChange={onChangeDetail}/><br />
        상품가격 : <input type="text"onChange={onChangePrice}/><br />
        <button onClick={onClickGraphqlApi}>GraphQL-API 요청하기</button>
        </>
    )
}