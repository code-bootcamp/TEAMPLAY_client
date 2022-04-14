import {
  ChangeEvent,
  Dispatch,
  KeyboardEvent,
  MouseEvent,
  RefObject,
  SetStateAction,
} from "react";
import {
  IChat,
  IChatRoomMember,
} from "../../../../commons/types/generated/types";

export interface IChattingDetailContext {
  position?: number;
  isToggle?: boolean;
  userName?: string | undefined;
  message?: string;
  chatsArr?: IChat[];
  setUserName?: Dispatch<SetStateAction<string>>;
  onClickSetPosition?: () => void;
  onChangeChatInput?: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  onClickSendMessage?: (e: MouseEvent<HTMLDivElement>) => void;
}

export interface IPropsChattingDetailUI {
  ChattingBoxRef: RefObject<HTMLUListElement>;
  wrapperRef: RefObject<HTMLDivElement>;
  scrollRef: RefObject<HTMLDivElement>;
  roomName: string;
  onkeyPressEnter: (e: KeyboardEvent<HTMLTextAreaElement>) => void;
}

export interface ISidebarWrapper {
  position: number | undefined;
}

export interface ISideIsToggle {
  isToggle: boolean | undefined;
}

export interface IMessageData {
  chat: {
    chatRoom: string;
    content: string;
    createdAt: string;
    id: number;
    user: {
      career: string;
      createdAt: string;
      deletedAt: any;
      email: string;
      id: string;
      name: string;
      password: string;
      point: number;
    };
  };
  previousChat: {
    content: string;
    createdAt: string;
    id: number;
    user: {
      career: string;
      createdAt: string;
      deletedAt: any;
      email: string;
      id: string;
      name: string;
      password: string;
      point: number;
    };
  };
}

export interface IJoinMsg {
  career: string;
  createdAt: string;
  email: string;
  id: string;
  name: string;
  point: number;
}
// sidebar
export interface IPropsSidebarUI {
  isChoose: boolean;
  checkList: IChatRoomMember[];
  isCheck: string[];
  price: number | string | undefined;
  isSubmit: boolean;
  isSelf: boolean;
  onClickStartProject: () => void;
  onClickProjectSetting: () => void;
  onChangeCheckedUser: (data: IChatRoomMember) => () => void;
  onChangeSelectPrice: (e: ChangeEvent<HTMLSelectElement>) => void;
  onChangeInputPrice: (e: ChangeEvent<HTMLInputElement>) => void;
}

export interface IPropsSidebarSubmitBtn {
  isSubmit: boolean;
}

export interface ServerToClientEvents {
  noArg: () => void;
  basicEmit: (a: number, b: string, c: Buffer) => void;
  withAck: (d: string, callback: (e: number) => void) => void;
}

// chatHistory
export interface IPropsChatHistory {
  el: IChat;
  idx: number;
  chatsArr: IChat[];
}
