import { ApolloQueryResult, OperationVariables } from "@apollo/client";
import { ChangeEvent } from "react";
import { IQuery } from "../../../commons/types/generated/types";

export interface ILoginUIProps {
  onChangeEmail: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickLogin: () => Promise<void>;
  refetch: (
    variables?: Partial<OperationVariables> | undefined
  ) => Promise<ApolloQueryResult<Pick<IQuery, "fetchUserLoggedIn">>>;
}
