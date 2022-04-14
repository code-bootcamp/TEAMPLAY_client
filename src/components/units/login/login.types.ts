import { ChangeEvent, KeyboardEvent } from "react";

export interface IPropsLoginUI {
  type: string;
  isView: boolean;
  onPressEnter: (e: KeyboardEvent<HTMLInputElement>) => void;
  onClickSetIsView: () => void;
  onChangeLoginInput: (
    name: string
  ) => (e: ChangeEvent<HTMLInputElement>) => void;
  onClickSubmitLogin: () => void;
}
