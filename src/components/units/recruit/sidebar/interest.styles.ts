import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/breakpoint";
import { IPropsTag, ISideBarWrapper } from "../recruit.types";

export const Wrapper = styled.div`
    width: 100%;
    height: 85vh;
    padding: 20px;

    display: flex;
    overflow: hidden;
    z-index: 2;
    position: fixed;
    right: 0px;
    left: 0px;

    bottom: ${(props:ISideBarWrapper) => `${props.interestLocate}vw`};
    transition: all 0.3s;

    /* filter: drop-shadow(0px -8px 20px rgba(0, 0, 0, 0.15)); */
    /* border-radius: 20px 20px 0px 0px; */
    background: #FFFFFF;;

    & div > div{
        margin-right: 24px;
        cursor: pointer;
    }

    @media ${breakPoints.web}{
      height: 62vh;
    }
`
export const MainBox = styled.div`
    /* display: flex; */
    flex-direction: column;
`
export const Header = styled.div`
    display: flex;
    justify-content: space-between;
`
export const RefreshBox = styled.div`
    display: flex;

    img{
        width: 12px;
        height: 12px;
    }
    
    span{
        font-size: 12px;
        color: #A1A1A1;
        padding-left: 8px;
    }

    :hover{
        cursor: pointer;
    }
`
export const XMark = styled.img`
    width: 14px;
    height: 12px;

    :hover{
        cursor: pointer;
    }
`
export const Title = styled.div`
    span{
        font-size: 16px;
        color: #6B6B6B;
        margin-right: 24px;
    }
`
export const TagArea = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
export const Tag = styled.div`
  display: flex;

  padding: 10px 15px;
  margin-right: 12px;
  margin-bottom: 15px;

  border-radius: 20px;
  background-color: ${(props: IPropsTag) => `${props.bgColor}`};

  span {
    font-weight: 400;
    font-size: 1rem;
    line-height: 16px;
    color: #fff;
  }

  div {
    width: 15px;
    height: 15px;
    text-align: center;
    margin-left: 8px;
    border-radius: 50%;
    background-color: #999;
    font-size: 1rem;
    color: #fff;
  }

  :hover {
    cursor: pointer;
  }
`;
export const BtnBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
