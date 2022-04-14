import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/breakpoint";
import { IPropsProfileEditContext } from "../edit/profileEdit.types";

export const Wrapper = styled.div`
    width: 100%;
`
export const WrapperHeader = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;  
`;
export const HeaderLine = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 20px;
    span{
        font-size: 20px;
    }
    img{
      :hover{
        cursor: pointer;
      }
    }

    @media ${breakPoints.web}{
      display: flex;
      .Arrow{
          display: none;
      }
    }
`
export const HeaderContents = styled.div`
    width: 100%;
    display: flex;
    padding: 20px 0px 0px 0px;

    @media ${breakPoints.web}{
      padding: 0px 0px;
      height: 9vw;
    }
`
export const WebAboutMe = styled.div`

   @media ${breakPoints.mobile}{
        display: none;
    }

    @media ${breakPoints.tablet}{
      display: none;
    }
`
export const NoneWebVisible = styled.div`

`
export const WebVisible = styled.div`
  @media ${breakPoints.mobile}{
    display: none;
  }
  @media ${breakPoints.tablet}{
    display: none;
  }
  @media ${breakPoints.web}{}
`
export const WebBottomAboutme = styled.div`
  @media ${breakPoints.web}{
    display: none;
  }
`
export const ImgBox = styled.div`
  width: 35%;
  height: 30vw;
  margin-left: 20px;
  img {
    width: 85%;
    height: 80%;
    border-radius: 50%;
  }

  @media ${breakPoints.web} {
    width: 25%;
    height: 100%;

    img{
      width: 70%;
      height: 100%;
    }
  }
`;
export const InfoBox = styled.div`
  width: 65%;
  margin: 0px 20px 30px 0px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  @media ${breakPoints.web} {
    width: 65%;
    justify-content: flex-start;
    justify-content: space-evenly;
    height: 10vw;
  }
`;
export const Name = styled.div`
  width: 100%;

  span {
    font-size: 24px;
    font-weight: bold;
    color: #c4c4c4;
  }
`;
export const Position = styled.div`
  width: 100%;
  padding: 10px 0px;
  span {
    font-size: 16px;
    margin-right: 12px;
  }
  img {
    margin-right: 8px;
  }
`;
export const Tag = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
`;
export const LineBox = styled.div`
  width: 100%;
  display: flex;
  border-top: 0.75px solid #ededed;
  border-bottom: 0.75px solid #ededed;
  transform: rotate(0.05deg);

  @media ${breakPoints.web}{
    display: none;
  }
`;
export const Detail = styled.div`
  width: 100%;
  display: flex;
  padding: 15px 0px 15px 0px;
  span {
    font-size: 16px;
    color: #bbbbbb;
    display: block;
    width: 50%;
    text-align: center;
    :hover{
      cursor: pointer;
      color: #0D223A;
    }
  }
`;
export const AboutMeWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 24px 20px 20px 20px;

    @media ${breakPoints.web}{
        /* display: ${(props: IPropsProfileEditContext) => (props.isvisible ? "About me" : "")}; */
      /* .WebAboutMe{} */
    }
`
export const Top = styled.div`
    width: 100%;
    margin-bottom: 20px;
`
export const TopHeader = styled.div`
    width: 100%;
    margin-bottom: inherit;
    span{
        font-size: 18px;
    }
`
export const TopTagBox = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-start;
    padding: 10px;
    
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
    border-radius: 12px;
`
export const Middle = styled.div`
    width: 100%;
    margin-bottom: 20px;
`
export const MiddleHeader = styled.div`
    margin-bottom: inherit;
    span{
        font-size: 18px;
    }
`
export const MiddleTagBox = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    row-gap: 10px;
    column-gap: 2em;
    padding: 20px;
    
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
    border-radius: 12px;
`
export const Bottom = styled.div`
    width: 100%;

    @media ${breakPoints.web}{
        display: none;
    }
`
export const BottomHeader = styled.div`
    margin-bottom: 20px;
    span{
        font-size: 18px;
    }   
`
export const BottomInnerBox = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    row-gap: 10px;
    column-gap: 2em;
    padding: 20px;

    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
    border-radius: 12px;
`
export const WebProject = styled.div`
  @media ${breakPoints.mobile}{
    display: none;
  }

  @media ${breakPoints.tablet}{
    display: none;
  }

  @media ${breakPoints.web}{
    span{
      font-size: 24px;
      padding: 27px;
    }
  }
`
export const ProjectWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 5px 20px 20px 20px;
`
export const Header = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    img {
        margin-right: 8px;
        :hover{
            cursor: pointer;
        }
    }

    @media ${breakPoints.web}{
        img{
            display: none;
        }
    }
`
export const ProjectBox = styled.div`
    width: 100%;
    margin: 0 auto;
    column-count: 2;
    column-gap: 20px;

    @media ${breakPoints.tablet} {
        column-count: 3;
        column-gap: 20px;
    }

    @media ${breakPoints.web} {
        padding: 27px;

        column-count: 4;
        column-gap: 20px;
        
        max-width: 1200px;
        margin: 0 auto;

        background: #FFFFFF;
        box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
        border-radius: 20px;
    }
`

export const ProjectImgItem = styled.div`
    margin: 0 0 20px 0;
    line-height: 0;    

    img {
        width: 100%;
        height: 80%;
        border-radius: 15px;
        margin-bottom: 12px;
        overflow: hidden;
        box-shadow: 0 8px 20px -15px #000;
    }
`
