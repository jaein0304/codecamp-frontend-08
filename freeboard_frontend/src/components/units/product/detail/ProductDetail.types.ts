import { IQuery } from "../../../../commons/types/generated/types";
import { MouseEvent } from "react";
export interface IProductDetailUIProps {
  data?: Pick<IQuery, "fetchUseditem">;
  onClickDelete: () => Promise<void>;
}
