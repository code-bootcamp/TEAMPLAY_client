import { Fragment, useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import * as S from "./position.styles";
import Blank from "../../../commons/blank/blank";
import ClickTag from "../../../commons/tags/commons/clickTag";
import SubmitBtn from "../../../commons/button/Submit";
import { RecruitContext } from "../recruit.container";

export default function FilterPosition() {
  const {
    position,
    positionLocate,
    onClickPushTag,
    onClickSearchfilter,
    // onClickDeletePositionTag,
  } = useContext(RecruitContext);
  const list = [
    "기획자",
    "UI디자이너",
    "UX디자이너",
    "UXUI디자이너",
    "프론트엔드",
    "백엔드",
    "풀스택",
  ];

  return (
    <S.Wrapper positionLocate={positionLocate}>
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
          <span>역할</span>
        </S.Title>
        <Blank height={36} width={0} />
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
        {/* <S.TagArea>
            {list?.length ? (
                <>
                    {list.map((name)=>{
                        return (
                            <S.NormalTag
                                key={uuidv4()}
                                onClick={onClickDeletePositionTag && onClickDeletePositionTag(name)}
                            >
                                <span>{name}</span>
                                <div>x</div>
                            </S.NormalTag>
                        )
                    })}
                </>
            ) : (
                <></>
            )}
        </S.TagArea> */}
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
