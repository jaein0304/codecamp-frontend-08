import { useRouter } from "next/router";

export default function StaticRoutingPage() {
  const router = useRouter();

  const onClickMove = () => {
    router.push("/05-02-static-routed"); // http://localhost:3000 생략가능, 앞에 '/'는 남기기
  };

  return <button onClick={onClickMove}>페이지 이동하기</button>;
}
