import styled from "@emotion/styled";
import { IPropsChattingUIWrapper } from "./chatting.types";
import { breakPoints } from "../../../commons/styles/breakpoint";

export const Wrapper = styled.div`
  display: flex;
  height: 90vh;
  overflow: hidden;
  position: fixed;
  left: ${(props: IPropsChattingUIWrapper) => `${props.left}vw`};
  z-index: 1;
  transition: all 0.35s;

  @media ${breakPoints.tablet} {
    height: 76vh;
    position: static;
  }

  @media ${breakPoints.web} {
    height: 76vh;
    position: static;
    justify-content: center;
  }
`;

export const ListBox = styled.div`
  width: 100vw;
  height: 100%;

  @media ${breakPoints.tablet} {
    width: 375px;
  }

  @media ${breakPoints.web} {
    width: 375px;
  }
`;

export const DetailBox = styled.div`
  width: 100vw;
  height: 100%;

  @media ${breakPoints.tablet} {
    width: calc(100vw - 375px);
  }

  @media ${breakPoints.web} {
    width: 825px;
  }
`;
