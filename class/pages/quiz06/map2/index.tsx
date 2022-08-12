import Link from "next/link";
// import { useRouter } from "next/router";

export default function Map2Page() {
  // const router = useRouter();
  /*  const onClickMoveToMap1 = () => {
    router.push("quiz06/map1");
  }; */
  return (
    <Link href="/quiz06/map1">
      <a>이동하기</a>
    </Link>
  );
}
