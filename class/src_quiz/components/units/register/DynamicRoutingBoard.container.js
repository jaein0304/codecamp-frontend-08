import { CREATE_BOARD } from './DynamicRoutingBoard.query'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { useMutation } from '@apollo/client'
import DynamicRoutingUI from './DynamicRoutingBoard.presenter'

export default function DynamicRouting() {
    const router = useRouter()
    const [myColor, setMyColor] = useState(false);

    const [writer, setWriter] = useState("")
    const [title, setTitle] = useState("")
    const [contents, setContents] = useState("")
    const [createBoard] = useMutation(CREATE_BOARD)

    //test
    const [test, setMyTest] = useState(false)
    const [register, setMyRegister] = useState(false)

    //function
   

    const onClickGraphqlApi = async () => {
        try {
        const result = await createBoard({
            variables: { writer, title, contents}
        }) 
        //router.push(`/05-08-dynamic-routed-board-query/${result.data.createBoard.number}` ) //템플릿 리터럴(Template Literal)
        router.push(`/quiz/06-02-props-query/${result.data.createBoard.number}` ) //템플릿 리터럴(Template Literal)
        console.log(result.data.createBoard.number)
        console.log(result.data.createBoard.message)
    } catch(error) {
        console.log(error.message)
        alert("실패")
    }
}
    //++
    // const onTest = (event) => {
    //     setMyTest(event.target.value)
    //     if(writer !== "" && title !=="" && contents !=="") {
    //         setMyTest(true)
    //     }
    // }

    //공백 시 버튼 비활성화 
    const onRegister = (event) => {
        setMyRegister(event.target.value)
        if(writer !== "" && title !=="" && contents !=="") {
            onClickGraphqlApi(true)
        }
    }

    const onChangeWriter = (event) => {
        setWriter(event.target.value)
         if (event.target.value && title && contents) setMyColor(true);
         else setMyColor(false);
      
    }

    const onChangeTitle= (event) => {
        setTitle(event.target.value)
         if (writer && event.target.value && contents) setMyColor(true);
         else setMyColor(false);
    }

    const onChangeContents= (event) => {
        setContents(event.target.value)
        if (writer && title && event.target.value) setMyColor(true);
        else setMyColor(false);
    }

     return (
       <DynamicRoutingUI
         onClickGraphqlApi={onClickGraphqlApi}
         onChangeWriter={onChangeWriter}
         onChangeTitle={onChangeTitle}
         onChangeContents={onChangeContents}
         Register={onRegister}
         myColor={myColor}
       />
     );
}