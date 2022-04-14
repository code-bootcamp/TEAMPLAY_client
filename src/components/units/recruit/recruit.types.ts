export interface IPropsRecruitContext{
    tendency?: string[];
    region?: string
    position?: string;
    interest?: string;
    locate?: number
    tendencyLocate?: number
    regionLocate?: number
    positionLocate?: number
    interestLocate?: number
    isVisible?: boolean
    isTendency?: boolean
    isRegion?: boolean
    isPosition?: boolean
    isInterest?: boolean
    isSearchBar?: boolean
    // isSelected?: boolean
    onClickSearchImg?: () => void
    onClickSearchfilter?: () => void
    onClickType?: () => void
    onClickTendency?: () => void
    onClickRegion?: () => void
    onClickPosition?: () => void
    onClickInterest?: () => void
    onClickPushTag?: (name: string) => () => void
    onClickDeleteTendencyTag?: (name: string) => () => void
    onClickDeletePositionTag?: (name: string) => void
}

export interface ISideBarWrapper{
    locate?: number | undefined
    tendencyLocate?: number | undefined
    regionLocate?: number | undefined
    positionLocate?: number | undefined
    interestLocate?: number | undefined
}

export interface IPropsTag {
    bgColor: string;
}