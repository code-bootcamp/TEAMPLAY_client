import { Wrapper } from "../../../../commons/styles/commonStyls";
import DateInput from "../../../commons/inputs/component/date/date.container";
import ImageUpload from "../../../commons/inputs/component/imageUpload/imageUpload.container";
import LocationSelect from "./select/locationselect.container";
import SubmitButton from "../../../commons/inputs/component/submitbutton/submit.container";
import TextArea from "../../../commons/inputs/component/textarea/textarea.container";
import TypingInput from "../../../commons/inputs/component/typinginput/typinginput.container";
import TagBox from "./tagbox/TagBox";
import { useContext } from "react";
import { ProjectContext } from "./projectNew.container";
import RecuriteSetting from "./select/recruite.container";
import { useRouter } from "next/router";
import * as S from "./projectNew.styles";

export default function ProjectUI() {
  const {
    onSubmitProject,
    positionList,
    locationList,
    typeList,
    methodList,
    setName,
    setTeamName,
    setIntro,
    setTypeId,
    setMheod,
    setDescription,
    setRecruitDate,
    setImgUrl,
    validName,
    validTeamName,
    validIntro,
    validMethod,
    validTypeId,
    validLocationId,
    validNumbers,
    onchangeValue,
  } = useContext(ProjectContext);

  const router = useRouter();

  return (
    <S.PiojectNewStyle>
      <S.ProjectTop>
        <Wrapper paddingTop={0}>
          <h2>새로운 프로젝트를 생성합니다!</h2>
        </Wrapper>
      </S.ProjectTop>
      <Wrapper paddingTop="20px">
        <form onSubmit={onSubmitProject}>
          <TypingInput
            label="프로젝트 이름 *"
            type="text"
            placeholder="프로젝트 이름을 입력해주세요."
            setValues={setName}
            id="name"
            valid={validName}
            errorMessage="프로젝트 이름을 한 글자 이상 입력해야 합니다."
          />
          <TypingInput
            label="팀 이름 *"
            type="text"
            placeholder="프로젝트를 진행할 팀의 이름을 입력해주세요."
            setValues={setTeamName}
            id="teamname"
            valid={validTeamName}
            errorMessage="팀 이름을 입력을 한 글자 이상 입력해야 합니다."
          />
          <TypingInput
            label="소개 *"
            type="text"
            placeholder="프로젝트를 간단하게 소개해주세요."
            setValues={setIntro}
            id="intro"
            valid={validIntro}
            errorMessage="프로젝트 소개를 한 글자 이상 입력해야 합니다."
          />
          <TagBox
            label="분야 *"
            list={typeList}
            checkBox={false}
            setValues={setTypeId}
            valid={validTypeId}
            errorMessage="프로젝트 분야를 선택해야 합니다."
          />
          <LocationSelect
            label="활동 지역 *"
            optionList={locationList}
            addBox={false}
            valid={validLocationId}
            errorMessage="활동지역을 선택해야 합니다."
          />
          <TagBox
            label="진행 방식 *"
            list={methodList}
            checkBox={false}
            setValues={setMheod}
            valid={validMethod}
            errorMessage="진행 방식을 선택해야 합니다."
          />
          <RecuriteSetting
            label="모집 인원 *"
            optionList={positionList}
            addBox={true}
            valid={validNumbers}
            errorMessage="어떤 직군이든 한 명이상 모집해야 합니다."
            onchangeValue={onchangeValue}
          />
          <DateInput 
           label="모집 기간" 
           setValues={setRecruitDate} 
           warringText="* 모집 기간을 선택하지 않으면 자동으로 상시 모집으로 공고가
           올라갑니다."
          />
          <ImageUpload label="대표 이미지" setValues={setImgUrl} />
          <TextArea label="프로젝트 설명" setValues={setDescription} />
          <S.ProjectNewButtons>
            <SubmitButton btnvalue="작성 완료" bgColor={"#3894FF"} />
            <SubmitButton
              type="button"
              btnvalue="작성 취소"
              bgColor="#ccc"
              onClick={() => {
                router.push("/project/list");
              }}
            />
          </S.ProjectNewButtons>
        </form>
      </Wrapper>
    </S.PiojectNewStyle>
  );
}
