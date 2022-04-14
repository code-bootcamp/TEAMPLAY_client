import { Dispatch, SetStateAction } from "react";
import { IQuery } from "../../../../commons/types/generated/types";

export interface IPropsPreviewProject {
  data?: Pick<IQuery, "fetchProject">;
  setDetailModal: Dispatch<SetStateAction<boolean>>;
  detailId: string;
}

export interface IPropsPreviewProjectUI {
  data?: Pick<IQuery, "fetchProject">;
  day: number;
  setDetailModal: Dispatch<SetStateAction<boolean>>;
  onClickChatStart: () => void;
}
