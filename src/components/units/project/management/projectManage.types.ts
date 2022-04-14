import { SetStateAction,Dispatch } from 'react';

export interface IPropsProjectManage {
    project?: string;
  }
  
  export interface IProjectManagement{
    onClickBoardAdd?: () => void
    setContent?:Dispatch<SetStateAction<string>>
    setTitle?:Dispatch<SetStateAction<string>>
    setOnAdd?:Dispatch<SetStateAction<boolean>> | undefined
    setOnUpdate?:Dispatch<SetStateAction<boolean>> | undefined
    validContent?:boolean
    validTitle?:boolean
    title?:string
    content?:string
    setValidTitle?:Dispatch<SetStateAction<boolean>> | undefined,
    setValidContent?:Dispatch<SetStateAction<boolean>> | undefined
  }
  