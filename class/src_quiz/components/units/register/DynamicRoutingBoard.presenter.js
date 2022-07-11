import * as Routing_S from './DynamicRoutingBoard.styles'

export default function DynamicRoutingUI(props) {
    return (
        <>
        {/* 작성자 : <input type="text" onChange={props.onChangeWriter}/><br />
        제목 : <input type="text"onChange={props.onChangeTitle}/><br />
        내용 : <input type="text"onChange={props.onChangeContents}/><br />
        <button onClick={props.onClickGraphqlApi}>GraphQL-API 요청하기</button> */}

        <Routing_S.Wrapper>
            작성자  <Routing_S.BlackInput type="text" onChange={props.onChangeWriter}/><br />
            제목  <Routing_S.BlackInput type="text"onChange={props.onChangeTitle}/><br />
            내용  <Routing_S.BlackInput type="text"onChange={props.onChangeContents}/><br />
            <Routing_S.LavenderButton onClick={props.Register}>비활성화 버튼</Routing_S.LavenderButton>
        </Routing_S.Wrapper>
        </>
    )
}