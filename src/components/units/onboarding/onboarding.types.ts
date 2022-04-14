import { ChangeEvent, KeyboardEvent, RefObject } from "react";
import { IQuery } from "../../../commons/types/generated/types";

export interface IPropsOnBoardingContext {
  left?: number;
  career?: string;
  tendency?: string[];
  position?: string;
  interest?: string[];
  isAdd?: boolean;
  colorIndex?: number[];
  tagInputRef?: RefObject<HTMLInputElement>;
  tendencyData?: Pick<IQuery, "fetchTendencys"> | undefined;
  positionData?: Pick<IQuery, "fetchPositions"> | undefined;
  typeData?: Pick<IQuery, "fetchTypes"> | undefined;
  onClickChageInput?: () => void;
  onChangeTagInput?: (e: ChangeEvent<HTMLInputElement>) => void;
  onKeyPressEnter?: (e: KeyboardEvent<HTMLInputElement>) => void;
  onClickMoveToNext?: () => void;
  onClickMoveToPrev?: () => void;
  onClickSubmit?: () => void;
  onClickPushTag?: (name: string) => () => void;
  onClickDeleteTag?: (name: string) => () => void;
}

export interface IPropsOnBoardingUIWrapper {
  left: number | undefined;
}

export interface IPropsTag {
  bgColor: string;
}

export interface IUpdateUserOnboardInput {
  career: string;
  tendencyId: string[];
  positionId: string[];
  typeId: string[];
}
