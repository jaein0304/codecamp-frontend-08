// 타입스크립트옮기기

import { ChangeEvent } from "react";
import { IQuery } from "../../../../commons/types/generated/types";

export interface IBoardWriteProps {
  isEdit: boolean;
  // data?: any; //임시
  data?: Pick<IQuery, "fetchBoard">;
}

export interface IMyVariables {
  number: number;
  writer?: string; // ? 있을 수도 있고 없을 수도 있어
  title?: string;
  contents?: string;
}

export interface IBoardWriteUIProps {
  // 뭘 받을지 입략
  onClickCreate: () => void; // return 이 없다 -> void 타입
  onClickUpdate: () => void;
  onChangeWriter: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeTitle: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeContents: (event: ChangeEvent<HTMLInputElement>) => void;
  myColor: boolean;
  isEdit: boolean;
  data?: Pick<IQuery, "fetchBoard">;
}

export interface IRedButtonProps {
  qqq: boolean;
}
