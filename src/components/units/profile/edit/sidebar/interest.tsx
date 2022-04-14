import { Fragment, useContext } from "react"
import Blank from "../../../../commons/blank/blank"
import { v4 as uuidv4 } from "uuid";
import { ProfileEditContext } from "../profileEdit.container"
import * as S from "./sidebar.styles"
import ClickTag from "../../../../commons/tags/commons/clickTag";
import SubmitBtn from "../../../../commons/button/Submit";

export default function ProfileEditInterest() {
    const {
        area,
        interest,
        onClickPushTag, 
        onClickEditInterest,
        onClickChangeTagButton
    } = useContext(ProfileEditContext)
    const list = [
        "건강/운동",
        "뷰티/패션",
        "이커머스",
        "금융",
        "공유서비스",
        "생산성",
        "소셜네트워크",
        "스포츠",
        "의료",
        "유틸리티",
        "뉴스",
        "어린이",
        "기타",
        "엔터테인먼트",
      ];

    return(
        <S.Wrapper area={area} className="InterestBlank">
            <S.MainBox>
                <S.Header>
                    <S.RefreshBox>
                        <img src="/img/profile/refreshIcon.svg"/>
                        <span>초기화</span>    
                    </S.RefreshBox>
                    <S.XMark src="/img/preview/Xmark.svg" onClick={onClickEditInterest}/>
                </S.Header>
                <div className="NoneBlank">
                    <Blank height={24} width={0}/>
                </div>
                <S.Title>
                    <span>관심있는 분야</span>
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
                            isClick={interest && interest.includes(name) && true} 
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