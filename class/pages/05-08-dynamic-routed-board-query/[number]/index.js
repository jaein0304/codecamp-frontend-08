import { useQuery, gql } from '@apollo/client'
import { useRouter } from 'next/router'

const FETCH_BOARD = gql`
    query fetchBoard($number: Int){
        fetchBoard(number: $number){
            number
            writer
            title
            contents
        }  
    }
`

export default function StaticRoutedPage(){
    const router = useRouter() 
    const { data } = useQuery(FETCH_BOARD, { 
        variables: { number: Number(router.query.number) }  //문자열이기 때문에 숫자로 변환해줘야함 
    })

    console.log(data)

    return (
        <>
            <div>{router.query.number}번 게시글 이동이 완료되었습니다.</div>
        </>
    )
}