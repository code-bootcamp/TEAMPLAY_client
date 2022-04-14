import { ReactNode,SetStateAction,ChangeEvent,MouseEvent,Dispatch } from 'react';

export interface IProjectContext {
    position?: string[]
    selected?: string[]
    setPosition?: Dispatch<SetStateAction<string[]>>
    setSelected?: Dispatch<SetStateAction<string>>
    setPostionInclueds?: Dispatch<SetStateAction<string[]>>
    setName?: Dispatch<SetStateAction<string>>
    setTeamName?: Dispatch<SetStateAction<string>>
    setIntro?: Dispatch<SetStateAction<string>>
    setSkill?: Dispatch<SetStateAction<string>>
    setRecruitDate?: Dispatch<SetStateAction<string>>
    setDescription?: Dispatch<SetStateAction<string>>
    setLocationId?: Dispatch<SetStateAction<string>>
    setTypeId?: Dispatch<SetStateAction<string | string[]>>
    setMheod?: Dispatch<SetStateAction<string | string[]>>
    setPlatformIds?:Dispatch<SetStateAction<string | string[]>>
    setNumbers?:Dispatch<SetStateAction<number[]>>
    setImgUrl?:Dispatch<SetStateAction<string>>
    handleSelect?: (e: ChangeEvent<HTMLSelectElement>) => void,
    onClickPositionAdd?: () => void,
    postionInclueds?: string[],
    positionAdd?: () => void,
    positonMinus?: () => void,
    onSubmitProject?: ((e: MouseEvent<HTMLFormElement>) => void) | undefined,
    positionCount?: number,
    methodList?: {}[],
    numbers?: number[],
    handleSelect2?: (e: ChangeEvent<HTMLSelectElement>) => void,
    selected2?: string,
    positionList?:[],
    locationList?:[],
    typeList?:[],
    platformList?:[],
    children?: ReactNode | undefined;
}

