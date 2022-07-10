import { useQuery, gql } from '@apollo/client'
import { useRouter } from 'next/router'

const FETCH_BOARD = gql`
    query fetchBoard($number: ID!){
        fetchBoard(boardId: $boardId){
            _id
            writer
            title
            contents
        }  
    }
`

export default function StaticRoutedPage(){
    const router = useRouter() 

    const { data } = useQuery(FETCH_BOARD, { 
        variables: { boardId: router.query.DetailId }  //[ ]
    })

    console.log(data)

    return (
        <>
            <div>ㅁㄴㅇㅁㅇㅁㄴ</div>
        </>
    )
}