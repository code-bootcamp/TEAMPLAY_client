import styled from "@emotion/styled";
import { breakPoints } from "../../../../../commons/styles/breakpoint";
import { IPropsTag, ISidebarWrapper } from "../profileEdit.types";


export const Wrapper = styled.div`
    width: 100%;
    height: 100vh;
    padding: 20px;

    display: flex;
    z-index: 2;
    position: absolute;
    left: 0px;

    bottom: ${(props:ISidebarWrapper) => `${props.area}vw`};
    transition: all 0.3s;

    filter: drop-shadow(0px -8px 20px rgba(0, 0, 0, 0.15));
    border-radius: 20px 20px 0px 0px;
    background: #FFFFFF;;

    @media ${breakPoints.web} {
      position: inherit;
      /* height: 13vw; */
      height: 200px;
      filter: none;

      &.PositionBlank{
        /* height: 9vw; */
        height: 130px;
      }
  
      &.InterestBlank{
        /* height: 15vw; */
        height: 200px;
      }
      &.TechnicBlank{
        margin-bottom: 40px;
      }
    }
    
`
export const MainBox = styled.div`
    flex-direction: column;

    @media ${breakPoints.web} {
      width: auto;
      position: absolute;
      .NoneBlank{
        display: none;
      }
    }
`
export const Header = styled.div`
    display: flex;
    justify-content: space-between;

    @media ${breakPoints.web}{
      display: none;
    }
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
    }

    @media ${breakPoints.web}{
      span{
        display: none;
      }
    }
`
export const TagArea = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
export const WebTag = styled.div`
  @media ${breakPoints.web}{
    display: flex;
    flex-direction: column;

    margin-top: 10px;

    > div {
      margin-bottom: 10px;
    }
  }
`
export const TagBox = styled.div`
  display: flex;
`
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

export const NormalTag = styled.div`
  display: flex;

  padding: 10px 15px;
  margin-right: 12px;
  margin-bottom: 15px;

  border-radius: 20px;

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

  @media ${breakPoints.web} {
    display: none;
  }
`;

