import styled from "@emotion/styled";
import { IPropsOnBoardingUIWrapper } from "./onboarding.types";

export const WrapperRelative = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  position: relative;
`;

export const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  overflow: hidden;
  position: absolute;
  left: ${(props: IPropsOnBoardingUIWrapper) => `${props.left}vw`};
  z-index: 1;
  transition: all 0.35s;
`;

export const First = styled.div`
  width: 100vw;
  overflow: hidden;
`;

export const Second = styled.div`
  width: 100vw;
  overflow: hidden;
`;

export const Third = styled.div`
  width: 100vw;
  overflow: hidden;
`;

export const Fourth = styled.div`
  width: 100vw;
  overflow: hidden;
`;

export const Fifth = styled.div`
  width: 100vw;
  overflow: hidden;
`;
export const Sixth = styled.div`
  width: 100vw;
  overflow: hidden;
`;
