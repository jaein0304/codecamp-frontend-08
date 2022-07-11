import BoardWrite from "../../src/components/units/board/write/BoardWrite.container"

export default function GraphqlMutationPage() {

    return (
        <>
            {/* 한 타입에 너무 많은 코드를 넣으면, 유지보수하기 어려우므로 컨테이너에 적으며 여기는 70줄 이상이 되지 않게 한다 */}
            {/* 아래와 같은 버튼은 컴포넌트로 이동시켜야 함  */}
            {/* <button>버튼</button> */}
            <BoardWrite /> 
            
          
        </>
    )

}
