import { Fragment, useContext } from "react";
import Blank from "../../../commons/blank/blank";
import { v4 as uuidv4 } from "uuid";
import * as S from "./pages.styles";
import SubmitBtn from "../../../commons/button/Submit";
import { OnBoardingContext } from "../onboarding.container";
import RainbowTag from "../../../commons/tags/commons/rainbowTag";
import dump from "../../../../commons/json/tendency.json";

export default function OnBoardingThirdPage() {
  const {
    tendency,
    isAdd,
    tagInputRef,
    tendencyData,
    onClickMoveToNext,
    onClickMoveToPrev,
    onClickPushTag,
    onClickDeleteTag,
    onClickChageInput,
    onChangeTagInput,
    onKeyPressEnter,
  } = useContext(OnBoardingContext);

  return (
    <S.Wrapper>
      <S.ResponseBox>
        <div>
          <S.BackArrow onClick={onClickMoveToPrev}>
            <img src="/img/commons/leftArrow1.svg" />
          </S.BackArrow>
          <S.Title>작업할 때 어떤 성향이신가요?</S.Title>
          <Blank height={12} width={0} />
          <S.Subscript>
            팀원님을 가장 잘 나타내는 단어를 3개 골라주세요.
          </S.Subscript>
          <Blank height={38} width={0} />
          <S.TagArea>
            {tendencyData?.fetchTendencys.map((data, index) => (
              <Fragment key={uuidv4()}>
                <RainbowTag
                  name={data.name}
                  id={data.id}
                  marginBottom={12}
                  backgroundColor={dump.tendency.color[index]}
                  onClick={onClickPushTag}
                />
              </Fragment>
            ))}
          </S.TagArea>
          <Blank height={24} width={0} />
          {isAdd ? (
            <S.TagInput
              ref={tagInputRef}
              type="text"
              placeholder="원하는 태그를 입력하세요."
              onChange={onChangeTagInput}
              onKeyPress={onKeyPressEnter}
            />
          ) : (
            <S.AddTag onClick={onClickChageInput}>+직접 추가하기</S.AddTag>
          )}
          <S.TagArea>
            {tendency?.length ? (
              <>
                {tendency.map((name) => (
                  <S.Tag
                    bgColor={
                      dump.tendency.name.indexOf(name) > 0
                        ? dump.tendency.color[dump.tendency.name.indexOf(name)]
                        : "#0D223A"
                    }
                    key={uuidv4()}
                    onClick={onClickDeleteTag && onClickDeleteTag(name)}
                  >
                    <span>{name}</span>
                    <div>x</div>
                  </S.Tag>
                ))}
              </>
            ) : (
              <></>
            )}
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
