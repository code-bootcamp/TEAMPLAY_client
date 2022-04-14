import { Fragment, useContext } from "react";
import Blank from "../../../commons/blank/blank";
import SubmitBtn from "../../../commons/button/Submit";
import ClickTag from "../../../commons/tags/commons/clickTag";
import { v4 as uuidv4 } from "uuid";
import * as S from "./pages.styles";
import { OnBoardingContext } from "../onboarding.container";

export default function OnBoardingFourthPage() {
  const { onClickMoveToNext, onClickMoveToPrev, onClickPushTag, position } =
    useContext(OnBoardingContext);
  const list = [
    "기획자",
    "UI 디자이너",
    "UX 디자이너",
    "UXUI 디자이너",
    "프론트엔드",
    "백엔드",
    "풀스택",
  ];
  return (
    <S.Wrapper>
      <S.ResponseBox>
        <div>
          <S.BackArrow onClick={onClickMoveToPrev}>
            <img src="/img/commons/leftArrow1.svg" />
          </S.BackArrow>
          <S.Title>어떤 포지션을 맡고 싶으신가요?</S.Title>
          <Blank height={12} width={0} />
          <S.Subscript>팀원님이 맡고 싶으신 포지션을 골라주세요.</S.Subscript>
          <Blank height={48} width={0} />
          <S.PositionCarcBox>
            <S.PositionCard>
              <img src="/img/onboarding/user1.png" />
              <span>개발자</span>
            </S.PositionCard>
            <S.PositionCard>
              <img src="/img/onboarding/user2.png" />
              <span>기획자</span>
            </S.PositionCard>
            <S.PositionCard>
              <img src="/img/onboarding/user3.png" />
              <span>디자이너</span>
            </S.PositionCard>
          </S.PositionCarcBox>
          <S.Subscript>
            *추후 프로필 상세 페이지에서 수정 가능합니다.
          </S.Subscript>
          <Blank height={24} width={0} />
          <S.TagArea>
            {list.map((name) => (
              <Fragment key={uuidv4()}>
                <ClickTag
                  name={name}
                  marginBottom={16}
                  isClick={position && position === name && true}
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
