import * as S from  "./profileDetail.styles";
import ClickTag from "../../../commons/tags/commons/clickTag";

export default function AboutMe(){
    return(
        <S.AboutMeWrapper>
            <S.Top>
                <S.TopHeader>
                    <span>관심있는 분야</span>
                </S.TopHeader>
                <S.TopTagBox>
                    <ClickTag name="건강/운동" marginBottom={0} isClick={undefined} onClick={undefined}/>
                    <ClickTag name="금융" marginBottom={0} isClick={undefined} onClick={undefined}/>
                    <ClickTag name="이커머스" marginBottom={0} isClick={undefined} onClick={undefined}/>
                </S.TopTagBox>
            </S.Top>
            <S.Middle>
                <S.MiddleHeader>
                    <span>사용가능한 툴</span>
                </S.MiddleHeader>
                <S.MiddleTagBox>
                    <ClickTag name="Figma" marginBottom={0} isClick={undefined} onClick={undefined}/>
                    <ClickTag name="Adobe" marginBottom={0} isClick={undefined} onClick={undefined}/>
                    <ClickTag name="HTML" marginBottom={0} isClick={undefined} onClick={undefined}/>
                    <ClickTag name="CSS" marginBottom={0} isClick={undefined} onClick={undefined}/>
                    <ClickTag name="Miro" marginBottom={0} isClick={undefined} onClick={undefined}/>
                    <ClickTag name="Python" marginBottom={0} isClick={undefined} onClick={undefined}/>
                </S.MiddleTagBox>
            </S.Middle>
            <S.Bottom>
                <S.BottomHeader>
                    <span>팀 프로젝트 후기</span>
                </S.BottomHeader>
                <S.BottomInnerBox>후기란</S.BottomInnerBox>
            </S.Bottom>
        </S.AboutMeWrapper>
        
    )
}