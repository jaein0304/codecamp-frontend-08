import Presenter from "./presenter";

// container 부분
export default function Container() {
  const child = { temp: "철수" };
  return <>{Presenter(child)}</>;
}
