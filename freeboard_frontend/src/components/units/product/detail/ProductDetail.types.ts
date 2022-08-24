import { IQuery } from "../../../../commons/types/generated/types";
export interface IProductDetailUIProps {
  // isEdit: any;
  data?: Pick<IQuery, "fetchUseditem">;
  onClickDelete: () => Promise<void>;
  onClickMoveToEdit: () => void;
  onClickBuy: () => void;
  onClickPick: () => Promise<void>;
}
