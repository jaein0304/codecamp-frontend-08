import { useRouter } from "next/router"
export default function BoardDetailPage() {
  const router = useRouter()
  return <div>게시글 상세페이지. 게시글 ID : {router.query.boardId} </div>
}
