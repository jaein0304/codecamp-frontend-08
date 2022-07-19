import * as RoutingS from "./DynamicRoutingBoard.styles";

export default function DynamicRoutingUI(props) {
  return (
    <>
      {/* 작성자 : <input type="text" onChange={props.onChangeWriter}/><br />
        제목 : <input type="text"onChange={props.onChangeTitle}/><br />
        내용 : <input type="text"onChange={props.onChangeContents}/><br />
        <button onClick={props.onClickGraphqlApi}>GraphQL-API 요청하기</button> */}

      <RoutingS.Wrapper>
        작성자{" "}
        <RoutingS.BlackInput type="text" onChange={props.onChangeWriter} />
        <br />
        제목 <RoutingS.BlackInput type="text" onChange={props.onChangeTitle} />
        <br />
        내용{" "}
        <RoutingS.BlackInput type="text" onChange={props.onChangeContents} />
        <br />
        <RoutingS.LavenderButton color={props.myColor} onClick={props.Register}>
          비활성화 버튼
        </RoutingS.LavenderButton>
      </RoutingS.Wrapper>
    </>
  );
}
