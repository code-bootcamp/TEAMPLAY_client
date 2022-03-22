import Blank from "../../../commons/blank/blank";
import SubmitBtn from "../../../commons/button/Submit";
import * as S from "./pages.styles";

export default function OnBoardingFirstPage() {
  return (
    <S.Wrapper>
      <S.BackArrow />
      <S.Title>잘 맞는 팀원과</S.Title>
      <S.Title>관심있는 분야의 프로젝트를</S.Title>
      <S.Title>TEAMPLAY에서 함께하세요.</S.Title>
      <Blank height={20} width={0} />
      <S.Subscript>몇 가지 정보를 알려주시면</S.Subscript>
      <S.Subscript>
        팀원님께서 흥미있어하실 프로젝트와 잘 맞는 팀원을
      </S.Subscript>
      <S.Subscript>추천해드릴게요!</S.Subscript>
      <Blank height={385} width={0} />
      <SubmitBtn
        name="좋아요"
        radius={12}
        backgroundcolor="#c4c4c4"
        fontSize={16}
        color="#FFFFFF"
        border={true}
      />
      <Blank height={24} width={0} />
      <S.Looking>먼저 둘러볼게요</S.Looking>
    </S.Wrapper>
  );
}