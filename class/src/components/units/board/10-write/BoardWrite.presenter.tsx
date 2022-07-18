import { ChangeEvent } from 'react';
import * as S from './BoardWrite.styles'
import { IBoardWriteUIProps } from './BoardWrite.types';


export default function BoardWriteUI(props: IBoardWriteUIProps) {
  return (
    <>
      작성자 :{" "}
      <S.RedInput
        type="text"
        onChange={props.onChangeWriter}
        defaultValue={props.data?.fetchBoard.writer || ""} //데이터가 없을 수도 있기 때문에, 옵셔널 체이닝을 해줘야 함
      />
      <br />
      제목 :{" "}
      <input
        type="text"
        onChange={props.onChangeTitle}
        defaultValue={props.data?.fetchBoard.title || ""}
      />
      <br />
      내용 :{" "}
      <input
        type="text"
        onChange={props.onChangeContents}
        defaultValue={props.data?.fetchBoard.contents || ""}
      />
      <br />
      <S.RedButton
        qqq={props.myColor}
        onClick={props.isEdit ? props.onClickUpdate : props.onClickCreate}
      >
        {props.isEdit ? "수정하기" : "등록하기"}
      </S.RedButton>
    </>
  );
}

