import { Fragment, useContext } from "react"
import Blank from "../../../../commons/blank/blank"
import { v4 as uuidv4 } from "uuid";
import { ProfileEditContext } from "../profileEdit.container"
import * as S from "./sidebar.styles"
import ClickTag from "../../../../commons/tags/commons/clickTag";
import SubmitBtn from "../../../../commons/button/Submit";

export default function ProfileEditTechnic() {
    const {
        area,
        technic,
        onClickPushTag, 
        onClickEditTechnic,
        onClickChangeTagButton
    } = useContext(ProfileEditContext)
    const list = [
        "Javascript",
        "Emotion",
        "Typescript",
        "React",
        "Next.js",
        "GraphQl",
        "Docker",
        "Logstash",
        "MySQL",
        "Kubernetes",
        "C+",
        "C++",
        "Python",
        "Java",
      ];

    return(
        <S.Wrapper area={area} className="TechnicBlank">
            <S.MainBox>
                <S.Header>
                    <S.RefreshBox>
                        <img src="/img/profile/refreshIcon.svg"/>
                        <span>초기화</span>    
                    </S.RefreshBox>
                    <S.XMark src="/img/preview/Xmark.svg" onClick={onClickEditTechnic}/>
                </S.Header>
                <div className="NoneBlank">
                    <Blank height={24} width={0}/>
                </div>
                <S.Title>
                    <span>사용 가능한 기술/언어</span>
                </S.Title>
                <div className="NoneBlank">
                    <Blank height={36} width={0}/>
                </div>
                <S.TagArea>
                    {list.map((name) =>(
                        <Fragment key={uuidv4()}>
                            <ClickTag 
                            name={name} 
                            marginBottom={16} 
                            isClick={technic && technic.includes(name) && true} 
                            onClick={onClickPushTag}/>
                        </Fragment>
                    ))}
                </S.TagArea>
                <S.BtnBox>
                    <SubmitBtn 
                        name="확인"
                        fontSize={1.143}
                        backgroundcolor="#3894FF"
                        onClick={onClickChangeTagButton} 
                        isActive={false}
                    />
                </S.BtnBox>
            </S.MainBox>
        </S.Wrapper>
    )
}