import * as S from "../profileProjectList.styles";
import projectProgressListDummy from '../../../../../commons/json/projectProgressList.json'
import CircleTag from "../../../../commons/tags/commons/circleTag";
import SquareTag from "../../../../commons/tags/commons/squareTag";

export default function ProfileDone() {
    const tempData = projectProgressListDummy

    return(
        <S.DoneWrapper>
            <S.ProgressBox>
                <S.ProgressHeader>
                    <S.HeaderLeftBox>
                        <S.TagBox>
                            <div>
                                <CircleTag 
                                    name={tempData.projectProgressList.progress[0].redruitDate}
                                    size={0.555}
                                    bgColor="#595959"
                                    margin={10}
                                />
                                <SquareTag 
                                    name={tempData.projectProgressList.progress[0].types}
                                    size={0.555}
                                    bgColor="#c4c4c4"
                                />
                            </div>
                        </S.TagBox>
                        <S.ProjectTitleDate>
                            <div>{tempData.projectProgressList.progress[0].title}</div>
                            <span>{tempData.projectProgressList.progress[0].dueDate}</span>
                        </S.ProjectTitleDate>
                    </S.HeaderLeftBox>
                    <S.HeaderRigthBox>
                        <img src="/img/profile/ProjectListImg.svg"/>
                    </S.HeaderRigthBox>
                </S.ProgressHeader>
                <S.PercentBox>
                    <S.ProgressPercent>23%</S.ProgressPercent>
                </S.PercentBox>
                <S.Memberbox>
                    <li>
                        <S.MemberPosition>팀장</S.MemberPosition>
                        <S.MemberInfoValue>
                            {tempData.projectProgressList.progress[0].leader}
                        </S.MemberInfoValue>
                    </li>
                    <li>
                        <S.MemberPosition>팀원</S.MemberPosition>
                        <S.MemberInfoValue>
                            {tempData.projectProgressList.progress[0].member}
                        </S.MemberInfoValue>
                    </li>
                </S.Memberbox>
            </S.ProgressBox>
        </S.DoneWrapper>
    )
}