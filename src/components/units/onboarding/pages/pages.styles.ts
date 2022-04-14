import styled from "@emotion/styled";
import { IPropsTag } from "../onboarding.types";
import { breakPoints } from "../../../../commons/styles/breakpoint";

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  padding: 17px 20px 26px 20px;

  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;

  @media ${breakPoints.tablet} {
    height: 90vh;
  }

  @media ${breakPoints.web} {
    height: 90vh;
  }
`;

export const ResponseBox = styled.div`
  width: 100%;
  max-width: 1200px;

  img {
    display: none;
  }

  @media ${breakPoints.tablet} {
    display: flex;
    justify-content: space-between;
    align-items: center;
    img {
      width: 60%;
      display: block;
      border-radius: 20px;
    }
  }

  @media ${breakPoints.web} {
    display: flex;
    justify-content: space-between;
    align-items: center;
    img {
      width: 60%;
      display: block;
      border-radius: 20px;
    }
  }
`;

export const ResponseBtnBox = styled.div`
  width: 100%;
  max-width: 1200px;

  @media ${breakPoints.tablet} {
    display: flex;
    justify-content: center;
  }

  @media ${breakPoints.web} {
    display: flex;
    justify-content: center;
  }
`;

export const BackArrow = styled.div`
  width: 12px;
  height: 16px;

  margin-bottom: 50px;

  img {
    width: 100%;

    :hover {
      cursor: pointer;
    }
  }

  @media ${breakPoints.tablet} {
    width: 18px;
    height: 18px;
  }

  @media ${breakPoints.web} {
    width: 24px;
    height: 24px;
  }
`;

export const Title = styled.div`
  font-weight: 500;
  font-size: 1.286rem;
  line-height: 21px;
`;

export const Subscript = styled.div`
  font-weight: 400;
  font-size: 0.857rem;
  line-height: 14px;
  color: #999999;
`;

export const Notice = styled.div`
  font-weight: 400;
  font-size: 0.857rem;
  color: #989898;
`;

export const Looking = styled.div`
  margin-bottom: 31px;
  text-align: center;

  font-weight: 500;
  font-size: 1rem;
  line-height: 160%;
  color: #999999;
`;

export const TagArea = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const AddTag = styled.div`
  display: inline-block;
  padding: 10px 15px;
  margin-bottom: 24px;
  border: 1px dashed #999999;
  border-radius: 20px;

  font-weight: 400;
  font-size: 1rem;
  line-height: 16px;
  color: #999999;
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

export const TagInput = styled.input`
  width: 100%;

  margin-bottom: 24px;
  border-bottom: 1px solid #c4c4c4;
  padding: 13px 0px;

  font-weight: 500;
  font-size: 1rem;
  line-height: 18px;

  ::placeholder {
    font-weight: 500;
    font-size: 1rem;
    line-height: 18px;
    color: #999999;
  }
`;

export const PositionCarcBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 48px;
`;

export const PositionCard = styled.div`
  width: 104px;
  height: 110px;
  padding: 25px 25px;

  background: #f3f9ff;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
  border-radius: 12px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    display: block;
    width: 36px;
    margin-bottom: 12px;
  }

  span {
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    color: #000000;
  }
`;

export const ButtonBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;

  @media ${breakPoints.tablet} {
    width: 30%;
  }

  @media ${breakPoints.web} {
    width: 30%;
  }
`;

export const FlexBox = styled.div`
  display: flex;
  justify-content: center;
`;

export const CardBox = styled.div`
  width: 250px;
  height: 390px;
`;
