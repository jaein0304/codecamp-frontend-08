import { useMutation, gql } from '@apollo/client'

//흔히 대문자로 사용함
const CREATE_BOARD = gql`
mutation createBoard($writer: String, $title: String, $contents: String) { 
    createBoard(writer: $writer, title: $title, contents: $contents) {
        _id
        number
        message
    }
}
`

export default function GraphqlMutationPage() {
    const [createBoard] = useMutation(CREATE_BOARD)

    const onClickGraphqlApi = async () => {
        const result = await createBoard({
            variables: {
                writer: "철수",
                title: "안녕하세요",
                contents: "반갑습니다"
            }
        }) //await 없으면 promise 
        console.log(result)
        console.log(result.data.createBoard.message)
    }


    return(
        <button onClick={onClickGraphqlApi}>GraphQL-API 요청하기</button>
    )
}