import { Fragment, useContext } from "react";
import Blank from "../../../../commons/blank/blank";
import { v4 as uuidv4 } from "uuid";
import { ProfileEditContext } from "../profileEdit.container";
import * as S from "./sidebar.styles";
import dump from "../../../../../commons/json/tendency.json";
import RainbowTag from "../../../../commons/tags/commons/rainbowTag";
import SubmitBtn from "../../../../commons/button/Submit";

export default function ProfileEditTendency() {
  const {
    tendency,
    area,
    onClickPushTag,
    onClickEditTendency,
    onClickDeleteTendencyTag,
    onClickChangeTagButton,
  } = useContext(ProfileEditContext);

  return (
    <S.Wrapper area={area}>
      <S.MainBox>
        <S.Header>
          <S.RefreshBox>
            <img src="/img/profile/refreshIcon.svg" />
            <span>초기화</span>
          </S.RefreshBox>
          <S.XMark src="/img/preview/Xmark.svg" onClick={onClickEditTendency} />
        </S.Header>
        <div className="NoneBlank">
          <Blank height={24} width={0} />
        </div>
        <S.Title>
          <span>나의 성향</span>
        </S.Title>
        <div className="NoneBlank">
          <Blank height={36} width={0} />
        </div>
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
        <S.TagArea>
          {tendency?.length ? (
            <>
              <S.WebTag>
                <div>선택항목</div>
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
            name="확인"
            fontSize={1.143}
            backgroundcolor="#3894FF"
            onClick={onClickChangeTagButton}
            isActive={false}
          />
        </S.BtnBox>
      </S.MainBox>
    </S.Wrapper>
  );
}
