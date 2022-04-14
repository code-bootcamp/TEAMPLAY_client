import { useRouter } from "next/router";
import { MouseEventHandler } from "react";
import useMoveToPage from "../../../commons/hooks/useMoveToPage";
import CircleTag from "../../../commons/tags/commons/circleTag";
import AboutMe from "./AboutMe";
import * as S from  "./profileDetail.styles";

export interface IPropsProfileDetail {
    isVisible: string
    onClickProfileDetail: MouseEventHandler<HTMLSpanElement> | undefined;
}

export default function ProfileDetailUI(props: IPropsProfileDetail){
    const router = useRouter()
    const { moveToProfileEdit } = useMoveToPage();

    const onClickMoveToProjectList = () => {
        router.push('/profile/list')
    }
    return(
    <>
        <S.Wrapper>
           <S.WrapperHeader>
               <S.HeaderLine>
                   <img className="Arrow" src="/img/commons/leftArrow1.svg"/>
                   <span>상세프로필</span>
                   <img className="Gear" onClick={moveToProfileEdit} src="/img/commons/settingGear.svg"/>
               </S.HeaderLine>
               <S.HeaderContents>
                <S.ImgBox>
                    <img src="/img/임시사진.png" />
                </S.ImgBox>
                <S.InfoBox>
                    <S.Name>
                        <span>제이든</span>
                    </S.Name>
                    <S.Position>
                        <span>iOS 개발자 </span>
                        <img src="/img/location.svg" />
                        <span>경기도 하남</span>
                    </S.Position>
                    <S.Tag>
                        <CircleTag name="꼼꼼한" size={1.1} bgColor="#FBE184" margin={10} />
                        <CircleTag name="냉철한" size={1.1} bgColor="#3D99FF" margin={10} />
                        <CircleTag name="친절한" size={1.1} bgColor="#FBCFCF" margin={10} />
                    </S.Tag>
                </S.InfoBox>
               </S.HeaderContents>
               {/* <div className="WebAboutMe"> */}
                <S.WebAboutMe>
                    <AboutMe/>
                </S.WebAboutMe>
               {/* </div> */}
            </S.WrapperHeader>
            <S.LineBox>
                <S.Detail>
                    <span onClick={props.onClickProfileDetail}>About me</span>
                    <span onClick={props.onClickProfileDetail}>Project</span>
                </S.Detail>
            </S.LineBox>
        </S.Wrapper>

        <S.NoneWebVisible>
        {props.isVisible === "About me" ? 
            <S.WebBottomAboutme>
                <AboutMe/>
            </S.WebBottomAboutme> 
        : props.isVisible === "Project" && 
            <div>
                <S.WebProject>
                    <span>Project</span>
                </S.WebProject>
                <S.ProjectWrapper>
                    <S.Header>
                        <img onClick={onClickMoveToProjectList} src="/img/profile/progressDone.svg"/>
                    </S.Header>
                    <S.ProjectBox>
                        <S.ProjectImgItem>
                            <img src="/img/contents01.jpg"/>
                            <img src="/img/contents02.jpg"/>
                            <img src="/img/contents03.jpg"/>
                            <img src="/img/contents04.jpg"/>
                            <img src="/img/contents05.png"/>
                            <img src="/img/contents06.png"/>
                            <img src="/img/contents01.jpg"/>
                            <img src="/img/contents02.jpg"/>
                            <img src="/img/contents03.jpg"/>
                            <img src="/img/contents04.jpg"/>
                            <img src="/img/contents05.png"/>
                            <img src="/img/contents06.png"/>
                            <img src="/img/contents01.jpg"/>
                            <img src="/img/contents02.jpg"/>
                            <img src="/img/contents04.jpg"/>
                            <img src="/img/contents05.png"/>
                        </S.ProjectImgItem>    
                    </S.ProjectBox>
                </S.ProjectWrapper> 
            </div>
        }
        </S.NoneWebVisible>

        <S.WebVisible>
            <div>
                <S.WebProject>
                    <span>Project</span>
                </S.WebProject>
                <S.ProjectWrapper>
                    <S.Header>
                        <img onClick={onClickMoveToProjectList} src="/img/profile/progressDone.svg"/>
                    </S.Header>
                    <S.ProjectBox>
                        <S.ProjectImgItem>
                            <img src="/img/contents01.jpg"/>
                            <img src="/img/contents02.jpg"/>
                            <img src="/img/contents03.jpg"/>
                            <img src="/img/contents04.jpg"/>
                            <img src="/img/contents05.png"/>
                            <img src="/img/contents06.png"/>
                            <img src="/img/contents01.jpg"/>
                            <img src="/img/contents02.jpg"/>
                            <img src="/img/contents03.jpg"/>
                            <img src="/img/contents04.jpg"/>
                            <img src="/img/contents05.png"/>
                            <img src="/img/contents06.png"/>
                            <img src="/img/contents01.jpg"/>
                            <img src="/img/contents02.jpg"/>
                            <img src="/img/contents04.jpg"/>
                            <img src="/img/contents05.png"/>
                        </S.ProjectImgItem>    
                    </S.ProjectBox>
                </S.ProjectWrapper> 
            </div>
        </S.WebVisible>
    </>
    )
}