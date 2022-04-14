import styled from "@emotion/styled";
import {
  IPropsSignupName,
  IPropsSignUpStyles,
  IPropsValidBtn,
} from "./signup.types";
import { breakPoints } from "../../../commons/styles/breakpoint";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const ResponseBox = styled.div`
  width: 100%;
  max-width: 1160px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const StateAlert = styled.div`
  display: none;
  width: 100%;
  padding: 11px 0px 11px 24px;
  margin-bottom: 47px;
  font-weight: 500;
  font-size: 16px;
  line-height: 18px;
  color: #ffffff;
  background: #3894ff;

  @media ${breakPoints.tablet} {
    display: ${(props: IPropsSignupName) => (props.isEdit ? "block" : "none")};
  }

  @media ${breakPoints.web} {
    display: ${(props: IPropsSignupName) => (props.isEdit ? "block" : "none")};
  }
`;

export const MobileBox = styled.div`
  width: 100%;
  min-width: 375px;
  max-width: 467px;

  padding: 18px 18px 0px 18px;
`;

export const TitleBox = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  margin-bottom: 60px;

  span {
    font-weight: 400;
    font-size: 1.429rem;
    line-height: 23px;

    color: #0d223a;
  }

  @media ${breakPoints.tablet} {
    display: ${(props: IPropsSignupName) => (props.isEdit ? "none" : "block")};
  }

  @media ${breakPoints.web} {
    display: ${(props: IPropsSignupName) => (props.isEdit ? "none" : "block")};
  }
`;

export const XmarkBox = styled.div`
  display: block;

  @media ${breakPoints.tablet} {
    display: none;
  }

  @media ${breakPoints.web} {
    display: none;
  }
`;

export const Name = styled.div`
  margin-bottom: 5px;

  font-weight: 400;
  font-size: 1.143rem;
  line-height: 18px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 8px 8px;
  border: 1px solid #cacaca;

  font-weight: 500;
  font-size: 1rem;

  ::placeholder {
    font-weight: 500;
    font-size: 1rem;
    line-height: 16px;
    color: #c4c4c4;
  }
`;

export const Auth = styled.div`
  input {
    width: calc(100% - 107px);
    padding: 8px 8px;
    margin-right: 6px;
    margin-bottom: 4px;
    border: 1px solid #cacaca;

    font-weight: 500;
    font-size: 1rem;

    ::placeholder {
      color: #c4c4c4;
    }
  }
`;

export const AuthBtn = styled.button`
  background-color: ${(props: IPropsSignUpStyles) =>
    props.isEmail ? "#c4c4c4" : "#E5E5E5"};
  padding: 8px 8px;
  font-weight: 500;
  font-size: 1rem;

  color: ${(props: IPropsSignUpStyles) =>
    props.isEmail ? "#ffffff" : "#c4c4c4"};

  :hover {
    cursor: ${(props: IPropsSignUpStyles) =>
      props.isEmail ? "pointer" : "auto"};
  }
`;

export const AuthInputBox = styled.div`
  display: flex;
  border: 1px solid #cacaca;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: ${(props: IPropsValidBtn) => props.isAuth && "4px"};
  }
`;

export const ValidBtn = styled.button`
  display: ${(props: IPropsValidBtn) => (props.isAuth ? "inline" : "none")};
  padding: 6px 8px;
  border: 1px solid #cacaca;
  font-style: normal;
  font-weight: 500;
  font-size: 0.857rem;
  line-height: 14px;

  color: #c4c4c4;
`;

export const AuthInput = styled.input`
  width: ${(props: IPropsValidBtn) =>
    props.isAuth ? "calc(100% - 50px)" : "100%"};
  padding: 8px 8px;
  background-color: ${(props: IPropsValidBtn) =>
    props.isAuth ? "#FFFFFF" : "#E5E5E5"};

  font-weight: 500;
  font-size: 1rem;

  ::placeholder {
    color: #c4c4c4;
  }
`;

export const Message = styled.div`
  margin-top: 5px;
  font-size: 0.857rem;
  line-height: 14px;
  font-weight: 400;
  font-size: 12px;

  color: #3894ff;
`;

export const CheckBox = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;

  span {
    font-weight: 500;
    font-size: 1rem;
    line-height: 16px;
  }

  input {
    width: 16px;
    height: 16px;
    margin-right: 5px;

    border-radius: 5px;
  }
`;

export const DeleteUserBtn = styled.div`
  display: inline-block;
  padding: 3px 0px;
  margin-top: 10px;
  border-bottom: 1px solid #999;
  font-weight: 500;
  font-size: 1.143rem;
  line-height: 18px;
  color: #999999;
`;

export const TabletBtnBox = styled.div`
  width: 100%;
  max-width: 1160px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media ${breakPoints.tablet} {
    flex-direction: row-reverse;
    justify-content: flex-start;
  }

  @media ${breakPoints.web} {
    flex-direction: row-reverse;
    justify-content: flex-start;
  }
`;

export const BtnBox = styled.div`
  width: 100%;
  min-width: 375px;
  max-width: 467px;
  padding: 0px 18px 25px 18px;

  @media ${breakPoints.tablet} {
    width: 20%;
    min-width: 375px;
    max-width: 467px;
  }

  @media ${breakPoints.web} {
    width: 20%;
    min-width: 375px;
    max-width: 467px;
  }
`;
