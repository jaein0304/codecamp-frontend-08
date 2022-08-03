import { atom, useRecoilState } from "recoil";
export const isEditState = atom({ key: "isEditState", default: false });
export default function BoardWrite() {
  const [isEdit, setIsEdit] = useRecoilState(isEditState);
  return <h1>{isEdit ? "수정하기" : "등록하기"}</h1>;
}
