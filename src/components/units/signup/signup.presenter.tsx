import { useContext } from "react";
import Blank from "../../commons/blank/blank";
import SubmitBtn from "../../commons/button/Submit";
import Xmark from "../../commons/button/Xmark";
import useFetchUser from "../../commons/hooks/useFetchUser";
import Auth from "./auth";
import { SignUpContext } from "./signup.container";
import * as S from "./signup.styles";
import { IPropsSignUpUI } from "./signup.types";

export default function SignUpUI(props: IPropsSignUpUI) {
  const { onChangeInput, isEdit } = useContext(SignUpContext);
  const { data } = useFetchUser();
  const user = data?.fetchUser;
  return (
    <S.Wrapper>
      <S.ResponseBox>
        <S.StateAlert isEdit={isEdit}>기본정보를 수정합니다.</S.StateAlert>
        <S.MobileBox>
          <S.TitleBox isEdit={isEdit}>
            <span>{isEdit ? "기본정보 수정" : "회원가입"}</span>
            <S.XmarkBox>
              <Xmark width={16} height={16} />
            </S.XmarkBox>
          </S.TitleBox>
          <S.Name>이름</S.Name>
          <S.Input
            disabled={isEdit}
            type="text"
            placeholder={isEdit ? user?.name : "이름을 입력해주세요."}
            maxLength={5}
            onChange={onChangeInput && onChangeInput("name")}
          />
          <Blank width={0} height={isEdit ? 20 : 40} />
          {isEdit ? (
            <>
              <S.Name>이메일 주소</S.Name>
              <S.Auth>
                <input type="text" placeholder={user?.email} disabled />
                <S.AuthBtn disabled={false} isEmail={true}>
                  인증된 이메일
                </S.AuthBtn>
              </S.Auth>
              <Blank width={0} height={20} />
              <Auth
                name="휴대폰번호 인증"
                placeHolder="휴대폰번호를 입력해주세요."
                onClickSendToken={props.onClickSendEmailToken}
                onClickCheckToken={props.onClickCheckEmailToken}
              />
            </>
          ) : (
            <Auth
              name="이메일 주소"
              placeHolder="이메일 주소를 입력해주세요."
              onClickSendToken={props.onClickSendEmailToken}
              onClickCheckToken={props.onClickCheckEmailToken}
            />
          )}
          <Blank width={0} height={isEdit ? 20 : 40} />
          {isEdit ? (
            <>
              <S.Name>현재 비밀번호</S.Name>
              <S.Input
                type="password"
                placeholder="현재 비밀번호를 입력해주세요."
                onChange={onChangeInput && onChangeInput("password")}
              />
              <Blank width={0} height={20} />
            </>
          ) : (
            <></>
          )}
          <S.Name>{isEdit ? "변경할 비밀번호" : "비밀번호"}</S.Name>
          <S.Input
            type="password"
            placeholder={
              isEdit ? "변경할 비밀번호" : "비밀번호를 입력해주세요."
            }
            onChange={onChangeInput && onChangeInput("password")}
          />
          <S.Message>{props.passMsg}</S.Message>
          <Blank width={0} height={20} />
          <S.Name>{isEdit ? "비밀번호 확인" : "비밀번호"}</S.Name>
          <S.Input
            type="password"
            placeholder={
              isEdit ? "현재 비밀번호" : "비밀번호를 다시 한 번 입력해주세요."
            }
            onChange={onChangeInput && onChangeInput("chkPassword")}
          />
          <S.Message>{props.checkMsg}</S.Message>
          <Blank width={0} height={isEdit ? 60 : 90} />
          {isEdit ? (
            <></>
          ) : (
            <>
              <S.CheckBox>
                <input
                  type="checkbox"
                  onChange={props.onChageCheckBox("privite")}
                />
                <span>개인정보 수집에 동의합니다.</span>
              </S.CheckBox>
              <S.CheckBox>
                <input
                  type="checkbox"
                  onChange={props.onChageCheckBox("policy")}
                />
                <span>이용약관에 동의합니다.</span>
              </S.CheckBox>
            </>
          )}
        </S.MobileBox>
        <Blank width={0} height={10} />
        <S.TabletBtnBox>
          <S.BtnBox>
            <SubmitBtn
              isActive={!props.isSubmit}
              onClick={props.onClickSubmit}
              name={isEdit ? "기본정보 수정하기" : "계정 만들기"}
              fontSize={1.143}
              backgroundcolor={props.isSubmit ? "#3894FF" : "#cacaca"}
            />
          </S.BtnBox>
          <S.DeleteUserBtn>서비스 탈퇴하기</S.DeleteUserBtn>
        </S.TabletBtnBox>
      </S.ResponseBox>
    </S.Wrapper>
  );
}
