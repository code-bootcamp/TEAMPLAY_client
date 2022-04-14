import { useContext } from "react";
import Blank from "../../../commons/blank/blank";
import SubmitBtn from "../../../commons/button/Submit";
import useFetchUser from "../../../commons/hooks/useFetchUser";
import PropsProfileCard from "../../../commons/profileCard/profileCard";
import { OnBoardingContext } from "../onboarding.container";
import * as S from "./pages.styles";

export default function OnBoardingSixthPage() {
  const { onClickSubmit, tendency, position } = useContext(OnBoardingContext);
  const { data } = useFetchUser();
  return (
    <S.Wrapper>
      <div>
        <Blank height={78} width={0} />
        <S.Title>프로필 카드가 성공적으로 생성되었습니다!</S.Title>
        <Blank height={24} width={0} />
        <S.FlexBox>
          <S.Subscript>팀플에서 자유롭게 팀원을 구해보세요</S.Subscript>
        </S.FlexBox>
        <Blank height={24} width={0} />
        <S.FlexBox>
          <S.CardBox>
            <PropsProfileCard
              img="/img/commons/noimage.jpg"
              name={data?.fetchUser.name}
              position={position || ""}
              tendency={
                tendency && [
                  { name: tendency[0] },
                  { name: tendency[1] },
                  { name: tendency[2] },
                ]
              }
              fontSize={14}
            />
          </S.CardBox>
        </S.FlexBox>
      </div>
      <S.ResponseBtnBox>
        <S.ButtonBox>
          <SubmitBtn
            isActive={false}
            name="다음으로"
            backgroundcolor="#3894FF"
            fontSize={1.143}
            onClick={onClickSubmit}
          />
        </S.ButtonBox>
      </S.ResponseBtnBox>
    </S.Wrapper>
  );
}
