//임포트 1.
// import { RedInput, RedButton } from "./BoardWrite.styles"

// export default function BoardWriteUI(props) {
//     return (
//         <>
//             작성자 : <RedInput type="text" onChange={props.onChangeWriter}/><br />
//             제목 : <input type="text"onChange={props.onChangeTitle}/><br />
//             내용 : <input type="text"onChange={props.onChangeContents}/><br />
//             <RedButton onClick={props.onClickGraphqlApi}>GraphQL-API 요청하기</RedButton>
//         </>
//     )
// }

//임포트 2.
import * as S from './BoardWrite.styles'

export default function BoardWriteUI(props) {
    return (
        <>
            작성자 : <S.RedInput type="text" onChange={props.onChangeWriter}/><br />
            제목 : <input type="text"onChange={props.onChangeTitle}/><br />
            내용 : <input type="text"onChange={props.onChangeContents}/><br />
            <button onClick={props.onClickGraphqlApi}>GraphQL-API 요청하기</button>
        </>
    )
}


//임포트 3.
// import S, {RedInput} from './BoardWrite.styles'
// // import { RedInput, RedButton } from "./BoardWrite.styles"

// export default function BoardWriteUI(props) {
//     return (
//         <>
//             작성자 : <RedInput type="text" onChange={props.onChangeWriter}/><br />
//             제목 : <input type="text"onChange={props.onChangeTitle}/><br />
//             내용 : <input type="text"onChange={props.onChangeContents}/><br />
//             <S.RedButton onClick={props.onClickGraphqlApi}>GraphQL-API 요청하기</RedButton>
//         </>
//     )
// }