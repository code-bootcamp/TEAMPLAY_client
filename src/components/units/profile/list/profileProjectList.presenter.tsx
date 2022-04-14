import useMoveToPage from "../../../commons/hooks/useMoveToPage";
import { v4 as uuidv4 } from "uuid";
import * as S from "./profileProjectList.styles";
import ProfileProgress from "./progress/profileProgress";
import ProfileDone from "./done/profileDone";

export default function ProfileProjectListUI() {
    const {moveToProfile} = useMoveToPage()

    return(
        <S.Wrapper>
            <div>
                <S.HeaderLine>
                    <img onClick={moveToProfile} src="/img/commons/leftArrow1.svg"/>
                    <span>나의 프로젝트</span>
                    <div></div>
                </S.HeaderLine>
                <S.ProgressTitle>
                    <span>진행 중인 프로젝트</span>
                </S.ProgressTitle>
                <S.ProgressList>
                    {new Array(3).fill(1).map((_) => {
                        return <ProfileProgress key={uuidv4()}/>
                    })}
                </S.ProgressList>
                <S.WebLine/>
                <S.ProgressTitle>
                    <span>완료된 프로젝트</span>
                </S.ProgressTitle>
                <S.ProgressList>
                    {new Array(4).fill(1).map((_) => {
                        return <ProfileDone key={uuidv4()}/>
                    })}
                </S.ProgressList>
            </div>
        </S.Wrapper>
    )
}