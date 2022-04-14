import { Fragment, useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import * as S from "./activeRegion.styles";
import Blank from "../../../commons/blank/blank";
import ClickTag from "../../../commons/tags/commons/clickTag";
import SubmitBtn from "../../../commons/button/Submit";
import { RecruitContext } from "../recruit.container";

export default function FilterRegion() {
  const {
    region,
    regionLocate,
    onClickPushTag,
    onClickSearchfilter,
  } = useContext(RecruitContext);
  const list = [
    "서울",
    "경기도",
    "인천",
    "김포",
    "파주",
    "고양",
    "연천",
    "동두천",
    "양주",
    "의정부",
    "포천",
    "가평",
    "남양주",
    "양평",
    "화성",
    "시흥",
    "강서",
    "강남",
    "마포",
    "영등포"
  ];

  return (
    <S.Wrapper regionLocate={regionLocate}>
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
          <span>활동지역</span>
        </S.Title>
        <Blank height={36} width={0} />
        <S.TagArea>
          {list.map((name) => (
            <Fragment key={uuidv4()}>
              <ClickTag
                name={name}
                marginBottom={16}
                isClick={region && region === name && true}
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
