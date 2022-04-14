import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/breakpoint";
import { IPropsFooterBox } from "../header/header.types";

export const FooterBox = styled.div`
  display: none;

  @media ${breakPoints.tablet} {
    display: ${(props: IPropsFooterBox) =>
      props.isHiddenFooterWeb.includes(props.asPath) ? "none" : "block"};
  }

  @media ${breakPoints.web} {
    display: ${(props: IPropsFooterBox) =>
      props.isHiddenFooterWeb.includes(props.asPath) ? "none" : "block"};
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 17vh;
  border-top: 1px solid #e9e9e9;
  display: flex;
  justify-content: center;
  border-bottom: 1px solid #ccc;
  & > div {
    width: 100%;
    max-width: 1200px;
    padding: 37px 15px 27px 15px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const TopBox = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 35px;

  img {
    width: 177px;
    margin-right: 67px;
  }

  span {
    margin-right: 40px;
    font-weight: 500;
    font-size: 16px;
    line-height: 18px;
    color: #0d223a;
  }
`;

export const BottomBox = styled.div`
  div {
    font-weight: 500;
    font-size: 10px;
    line-height: 11px;
    color: #999999;
  }
`;
