import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/breakpoint";

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  padding: 17px 20px 26px 20px;
  
  /* overflow: hidden;
  position: relative;
  z-index: 1; */

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media ${breakPoints.web}{
    max-width: 1200px;
    margin: 0 auto;
  }
`
export const HeaderLine = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 32px;

  img {
    height: 16px;
    :hover {
      cursor: pointer;
    }
  }

  span {
    font-size: 20px;
  }

  div{}

  @media ${breakPoints.web}{
    img{
      display: none;
    }
  }
`;
export const ProgressTitle = styled.div`
  width: 100%;
  margin: 0 auto;
  /* padding: 0px 20px 24px; */

  span{
    font-size: 18px;
  }
`
export const ProgressList = styled.div`
  margin-bottom: 20px;
  
  @media ${breakPoints.web}{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 10px 20px;
    margin-top: 10px;
  }
`
export const WebLine = styled.div`
  @media ${breakPoints.mobile}{
    display: none;
  }
  @media ${breakPoints.tablet}{
    display: none;
  }
  @media ${breakPoints.web}{
    max-width: 1200px;
    margin: 0 auto;
    margin: 36px 0px 36px 0px;
    border-bottom: 1px solid #E9E9E9;
  }
`
export const ProgressBox = styled.div`
  padding: 16px 12px;

  background: #FFFFFF;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
  border-radius: 12px;
`
export const ProgressHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 10px;
`
export const HeaderLeftBox = styled.div``

export const TagBox = styled.div`
    display: flex;
    padding-bottom: 16px;
    justify-content: space-between;
    & > div{
        display: flex;
    }
`
export const ProjectTitleDate = styled.div`
  display: flex;
  flex-direction: column;

  div{
    font-size: 16px;
    padding-bottom: 4px;
  }

  span{
    font-size: 8px;
    color: #999999
  }
`
export const HeaderRigthBox = styled.div`
  width: 35%;
  /* height: 20vw; */

  img{
    width: 100%;
    height: 100%;
  }
`
export const PercentBox = styled.div`
  width: 100%;
  background-color: #e9e9e9;
  border-radius: 30px;
`
export const ProgressPercent = styled.div`
  background-color: #3894FF;
  color: #fff;
  border-radius: 30px;
  font-size: 8px;
  width: 23%;
  padding:3px 5px;
`
export const Memberbox = styled.div`
  padding: 15px 0;
    & > li{
        display: flex;
        width: 100%;
        padding-bottom: 10px;
        align-items: center;
        font-size: 12px;
        &:last-child{
            padding-bottom: 0;
            flex-wrap: wrap;
        }
    }
`
export const MemberPosition = styled.div`
  width: 15%;
  font-weight: 500;
`
export const MemberInfoValue = styled.div`
  width: 70%;
  color: #999;
`
export const ProgressWrapper = styled.div`
  margin-bottom: 18px;
`

export const DoneWrapper = styled.div`
  margin-bottom: 18px;
`
