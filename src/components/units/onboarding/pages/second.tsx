import Blank from "../../../commons/blank/blank";
import { v4 as uuidv4 } from "uuid";
import * as S from "./pages.styles";
import { Fragment, useContext } from "react";
import ClickTag from "../../../commons/tags/commons/clickTag";
import SubmitBtn from "../../../commons/button/Submit";
import { OnBoardingContext } from "../onboarding.container";

export default function OnBoardingSecondPage() {
  const { onClickMoveToNext, onClickMoveToPrev, onClickPushTag, career } =
    useContext(OnBoardingContext);
  const list = ["대학생", "취준생", "신입~2년차"];

  return (
    <S.Wrapper>
      <S.ResponseBox>
        <div>
          <S.BackArrow onClick={onClickMoveToPrev}>
            <img src="/img/commons/leftArrow1.svg" />
          </S.BackArrow>
          <S.Title>몇년차 개발자/디자이너이신가요?</S.Title>
          <Blank height={12} width={0} />
          <S.Subscript>저희 어플은 주니어 팀원위주의 플렛폼입니다.</S.Subscript>
          <Blank height={24} width={0} />
          <S.TagArea>
            {list.map((name) => (
              <Fragment key={uuidv4()}>
                <ClickTag
                  name={name}
                  marginBottom={16}
                  id={""}
                  isClick={career && career === name && true}
                  onClick={onClickPushTag}
                />
              </Fragment>
            ))}
          </S.TagArea>
        </div>
      </S.ResponseBox>
      <S.ResponseBtnBox>
        <S.ButtonBox>
          <SubmitBtn
            isActive={false}
            name="다음으로"
            onClick={onClickMoveToNext}
            backgroundcolor="#3894FF"
            fontSize={1.143}
          />
        </S.ButtonBox>
      </S.ResponseBtnBox>
    </S.Wrapper>
  );
}
