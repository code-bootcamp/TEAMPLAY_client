import styled from "@emotion/styled";
import { breakPoints } from "../../../commons/styles/breakpoint";
import { IPropsTag } from "./recruit.types";

// export const Opacity = styled.div`
//   display: ${(props: IPropsRecruitContext) => (props.isVisible ? "block" : "none")};
//   position: absolute;
//   z-index: 1;
//   left: 0px;
//   right: 0px;
//   width: calc(50% -240px);
//   height: 100vh;
//   background-color: white;
// `;
export const MainBox = styled.div`
    width: 100%;
    overflow-x: hidden;
`

export const TopText = styled.div`
    @media ${breakPoints.mobile}{
        display: none;
    }

    @media ${breakPoints.tablet}{
        display: none;
    }

    @media ${breakPoints.web}{
        padding: 20px;

        max-width: 1200px;
        margin: 0 auto;

        span{
            font-size: 28px;
            color: #0D223A
        }
    }
`

export const Wrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;

  /* position: relative;
  overflow: hidden; */
`

export const SearchBarWrapper = styled.div`
    width: 100%;
    padding: 10px 0;
`

export const TagArea = styled.div`
    width: 100%;

    display: flex;
    flex-wrap: wrap;

    padding: 0px 10px 0px;
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

export const SearchBar = styled.div`
    width: 100%;

    display: flex;
    justify-content: space-between;
    padding-bottom: 10px;

    img{
        cursor: pointer;
    }
    
    @media (min-width: 1200px) {
        border-bottom: 1px solid #ccc;
    }

    @keyframes present {
        from {
            width: 20%;
            border: none;
        }
        to {
            width: 30%;
            border: 1px solid black;
        }
    }
    @keyframes disappear {
        from {
            width: 30%;
            border: 1px solid black;
        }
        to {
            width: 20%;
            border: none;
        }
    }
`

export const SearchInputBar = styled.div`
    width: 80%;
    
    display: flex;
    align-items: center;
    padding: 5px 0px 5px 15px;
    margin-right: 10px;
    

    border: 1px solid #999999;
    border-radius: 20px;

    input{
        font-size: 12px;
        color: #999999;
    }

    img{
        padding-right: 10px;
    }
`

export const RecruitTop = styled.div`
    width: 100%;
`
export const Contents = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    font-weight: 900;
    padding: 24px 0 15px;
    & > h3 {
        font-size: 20px;
        display: flex;
        align-items: center;
    }
    & > h3 > img {
        margin-left: 5px;
    }

    @media ${breakPoints.web}{
        display: none;
    }
`
export const MultiSlide2 = styled.div`
    @media ${breakPoints.web}{
        display: none;
    }
`
export const WebSlideList = styled.div`
    @media ${breakPoints.mobile}{
        display: none;
    }

    @media ${breakPoints.tablet}{
        display: none;
    }
    
    @media ${breakPoints.web}{
        display: grid;
        grid-template-columns: repeat(5,1fr);
        grid-gap: 20px 15px;

        cursor: pointer;
    }
`

export const RecruitBottom = styled.div``
