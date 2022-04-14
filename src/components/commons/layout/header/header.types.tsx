import { MouseEvent } from "react";

export interface IPropsHeaderUI {
  isHiddenNav: boolean;
}

export interface IPropsHeaderBox {
  isHiddenHeader: string[];
  isHiddenHeaderWeb: string[];
  asPath: string;
}

export interface IPropsFooterBox {
  isHiddenFooterWeb: string[];
  asPath: string;
}

export interface IPropsHeaderToggleWrapper {
  position: number | undefined;
  isView: boolean | undefined;
}

export interface IHeaderContext {
  position?: number;
  isView?: boolean;
  isPoint?: boolean;
  onCliclsetPosition?: () => void;
  onClickLogout?: () => void;
  onClickPointModal?: () => void;
  onClickMovetoPage?: (name: string) => () => void;
  onClickHeaderRouting?: (e: MouseEvent<HTMLLIElement>) => void;
}
