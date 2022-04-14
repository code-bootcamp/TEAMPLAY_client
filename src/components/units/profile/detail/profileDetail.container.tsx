import { createContext, useState, MouseEvent } from "react";
import { IPropsProfileContext } from "../profile.types";
import ProfileDetailUI from "./profileDetail.presenter";

export const ProfileContext = createContext<IPropsProfileContext>({})

export default function ProfileDetail(){
    const [isVisible, setIsvisible] = useState<string | null>("About me");
  // const [left, setLeft] = useState(0)

  const onClickProfileDetail = (e: MouseEvent<HTMLSpanElement>) => {
    setIsvisible(e.currentTarget.textContent);
  };
    return (
        <ProfileDetailUI 
            isVisible={isVisible} onClickProfileDetail={onClickProfileDetail}/>
        )
}