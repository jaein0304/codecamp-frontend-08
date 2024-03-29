import * as S from "./BoardWrite.styles";

export default function BoardWriteUI(props) {
  return (
    <>
      작성자 : <S.RedInput type="text" onChange={props.onChangeWriter} />
      <br />
      제목 : <input type="text" onChange={props.onChangeTitle} />
      <br />
      내용 : <input type="text" onChange={props.onChangeContents} />
      <br />
      {/* <S.RedButton qqq="yellow" onClick={props.onClickGraphqlApi}>GraphQL-API 요청하기</S.RedButton> */}
      {/* <S.RedButton qqq={myColor} onClick={props.onClickGraphqlApi}>GraphQL-API 요청하기</S.RedButton> */}
      {/* <S.RedButton qqq={props.myColor} onClick={props.onChangeButton}>GraphQL-API 요청하기</S.RedButton> */}
      <S.RedButton qqq={props.myColor} onClick={props.onClickGraphqlApi}>
        GraphQL-API 요청하기
      </S.RedButton>
    </>
  );
}
