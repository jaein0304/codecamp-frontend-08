import {useRouter} from 'next/router'

export default function StaticRoutingBoardPage() {
    const router = useRouter()

    const onClickMove1 = () => {
        router.push("/05-06-static-routed-board-query/1") 
    }

    const onClickMove2 = () => {
        router.push("/05-06-static-routed-board-query/2") 
    }

    const onClickMove3 = () => {
        router.push("/05-06-static-routed-board-query/3") 
    }

    return (
        <>
        <button onClick={onClickMove1}>1페이지 이동하기</button>
        <button onClick={onClickMove2}>2페이지 이동하기</button>
        <button onClick={onClickMove3}>3페이지 이동하기</button>
        </>
        )
    
}