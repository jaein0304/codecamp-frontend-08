import { useRouter } from "next/router";
import MyPageUI from "./MyPage.presenter";

export default function MyPage() {
  const router = useRouter();
  const onCLickPoint = () => {
    router.push("./myPoint");
  };
  return <MyPageUI onCLickPoint={onCLickPoint} />;
}
