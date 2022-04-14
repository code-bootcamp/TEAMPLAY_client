import { Fragment, useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import * as S from "./interest.styles";
import Blank from "../../../commons/blank/blank";
import ClickTag from "../../../commons/tags/commons/clickTag";
import SubmitBtn from "../../../commons/button/Submit";
import { RecruitContext } from "../recruit.container";

export default function FilterInterest() {
  const {
    interest,
    interestLocate,
    onClickPushTag,
    onClickSearchfilter,
    // onClickDeletePositionTag,
  } = useContext(RecruitContext);
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
    <S.Wrapper interestLocate={interestLocate}>
      <S.MainBox>
        <S.Header>
          <S.RefreshBox>
            <img src="/img/profile/refreshIcon.svg" />
            <span>초기화</span>
          </S.RefreshBox>
          <S.XMark src="/img/preview/Xmark.svg" onClick={onClickSearchfilter} />
        </S.Header>
        <Blank height={24} width={0} />
        <S.Title>
          <span>관심분야</span>
        </S.Title>
        <Blank height={36} width={0} />
        <S.TagArea>
          {list.map((name) => (
            <Fragment key={uuidv4()}>
              <ClickTag
                name={name}
                marginBottom={16}
                isClick={interest && interest === name && true}
                onClick={onClickPushTag}
              />
            </Fragment>
          ))}
        </S.TagArea>
        <S.BtnBox>
          <SubmitBtn
            isActive={false}
            name="팀원 보기"
            fontSize={1.143}
            backgroundcolor="#3894FF"
            onClick={undefined}
          />
        </S.BtnBox>
      </S.MainBox>
    </S.Wrapper>
  );
}
