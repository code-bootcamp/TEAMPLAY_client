import Blank from "../../../commons/blank/blank";
import { v4 as uuidv4 } from "uuid";
import * as S from "./pages.styles";
import { Fragment, useContext } from "react";
import ClickTag from "../../../commons/tags/commons/clickTag";
import SubmitBtn from "../../../commons/button/Submit";
import { OnBoardingContext } from "../onboarding.container";

export default function OnBoardingFiftPage() {
  const { onClickMoveToNext, onClickMoveToPrev, onClickPushTag, interest } =
    useContext(OnBoardingContext);
  const list = [
    "건강/운동",
    "뷰티/패션",
    "이커머스",
    "금융",
    "공유서비스",
    "생산성",
    "소셜네트워크",
    "스포츠",
    "의료",
    "유틸리티",
    "뉴스",
    "어린이",
    "기타",
    "엔터테인먼트",
  ];
  return (
    <S.Wrapper>
      <S.ResponseBox>
        <div>
          <S.BackArrow onClick={onClickMoveToPrev}>
            <img src="/img/commons/leftArrow1.svg" />
          </S.BackArrow>
          <S.Title>관심있는 분야를 선택해주세요.</S.Title>
          <Blank height={12} width={0} />
          <S.Subscript>팀원님이 관심있는 분야를 3개 골라주세요.</S.Subscript>
          <Blank height={38} width={0} />
          <S.TagArea>
            {list.map((name) => (
              <Fragment key={uuidv4()}>
                <ClickTag
                  name={name}
                  marginBottom={16}
                  isClick={interest && interest.includes(name) && true}
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
