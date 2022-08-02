import { atom } from "recoil";

export const isEditState = atom({
  key: "isEditState",
  default: false, // false : 등록하기, true : 수정하기
});
