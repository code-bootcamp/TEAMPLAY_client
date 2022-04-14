import styled from "@emotion/styled";
import { IPropsHeaderToggleWrapper } from "../header.types";
import { breakPoints } from "../../../../../commons/styles/breakpoint";

export const Wrapper = styled.div`
  width: 80vw;
  height: 100%;
  position: fixed;
  top: 0;
  right: ${(props: IPropsHeaderToggleWrapper) => `${props.position}vw`};
  transition: all 0.25s;
  z-index: 2;
  background-color: #fff;
  border: 1px solid #e9e9e9;
  border-radius: 12px;

  @media ${breakPoints.tablet} {
    display: ${(props: IPropsHeaderToggleWrapper) =>
      props.isView ? "block" : "none"};
    height: auto;
    position: absolute;
    top: 2vw;
    right: 0;
    width: 350px;
  }

  @media ${breakPoints.web} {
    display: ${(props: IPropsHeaderToggleWrapper) =>
      props.isView ? "block" : "none"};
    height: auto;
    position: absolute;
    top: 2vw;
    right: 0;
    width: 350px;
    box-shadow: 0px 0px 20px rgb(0 0 0 / 10%);
  }
`;

export const XmarkBox = styled.div`
  display: flex;
  justify-content: flex-end;
  position: relative;
  padding: 15px 20px;
  margin-bottom: 20px;

  img {
    width: 16px;
    height: 16px;

    :hover {
      cursor: pointer;
    }
  }
`;

export const ProfileBox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #e9e9e9;
`;

export const UserInfoBox = styled.div`
  display: flex;
  padding: 20px 12px;

  @media ${breakPoints.tablet} {
    padding: 20px;
  }

  @media ${breakPoints.web} {
    padding: 20px;
  }
`;

export const ProfileImg = styled.div`
  img {
    width: 72px;
    height: 72px;
    border-radius: 50%;
    object-fit: cover;
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Name = styled.div`
  padding: 2px 15px;

  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  color: #0d223a;
`;

export const Position = styled.div`
  padding: 2px 15px;

  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  color: #999999;
`;

export const Point = styled.div`
  padding: 2px 15px;

  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
  color: #0d223a;
`;

export const LoginBox = styled.div`
  width: 100%;
  padding: 48px 12px;
  border-bottom: 1px solid #e9e9e9;

  span {
    font-weight: 500;
    font-size: 18px;
    line-height: 21px;
    color: #0d223a;
  }

  :hover {
    cursor: pointer;
  }
`;

export const Option = styled.div`
  width: 100%;
  padding: 20px 12px;
  border-bottom: 1px solid #e9e9e9;

  font-weight: 500;
  font-size: 16px;
  line-height: 21px;
  color: #0d223a;

  :hover {
    cursor: pointer;
  }

  @media ${breakPoints.tablet} {
    padding: 20px 25px;
  }

  @media ${breakPoints.web} {
    padding: 20px 25px;
  }
`;
