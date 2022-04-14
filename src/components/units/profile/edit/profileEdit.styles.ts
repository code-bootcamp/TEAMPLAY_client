import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/breakpoint";

export const TopEditText = styled.div`
  @media ${breakPoints.mobile}{
    display: none;
  }

  @media ${breakPoints.tablet}{
    display: none;
  }

  @media ${breakPoints.web}{
    margin: 11px 0px 11px 24px;
    background-color: #3894FF;

    max-width: 1200px;
    margin: 0 auto;
    margin-top: 10px;
    padding: 10px;

    span{
      height: 18px;
      left: 20%;
      right: 71.51%;
      top: 92px;
      font-size: 16px;
      line-height: 18px;

      color: white;
    }
  }
`

export const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    padding: 17px 20px 26px 20px;
    
    overflow: auto;
    position: relative;
    z-index: 1;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    
    @media ${breakPoints.web}{
      max-width: 1200px;
      margin: 0 auto;
      
      & > div {
        display: flex;
        margin-top: 30px;
      }
    }
`
export const FirstDiv = styled.div`

@media ${breakPoints.web} {
  display: none;
}
`
export const SecondDiv = styled.div`
  
  @media ${breakPoints.web} {
    margin: 50px 150px;
  }
`
export const ThirdDiv = styled.div`

@media ${breakPoints.web}{
    width: 100%;
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

   span {
     display: none;
   }
  }
`;
export const ImgBox = styled.div`
  height: 30vw;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 85%;
    height: 80%;
    border-radius: 50%;
    :hover {
      cursor: pointer;
    }
  }

  @media ${breakPoints.web}{
    height: 15vw;
    width: 200px;
  }
`;
export const Name = styled.div`
  span{
    font-size: 24px;
  }

  @media ${breakPoints.web}{
    margin: 0px 0px 0px 50px
  }
`
export const Tendency = styled.div`
  span{
    font-size: 16px;
  }
`
export const Position = styled.div`
  span{
    font-size: 16px;
  }
`
export const Interest = styled.div`
  span{
    font-size: 16px;
  }
`
export const Technic = styled.div`
  span{
    font-size: 16px;
  }
`
export const TagArea = styled.div`
  display: flex;
  flex-wrap: wrap;
  
`
export const EditTag = styled.div`
  display: inline-block;
  padding: 10px 15px;
  border: 1px dashed #999999;
  border-radius: 50%;

  font-weight: 400; 
  font-size: 1rem;
  cursor: pointer;
  color: #999999;
`
export const BtnBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 30px;
  margin-bottom: 30px;

  @media ${breakPoints.web}{
    display: flex;
    flex-direction: column-reverse;
    flex-flow: row-reverse;
    justify-content: flex-start;

    .SubmitBtn{
      width: 400px;
      display: flex;
      flex-direction: inherit;
    }
  }
`;
export const InfoEdit = styled.div`
  display: flex;
  justify-content: center;

  span{
    font-size: 16px;
    border-bottom: 1px solid gray;
    color: #999999;
    cursor: pointer
  }

  @media ${breakPoints.web}{
    margin: 10px;
  }
`