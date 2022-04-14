import { useContext } from "react";
import { OnBoardingContext } from "./onboarding.container";
import * as S from "./onboarding.styles";
import OnBoardingFifthPage from "./pages/fifth";
import OnBoardingFirstPage from "./pages/first";
import OnBoardingFourthPage from "./pages/fourth";
import OnBoardingSecondPage from "./pages/second";
import OnBoardingSixthPage from "./pages/sixth";
import OnBoardingThirdPage from "./pages/third";

export default function OnBoardingUI() {
  const { left } = useContext(OnBoardingContext);
  return (
    <S.WrapperRelative>
      <S.Wrapper left={left}>
        <S.First>
          <OnBoardingFirstPage />
        </S.First>
        <S.Second>
          <OnBoardingSecondPage />
        </S.Second>
        <S.Third>
          <OnBoardingThirdPage />
        </S.Third>
        <S.Fourth>
          <OnBoardingFourthPage />
        </S.Fourth>
        <S.Fifth>
          <OnBoardingFifthPage />
        </S.Fifth>
        <S.Sixth>
          <OnBoardingSixthPage />
        </S.Sixth>
      </S.Wrapper>
    </S.WrapperRelative>
  );
}
