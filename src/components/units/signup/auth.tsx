import { useContext } from "react";
import { SignUpContext } from "./signup.container";
import * as S from "./signup.styles";
import { IPropsAuth } from "./signup.types";
import Timer from "./timer";

export default function Auth(props: IPropsAuth) {
  const { isAuth, isEmail, onChangeInput } = useContext(SignUpContext);
  return (
    <div>
      <S.Name>{props.name}</S.Name>
      <S.Auth>
        <input
          type="text"
          placeholder={props.placeHolder}
          onChange={onChangeInput && onChangeInput("email")}
        />
        <S.AuthBtn
          onClick={props.onClickSendToken}
          disabled={!isEmail}
          isEmail={isEmail}
        >
          인증번호 받기
        </S.AuthBtn>
      </S.Auth>
      <S.AuthInputBox isAuth={isAuth}>
        <S.AuthInput
          type="text"
          placeholder="인증번호를 입력해주세요."
          onChange={onChangeInput && onChangeInput("token")}
          isAuth={isAuth}
          disabled={!isAuth}
        />
        <div>
          <S.ValidBtn isAuth={isAuth} onClick={props.onClickCheckToken}>
            확인
          </S.ValidBtn>
        </div>
      </S.AuthInputBox>
      {isAuth ? (
        <>
          <S.Message>인증번호가 요청되었습니다.</S.Message>
          <S.Message>
            <Timer />
          </S.Message>
        </>
      ) : (
        <></>
      )}
    </div>
  );
}
