import { useMutation, gql } from '@apollo/client'
import { useRouter } from 'next/router'
import { useState } from 'react'

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
    const router = useRouter()
    const [writer, setWriter] = useState("")
    const [title, setTitle] = useState("")
    const [contents, setContents] = useState("")
    const [createBoard] = useMutation(CREATE_BOARD)

    const onClickGraphqlApi = async () => {
        try {
        const result = await createBoard({
            variables: {
                writer: writer, //이름만 같지 다른 것 앞에가 달러 
                title: title,
                contents: contents
            }
        }) //await 없으면 promise 
        //router.push("/05-08-dynamic-routed-board-query/" + result(data.createBoard.number))
        router.push(`/05-08-dynamic-routed-board-query/${result(data.createBoard.number)}` ) //템플릿 리터럴(Template Literal)
        console.log(result.data.createBoard.number)
        console.log(result.data.createBoard.message)
    } catch(error) {
        console.log(error.message)
        alert("실패")
    }
    }

    const onChangeWriter = (event) => {
        setWriter(event.target.value)
    }

    const onChangeTitle= (event) => {
        setTitle(event.target.value)
    }
    const onChangeContents= (event) => {
        setContents(event.target.value)
    }

    return(
        <>
        {/* 원래는 br태그 대신 emotion 사용해 css 만들어 줄바꿈  */}
        작성자 : <input type="text" onChange={onChangeWriter}/><br />
        제목 : <input type="text"onChange={onChangeTitle}/><br />
        내용 : <input type="text"onChange={onChangeContents}/><br />
        <button onClick={onClickGraphqlApi}>GraphQL-API 요청하기</button>
        </>
    )
}
