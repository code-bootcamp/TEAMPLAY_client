import styled from "@emotion/styled";
import { IPropsHeaderBox } from "./header.types";
import { breakPoints } from "../../../../commons/styles/breakpoint";

export const HeaderBox = styled.div`
  display: ${(props: IPropsHeaderBox) =>
    props.isHiddenHeader.includes(props.asPath) ? "none" : "block"};

  @media ${breakPoints.tablet} {
    display: ${(props: IPropsHeaderBox) =>
      props.isHiddenHeaderWeb.includes(props.asPath) ? "none" : "block"};
  }

  @media ${breakPoints.web} {
    display: ${(props: IPropsHeaderBox) =>
      props.isHiddenHeaderWeb.includes(props.asPath) ? "none" : "block"};
  }
`;

export const HeaderStyle = styled.header`
  background-color: #fff;
  display: flex;
  justify-content: center;
  border-bottom: 1px solid #ccc;

  @media ${breakPoints.tablet} {
  }

  @media ${breakPoints.web} {
  }
`;

export const HeaderWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
`;

export const HeaderTop = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  & h1 {
    padding: 12px 0;
    @media ${breakPoints.web} {
      padding: 20px 0;
      margin-right: 50px;
    }

    @media ${breakPoints.tablet} {
      padding: 20px 0;
      margin-right: 50px;
    }
    & img {
      @media ${breakPoints.tablet} {
        width: 12.643rem;
      }
      @media ${breakPoints.web} {
        width: 12.643rem;
      }
    }
  }
  @media ${breakPoints.tablet} {
    flex-direction: row;
    align-items: center;
  }

  @media ${breakPoints.web} {
    flex-direction: row;
    align-items: center;
  }
`;

export const HeaderNav = styled.nav`
  & ul {
    display: flex;
  }
  & ul > li {
    margin-right: 25px;
    cursor: pointer;
    position: relative;

    padding: 12px 0;
    font-weight: 500;
    font-size: 14px;
    line-height: 23px;
    color: #999999;

    @media ${breakPoints.tablet} {
      font-size: 16px;
      padding: 23px 0;
    }

    @media ${breakPoints.web} {
      font-size: 16px;
      padding: 23px 0;
    }
  }
  & ul > li.nav__list.active__page {
    color: #0d223a;
    ::after {
      display: block;
      content: " ";
      width: 100%;
      height: 2px;
      background-color: #3894ff;
      position: absolute;
      bottom: -1px;
      left: 0;
    }
  }
  color: #9d9d9d;
`;

export const Logo = styled.div`
  font-size: 16px;
  font-weight: 700;
  line-height: 1;
`;

export const Setting = styled.div`
  line-height: 0;
  padding-top: 12px;
  display: flex;
  align-items: center;

  & button {
    line-height: 0;
    margin-left: 7px;
    font-size: 14px;
    font-weight: 500;
    line-height: 23px;
    color: #999999;
  }

  .toggle {
    @media ${breakPoints.tablet} {
      position: relative;
    }

    @media ${breakPoints.web} {
      position: relative;
    }
  }

  & .alam,
  .toggle {
    @media ${breakPoints.tablet} {
      display: block;
    }

    @media ${breakPoints.web} {
      display: block;
    }
  }

  & .login-signup {
    display: none;

    span {
      font-size: 14px;
      color: #999999;

      @media ${breakPoints.tablet} {
        font-size: 16px;
      }

      @media ${breakPoints.web} {
        font-size: 16px;
      }

      :hover {
        cursor: pointer;
      }
    }
    @media ${breakPoints.tablet} {
      display: block;
    }

    @media ${breakPoints.web} {
      display: block;
    }
  }
  @media ${breakPoints.tablet} {
    padding-top: 0;
  }

  @media ${breakPoints.web} {
    padding-top: 0;
  }
`;

export const UserArvata = styled.div`
  display: none;
  width: 30px;
  height: 30px;

  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
  }

  @media ${breakPoints.tablet} {
    display: block;
  }

  @media ${breakPoints.web} {
    display: block;
  }
`;
