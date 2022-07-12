import { useMutation } from '@apollo/client'
import { useState } from 'react'
import BoardWriteUI from './BoardWrite.presenter'
import { CREATE_BOARD } from './BoardWrite.queries'


export default function BoardWrite() {
    // const myColor = "yellow"
    // const [myColor, setMyColor] = useState("green")
    // const [myColor, setMyColor] = useState(true) //색이 있니 없니  
    const [myColor, setMyColor] = useState(false)

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
        if(event.target.value && title && contents) 
            setMyColor(true)
        else
            setMyColor(false)
    }

    const onChangeTitle= (event) => {
        setTitle(event.target.value)
        if(writer && event.target.value  && contents) 
            setMyColor(true)
        else
            setMyColor(false)
    }

    const onChangeContents= (event) => {
        setContents(event.target.value)
        if(writer && title && event.target.value) 
            setMyColor(true)
        else
            setMyColor(false)
    }

    //내꺼 
    const onChangeButton = () => {
      if (writer && title && contents) { 
            onClickGraphqlApi(true)
            setMyColor(true);
      }
            
      else {
            onClickGraphqlApi(false)
            setMyColor(false);
        }
    };

    //내꺼, 다 안쓰고 한꺼번에 점검하는 함수는 없나?..ing
    const onChangeButton2 = (event) => {
        if(onChangeWriter(event.target.value) && onChangeTitle(event.target.value) && onChangeButton(event.target.value))
            setMyColor(true)
    }
   
   
    return (
        <>
            <div>안녕하세요</div>
            <BoardWriteUI 
            onClickGraphqlApi={onClickGraphqlApi} // const props = {aaa:onClickGraphqlApi} //키:밸류 이름 같게 설정 해줌 {onClickGraphqlApi:onClickGraphqlApi} 
            onChangeWriter={onChangeWriter} 
            onChangeTitle={onChangeTitle}
            onChangeContents={onChangeContents}
            onChangeButton={onChangeButton}
            myColor={myColor}
            />   
        </>
        
        )
}