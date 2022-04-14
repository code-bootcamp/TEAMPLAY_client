import { ChangeEvent, Dispatch, SetStateAction } from "react";

export interface ISignUpContext {
  isAuth?: boolean;
  isEmail?: boolean;
  isEdit?: boolean;
  setIsAuth?: Dispatch<SetStateAction<boolean>>;
  setIsEmail?: Dispatch<SetStateAction<boolean>>;
  onChangeInput?: (key: string) => (e: ChangeEvent<HTMLInputElement>) => void;
}

export interface IPropsSignUp {
  isEdit: boolean;
}

export interface IPropsSignUpUI {
  passMsg: string;
  checkMsg: string;
  isEmail: boolean;
  isSubmit: boolean;
  onClickSubmit: () => void;
  onClickRequestPhoneAuth: () => void;
  onClickSendEmailToken: () => void;
  onClickCheckEmailToken: () => void;
  onChageCheckBox: (name: string) => () => void;
}

export interface IPropsAuth {
  name: string;
  placeHolder: string;
  onClickSendToken: () => void;
  onClickCheckToken: () => void;
}

export interface IPropsSignUpStyles {
  isEmail: boolean | undefined;
}

export interface IPropsValidBtn {
  isAuth: boolean | undefined;
}

export interface IPropsSignupName {
  isEdit: boolean | undefined;
}
