import { useMutation } from '@apollo/client'
import { useState } from 'react'
import BoardWriteUI from './BoardWrite.presenter'
import { CREATE_BOARD } from './BoardWrite.queries'


export default function BoardWrite() {
    const [writer, setWriter] = useState("")
    const [title, setTitle] = useState("")
    const [contents, setContents] = useState("")
    const [createBoard] = useMutation(CREATE_BOARD)

    const onClickGraphqlApi = async () => {
        const result = await createBoard({
          variables: { writer, title, contents }
        })
        console.log(result)
        console.log(result.data.createBoard.message)
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

    return (
        <>
            <div>안녕하세요</div>
            <BoardWriteUI 
            onClickGraphqlApi={onClickGraphqlApi} // const props = {aaa:onClickGraphqlApi} //키:밸류 이름 같게 설정 해줌 {onClickGraphqlApi:onClickGraphqlApi} 
            onChangeWriter={onChangeWriter} 
            onChangeTitle={onChangeTitle}
            onChangeContents={onChangeContents}/>   
        </>
        
        )
}