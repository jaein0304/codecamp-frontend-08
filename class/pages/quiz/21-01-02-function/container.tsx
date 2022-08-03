import Presenter from "./presenter";

// container 부분
export default function Container() {
  const child = { name: "철수", age: 13 };
  return <>{Presenter(child)}</>;
}
