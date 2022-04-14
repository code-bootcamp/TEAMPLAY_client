import { RefObject } from "react";

export interface IPropsProfileEditContext{
    isvisible?: ""
    tendency?: string[];
    position?: string;
    interest?: string[];
    technic?: string[];
    isAdd?: boolean;
    isOk?: boolean
    isTendency?: boolean
    isPosition?: boolean
    isInterest?: boolean
    isTechnic?: boolean
    area?: number
    tagInputRef?: RefObject<HTMLInputElement>;
    onClickChangeInput?: () => void;
    onClickPushTag?: (name: string) => () => void;
    onClickEditTendency?: () => void
    onClickEditPosition?: () => void
    onClickEditInterest?: () => void
    onClickEditTechnic?: () => void
    onClickBasicInfoEdit?: () => void
    // onClickEditTag?: () => void
    onClickDeleteTendencyTag?: (name: string) => () => void
    onClickDeletePositionTag?: () => void
    onClickDeleteInterestTag?: (name: string) => () => void
    onClickDeleteTechnicTag?: (name: string) => () => void
    onClickEditButton?: () => void
    onClickChangeTagButton?: () => void;
}

export interface IPropsTag {
    bgColor: string;
    // color: string[];
}

export interface ISidebarWrapper {
    area: number | undefined;
}