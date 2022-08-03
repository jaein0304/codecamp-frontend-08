import { atom } from "recoil";

export const isEditState = atom({
  key: "isEditState",
  default: false, // false : 등록하기, true : 수정하기
});

export const accessTokenState = atom({
  key: "accessTokenState",
  default: "", // 처음 토큰 초기 값 : 빈문자열
});
