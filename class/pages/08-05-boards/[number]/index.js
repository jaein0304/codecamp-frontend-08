//상세보기 /boards/new/[number]

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
  
  const onClickMoveToEdit = () => {
    router.push(`/08-05-boards/${router.query.number}/edit`)
  }

    return (
      <>
        <div>{router.query.number}번 게시글 이동이 완료되었습니다.</div>
        <div>
          작성자 : {data ? data.fetchBoard.writer : "받아오는 중입니다."}
        </div>
        <div>제목 : {data && data.fetchBoard.title}</div>
        <div>내용 : {data?.fetchBoard.contents}</div>
        <button onClick={onClickMoveToEdit}>수정하러 이동하기 </button>
      </>
    );
}