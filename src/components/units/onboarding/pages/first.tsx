import { useContext } from "react";
import Blank from "../../../commons/blank/blank";
import SubmitBtn from "../../../commons/button/Submit";
import useMoveToPage from "../../../commons/hooks/useMoveToPage";
import { OnBoardingContext } from "../onboarding.container";
import * as S from "./pages.styles";

export default function OnBoardingFirstPage() {
  const { moveToMain } = useMoveToPage();
  const { onClickMoveToNext } = useContext(OnBoardingContext);

  return (
    <S.Wrapper>
      <S.ResponseBox>
        <div>
          <S.BackArrow />
          <S.Title>잘 맞는 팀원과</S.Title>
          <S.Title>관심있는 분야의 프로젝트를</S.Title>
          <S.Title>TEAMPLAY에서 함께하세요.</S.Title>
          <Blank height={48} width={0} />
          <S.Subscript>몇 가지 정보를 알려주시면</S.Subscript>
          <S.Subscript>
            팀원님께서 흥미있어하실 프로젝트와 잘 맞는 팀원을
          </S.Subscript>
          <S.Subscript>추천해드릴게요!</S.Subscript>
        </div>
        <img src="/img/onboarding/onboarding.png" />
      </S.ResponseBox>
      <S.ResponseBtnBox>
        <S.ButtonBox>
          <SubmitBtn
            isActive={false}
            name="좋아요"
            backgroundcolor="#3894FF"
            fontSize={1.143}
            onClick={onClickMoveToNext}
          />
          <Blank height={24} width={0} />
          <S.Looking onClick={moveToMain}>먼저 둘러볼게요</S.Looking>
        </S.ButtonBox>
      </S.ResponseBtnBox>
    </S.Wrapper>
  );
}
