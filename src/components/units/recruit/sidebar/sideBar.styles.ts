import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/breakpoint";
import { ISideBarWrapper } from "../recruit.types";

// export const WrapperRelative = styled.div`
//     width: 100%;
//     /* height: 20vh; */
//     overflow: hidden;
//     /* position: relative; */

//     @media ${breakPoints.web}{
//         height: 0vh;
//     }
// `;

export const Wrapper = styled.div`
    width: 100%;
    height: 85vh;
    padding: 20px;

    display: flex;
    overflow: hidden;
    z-index: 3;
    position: absolute;
    right: 0px;
    left: 0px;

    bottom: ${(props:ISideBarWrapper) => `${props.locate}vw`};
    transition: all 0.3s;

    filter: drop-shadow(0px -8px 20px rgba(0, 0, 0, 0.15));
    border-radius: 20px 20px 0px 0px;
    background: #FFFFFF;

    & div > div{
        margin-right: 7px;
        cursor: pointer;
    }

    @media ${breakPoints.web}{
        max-width: 1200px;
        margin: 0 auto;
        width: 35%;
        height: 54vh;
        left: -742px;
        margin-bottom: 300px;
    }
`
export const TopNavi = styled.div`
    display: flex;
`
// export const XMark = styled.img`
//     width: 14px;
//     height: 12px;

//     :hover{
//         cursor: pointer;
//     }
// `