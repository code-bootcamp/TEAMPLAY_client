import { createContext } from "react";
import ProfileProjectListUI from "./profileProjectList.presenter";
import { IPropsProfileProjectListContext } from "./profileProjectList.types";

export const ProfileProjectListContext = createContext<IPropsProfileProjectListContext>({})

export default function ProfileProjectList(){

    return(
        <ProfileProjectListUI/>
    )
}