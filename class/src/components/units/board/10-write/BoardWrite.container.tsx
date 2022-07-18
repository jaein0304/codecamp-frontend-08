import { useMutation } from '@apollo/client'
import { useRouter } from 'next/router'
import { ChangeEvent, useState } from 'react'
import { IMutation, IMutationCreateBoardArgs, IMutationUpdateBoardArgs } from '../../../../commons/types/generated/types'
import BoardWriteUI from './BoardWrite.presenter'
import { CREATE_BOARD, UPDATE_BOARD } from './BoardWrite.queries'
import { IBoardWriteProps, IMyVariables} from './BoardWrite.types'



export default function BoardWrite(props: IBoardWriteProps) {
  //객체가 넘어가므로
  const router = useRouter();
  const [myColor, setMyColor] = useState(false);

  const [writer, setWriter] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  const [createBoard] = useMutation<Pick<IMutation, "createBoard">, IMutationCreateBoardArgs>(CREATE_BOARD);
  const [updateBoard] =
    useMutation<Pick<IMutation, "updateBoard">, IMutationUpdateBoardArgs>(UPDATE_BOARD);

  //등록
  /*createBoard(
writer: String
title: String
contents: String
): Return */
  const onClickCreate = async () => {
    const result = await createBoard({
      variables: { writer, title, contents },
    });
    console.log(result);
    console.log(result.data?.createBoard.message);
    router.push(`/10-01-typescript-boards/${result.data?.createBoard.number}`);
  };

  //수정
  const onClickUpdate = async () => {
  
    const myVariables: IMyVariables = { number: Number(router.query.number) }; // 넘버는 필수 !
    if (writer) myVariables.writer = writer; //  writer 가 있으면 writer 라는 키를 만들고 거기에 writer를 넣어주세요
    if (title) myVariables.title = title;
    if (contents) myVariables.contents = contents;

    const result = await updateBoard({ variables: myVariables });
    console.log(result);
    console.log(result.data?.updateBoard.message);
    router.push(`/10-01-typescript-boards/${result.data?.updateBoard.number}`); //
    //->result.data.updateBoard.number 로 해도 상관없음
  }; // 이미 넘버를 가지고 있기 때문에,

  

  const onChangeWriter = (event: ChangeEvent<HTMLInputElement>) => { //ChangeEvent: react에서 제공하는 함수 <현재쓰고있는태그>
    setWriter(event.target.value);
    if (event.target.value && title && contents) setMyColor(true);
    else setMyColor(false);
  };

  const onChangeTitle = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
    if (writer && event.target.value && contents) setMyColor(true);
    else setMyColor(false);
  };

  const onChangeContents = (event: ChangeEvent<HTMLInputElement>) => {
    setContents(event.target.value);
    if (writer && title && event.target.value) setMyColor(true);
    else setMyColor(false);
  };


  return (
    <>
      <div>안녕하세요</div>
      <BoardWriteUI
        onClickCreate={onClickCreate} // const props = {aaa:onClickGraphqlApi} //키:밸류 이름 같게 설정 해줌 {onClickGraphqlApi:onClickGraphqlApi}
        onClickUpdate={onClickUpdate}
        onChangeWriter={onChangeWriter}
        onChangeTitle={onChangeTitle}
        onChangeContents={onChangeContents}
        myColor={myColor}
        isEdit={props.isEdit}
        data={props.data} // 웨 number 에서 데이터 넘어갈때 props안해줬지 // 해줬넹..ㅎ
      />
    </>
  );
}