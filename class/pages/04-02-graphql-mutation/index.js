import { useMutation, gql } from '@apollo/client'

//흔히 대문자로 사용함
const CREATE_BOARD = gql`
mutation{
    createBoard(writer:"철수", title:"제목입니다~~", contents:"내용이에요!!!"){
        _id
        number
        message
    }
}
` //하드코딩

export default function GraphqlMutationPage() {
    const [createBoard] = useMutation(CREATE_BOARD)

    const onClickGraphqlApi = async () => {
        const result = await createBoard() //await 없으면 promise 
        console.log(result)
        console.log(result.data.createBoard.message)
    }


    return(
        <button onClick={onClickGraphqlApi}>GraphQL-API 요청하기</button>
    )
}