import { useRouter } from "next/router";
import LayoutBodyUI from "./LayoutBody.presenter";

export default function LayoutBody() {
  const router = useRouter();

  const onClickLogo = () => {
    router.push("/boards");
  };

  return <LayoutBodyUI onClickLogo={onClickLogo} />;
}
