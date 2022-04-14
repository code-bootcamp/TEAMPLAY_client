import { Fragment, useContext } from "react";
import Blank from "../../../commons/blank/blank";
import { v4 as uuidv4 } from "uuid";
import dump from "../../../../commons/json/tendency.json";
import RainbowTag from "../../../commons/tags/commons/rainbowTag";
import { RecruitContext } from "../recruit.container";
import * as S from "./tendency.styles";
import SubmitBtn from "../../../commons/button/Submit";

export default function FilterTendency() {
  const {
    tendency,
    tendencyLocate,
    onClickSearchfilter,
    onClickPushTag,
    onClickDeleteTendencyTag,
  } = useContext(RecruitContext);

  return (
    <S.Wrapper tendencyLocate={tendencyLocate}>
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
          <span>성향</span>
        </S.Title>
        <Blank height={16} width={0} />
        <S.TagArea>
          {dump.tendency.name.map((name, index) => (
            <Fragment key={uuidv4()}>
              <RainbowTag
                name={name}
                marginBottom={12}
                backgroundColor={dump.tendency.color[index]}
                onClick={onClickPushTag}
                id={""}
              />
            </Fragment>
          ))}
        </S.TagArea>
        <Blank width={0} height={12} />
        {/* <span>선택항목</span> */}
        <S.TagArea>
          {tendency?.length ? (
            <>
              <S.WebTag>
                <span>선택항목</span>
                <S.TagBox>
                  {tendency.map((name) => {
                    return (
                      <S.Tag
                        bgColor={
                          dump.tendency.name.indexOf(name) > 0
                            ? dump.tendency.color[
                                dump.tendency.name.indexOf(name)
                              ]
                            : "#0D223A"
                        }
                        key={uuidv4()}
                        onClick={
                          onClickDeleteTendencyTag &&
                          onClickDeleteTendencyTag(name)
                        }
                      >
                        <span>{name}</span>
                        <div>x</div>
                      </S.Tag>
                    );
                  })}
                </S.TagBox>
              </S.WebTag>
            </>
          ) : (
            <></>
          )}
        </S.TagArea>
        <S.BtnBox>
          <SubmitBtn
            name="팀원 보기"
            fontSize={1.143}
            backgroundcolor="#3894FF"
            onClick={undefined}
            isActive={false}
          />
        </S.BtnBox>
      </S.MainBox>
    </S.Wrapper>
  );
}
