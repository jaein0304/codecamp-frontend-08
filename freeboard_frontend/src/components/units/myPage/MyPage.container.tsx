import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import MyPageUI from "./MyPage.presenter";
import { FETCH_USER_LOGGED_IN } from "./MyPage.queries";

export default function MyPage() {
  const router = useRouter();
  const { data } = useQuery(FETCH_USER_LOGGED_IN);
  const onClickPoint = () => {
    router.push("./myPoint");
  };

  const onClickArrow = () => {
    router.push("/mainpage");
  };

  return (
    <MyPageUI
      data={data}
      onCLickPoint={onClickPoint}
      onClickArrow={onClickArrow}
    />
  );
}
