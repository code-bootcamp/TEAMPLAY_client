import { Wrapper } from "../../../../commons/styles/commonStyls";
import Date from "../../../commons/inputs/component/date/date.container";
import ImageUpload from "../../../commons/inputs/component/imageUpload/imageUpload.container";
import Select from "./select/select.container";
import SubmitButton from "../../../commons/inputs/component/submitbutton/submit.container";
import TextArea from "../../../commons/inputs/component/textarea/textarea.container";
import TypingInput from "../../../commons/inputs/component/typinginput/typinginput.container";
import * as S from "./projectNew.styles";
import tagListDummy from '../../../../commons/json/tagList.json'
import selectListDummy from '../../../../commons/json/selectList.json'
import TagBox from "./tagbox/TagBox";

export default function ProjectUI() {
    return (
        <>
            <S.ProjectTop>
                <h2>새로운 프로젝트를 생성합니다!</h2>
                <button>
                    <img src="../img/close.svg" alt="detail close" />
                </button>
            </S.ProjectTop>
            <Wrapper paddingTop="20px">
                <TypingInput
                    label="프로젝트 이름"
                    type="text"
                    placeholder="프로젝트 이름을 입력해주세요."
                />
                <TypingInput
                    label="팀 이름"
                    type="text"
                    placeholder="프로젝트를 진행할 팀의 이름을 입력해주세요."
                />
                <TypingInput
                    label="소개"
                    type="text"
                    placeholder="프로젝트를 간단하게 소개해주세요."
                />
                <TagBox 
                    label="분야"
                    list={tagListDummy.tagList.field}
                    checkBox={false}
                />
                <Select
                    label="활동 지역"
                    optionList={selectListDummy.selectList.area}
                />
                <TagBox 
                    label="진행 방식"
                    list={tagListDummy.tagList.proceeding}
                    checkBox={false}
                />
                <Select
                    label="모집 인원"
                    optionList={selectListDummy.selectList.recruitment}
                />
                <Date label="모집 기간" />
                <ImageUpload label="대표 이미지" />
                <TagBox 
                    label="출시 플랫폼"
                    list={tagListDummy.tagList.platform}
                    checkBox={true}
                />
                <TypingInput
                    label="기술/언어"
                    type="text"
                    placeholder="사용될 기술을 적어주세요."
                />
                <TextArea label="프로젝트 설명" />
                <SubmitButton btnvalue="작성 완료" />
            </Wrapper>
        </>
    )
}