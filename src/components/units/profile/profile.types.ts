import { MouseEvent } from "react";

export interface IPropsProfileContext{
    left?: number;
    isVisble?: boolean;
    onClickProfileDetail?: (e: MouseEvent<HTMLSpanElement>) => void;
}