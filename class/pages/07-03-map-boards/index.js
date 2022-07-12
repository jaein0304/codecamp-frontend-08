import { useQuery, gql } from '@apollo/client'
import styled from '@emotion/styled'

const FETCH_BOARDS = gql` 
    query fetchBoards{
        fetchBoards{
            number
            writer
            title
            contents
        }  
    }
`
const Row = styled.div`
    display : flex;
    flex-direction: row;
    align-items: center;
`

const Column = styled.div`
    width: 25%;
`


export default function MapFruitsPage(){
    // const router = useRouter()  // 특정 게시글을 가지고 오는게 아니니까 지워도댐 (목록보기) 
    const { data } = useQuery(FETCH_BOARDS) // 목록 보는 거니까 뒤에 s 붙임 // 데이터 안에 이미 배열로 10개가 들어가있음

    console.log(data)

    return (
        <>
        {/* {data.fetchBoards} //이렇게 하면 오류난다했었음  */}
            {data?.fetchBoards.map(el => (
                <Row>
                    <Column><input type="checkbox" /></Column>
                    <Column>{el.number}</Column>
                    <Column>{el.writer}</Column>
                    <Column>{el.title}</Column>
                </Row>
            ))}
        </>
    )
}