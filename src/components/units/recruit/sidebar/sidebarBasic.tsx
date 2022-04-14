import { useContext } from "react"
import { RecruitContext } from "../recruit.container"
import FilterRegion from "./activeRegion"
import FilterInterest from "./interest"
import FilterPosition from "./position"
import FilterTendency from "./tendency"
import * as S from "./sideBar.styles"

export default function SideBarBasic(){
    const {
        locate,
        isTendency,
        isPosition,
        isRegion,
        isInterest,
        onClickTendency,
        onClickRegion,
        onClickPosition,
        onClickInterest,
        // onClickSearchfilter
    } = useContext(RecruitContext)
    return(
        // <S.WrapperRelative>
            <S.Wrapper locate={locate}>
                <S.TopNavi>
                    <div>
                        {isTendency && <FilterTendency/>}
                        <div onClick={onClickTendency}>성향</div>
                    </div>
                    <div>
                        {isRegion && <FilterRegion/>}
                        <div onClick={onClickRegion} >활동지역</div>
                    </div>
                    <div>
                        {isPosition && <FilterPosition/>}
                        <div onClick={onClickPosition}>역할</div>
                    </div>
                    <div>
                        {isInterest && <FilterInterest/>}
                        <div onClick={onClickInterest}>관심분야</div>
                    </div>
                </S.TopNavi>
                {/* <S.XMark src="/img/preview/Xmark.svg" 
                    onClick={onClickSearchfilter} 
                    /> */}
            </S.Wrapper>
        // </S.WrapperRelative>
    )
}