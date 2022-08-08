import { useRouter } from "next/router";
import { MouseEvent } from "react";
import { useRecoilState } from "recoil";
import { visitedPageState } from "../../../commons/store";

export function useMoveToPage() {
  const router = useRouter();
  const [visitedPage, setVisitedPage] = useRecoilState(visitedPageState);
  const onClickMoveToPage =
    (path: string) => (event: MouseEvent<HTMLElement>) => {
      setVisitedPage(path); // 이동할 페이지를 setVisitedPage에 넣어주기, 방문 페이지를 계속 추적할 수 있음
      router.push(path);
    };
  return {
    onClickMoveToPage,
  };
}
