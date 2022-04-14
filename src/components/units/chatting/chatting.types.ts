import { Dispatch, SetStateAction } from "react";
import { IQuery } from "../../../commons/types/generated/types";

export interface IPropsChattingUIWrapper {
  left: number | undefined;
}

export interface IChattingContext {
  left?: number;
  chatRoomId?: string;
  roomMembers?: Pick<IQuery, "fetchChatRoomMembers">;
  setLeft?: Dispatch<SetStateAction<number>>;
  onClickChangePosition?: () => void;
  onClickSetRoomId?: (_id: string) => () => void;
}
