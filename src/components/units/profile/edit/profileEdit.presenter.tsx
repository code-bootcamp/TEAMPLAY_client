import Blank from "../../../commons/blank/blank";
import useMoveToPage from "../../../commons/hooks/useMoveToPage";
import * as S from "./profileEdit.styles";
import { useContext } from "react";
import RainbowTag from "../../../commons/tags/commons/rainbowTag";
import { ProfileEditContext } from "./profileEdit.container";
import SubmitBtn from "../../../commons/button/Submit";
import ProfileEditTendency from "./sidebar/tendency";
import ProfileEditPosition from "./sidebar/position";
import ProfileEditInterest from "./sidebar/interest";
import ProfileEditTechnic from "./sidebar/technic";

export default function ProfileEditUI(){
    const {moveToProfile} = useMoveToPage()
    const { 
        isTendency,
        isPosition,
        isInterest,
        isTechnic,
        // tagInputRef, 
        // onClickPushTag, 
        onClickEditTendency,
        onClickEditPosition,
        onClickEditInterest,
        onClickEditTechnic,
        onClickEditButton,
        onClickBasicInfoEdit
    } = useContext(ProfileEditContext)

    return(
        <div>
            <S.TopEditText>
                <span>기본정보를 수정합니다.</span>
            </S.TopEditText>
            <S.Wrapper>
                <div>
                    <S.FirstDiv>
                        <S.HeaderLine>
                            <img onClick={moveToProfile} src="/img/commons/leftArrow1.svg"/>
                            <span>나의 프로필 수정</span>
                            <div></div>
                        </S.HeaderLine>
                    </S.FirstDiv>
                    <S.SecondDiv>
                        <S.ImgBox>
                            <img src="/img/profile/imgUploadCamera.svg"/>
                        </S.ImgBox>
                        <Blank height={16} width={0}/>
                        <S.Name>
                            <span>제이든 님</span>
                        </S.Name>
                    </S.SecondDiv>
                    <S.ThirdDiv>
                        <Blank height={32} width={0}/>
                        <S.Tendency>
                            <span>나의 성향</span>
                        </S.Tendency>
                        <Blank height={12} width={0}/>
                        <S.TagArea>
                            <RainbowTag name="주도적인" marginBottom={0} backgroundColor={"#ccc"} onClick={undefined} id={""} />
                            <RainbowTag name="논리적인" marginBottom={0} backgroundColor={"#ccc"} onClick={undefined} id={""}/>
                            <RainbowTag name="톡톡튀는" marginBottom={0} backgroundColor={"#ccc"} onClick={undefined} id={""}/>
                                <S.EditTag onClick={onClickEditTendency}>+</S.EditTag>
                                {isTendency && <ProfileEditTendency />}
                        </S.TagArea>
                        <Blank height={24} width={0}/>
                        <S.Position>
                            <span>나의 포지션</span>
                        </S.Position>
                        <Blank height={12} width={0}/>
                        <S.TagArea>
                            <RainbowTag name="개발자" marginBottom={0} backgroundColor={"#ccc"} onClick={undefined} id={""} />
                                <S.EditTag onClick={onClickEditPosition}>+</S.EditTag>
                                {isPosition && <ProfileEditPosition/>}
                        </S.TagArea>
                        <Blank height={24} width={0}/>
                        <S.Interest>
                            <span>관심있는 분야</span>
                        </S.Interest>
                        <Blank height={12} width={0}/>
                        <S.TagArea>
                            <RainbowTag name="공유서비스" marginBottom={0} backgroundColor={"#ccc"} onClick={undefined} id={""} />
                            <RainbowTag name="소셜네트워크" marginBottom={0} backgroundColor={"#ccc"} onClick={undefined} id={""} />
                                <S.EditTag onClick={onClickEditInterest}>+</S.EditTag>
                                {isInterest && <ProfileEditInterest/>}
                        </S.TagArea>
                        <Blank height={24} width={0}/>
                        <S.Technic>
                            <span>사용 가능한 기술/언어</span>
                        </S.Technic>
                        <Blank height={12} width={0}/>
                        <S.TagArea>
                            <RainbowTag name="Javascript" marginBottom={0} backgroundColor={"#ccc"} onClick={undefined} id={""} />
                            <RainbowTag name="Java" marginBottom={0} backgroundColor={"#ccc"} onClick={undefined} id={""} />
                                <S.EditTag onClick={onClickEditTechnic}>+</S.EditTag>
                                {isTechnic && <ProfileEditTechnic/>}
                        </S.TagArea>
                    </S.ThirdDiv>
                </div>
                    <S.BtnBox>
                        <div className="SubmitBtn">
                            <SubmitBtn
                                name="프로필 수정하기"
                                fontSize={1.143}
                                backgroundcolor="#3894FF"
                                onClick={onClickEditButton} isActive={false}
                            />
                        </div>
                        <Blank height={12} width={0}/>
                        <S.InfoEdit>
                            <span onClick={onClickBasicInfoEdit}>기본정보 수정하기</span>
                        </S.InfoEdit>
                    </S.BtnBox>
            </S.Wrapper>
        </div>
    )
}
