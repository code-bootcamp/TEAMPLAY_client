import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/breakpoint";

export const ProjectListBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media ${breakPoints.tablet} {
    justify-content: space-between;
  }
  padding-bottom: 300px;
  & > div {
    @media ${breakPoints.web} {
      padding: 10px;
      width: 25%;
      & > div {
        border-radius: 12px;
        box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
      }
    }
    @media ${breakPoints.tablet} {
      width: 49%;
      padding-bottom: 15px;
      & > div {
        border-radius: 12px;
        box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
      }
    }
    @media ${breakPoints.mobile} {
      width: 100%;
      padding-bottom: 15px;
      & > div {
        border-radius: 12px;
        box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
      }
    }
  }
`;

export const ProjectListTitle = styled.h4`
  display: none;
  font-size: 28px;
  padding: 50px 0 20px;
  @media ${breakPoints.web} {
    display: block;
  }
`;
