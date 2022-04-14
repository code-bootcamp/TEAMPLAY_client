import { Label } from "../../../../commons/inputs/commons/styles";
import styled from "@emotion/styled";
import { v4 as uuidv4 } from "uuid";
import { breakPoints } from "../../../../../commons/styles/breakpoint";
import { memo } from "react";

const RecruitmentStyle = styled.div`
  padding: 20px 0;
  width: 100%;
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  & > div:last-child {
    padding-bottom: 0;
  }
  @media ${breakPoints.tablet} {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
  @media ${breakPoints.web} {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

const RecruitmentAddBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

const RecruitmentAddStyle = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const RecruitmentWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;

const RecruitmentAddList = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding-bottom: 10px;
  @media ${breakPoints.tablet} {
    width: 50%;
  }
  @media ${breakPoints.web} {
    width: 50%;
  }
  & span {
    display: block;
  }
  & input {
    border: 1px solid #ccc;
    height: 30px;
    padding: 10px;
    border-radius: 5px;
    margin-left: 10px;
    transition: 0.4s;
    &:focus {
      border-color: #3894ff;
    }
  }
`;

const ErroFont = styled.div`
  color: red;
  padding-top: 5px;
`;

interface IPropsPositionMap {
  valid: boolean;
  errorMessage: string;
  label: string;
  optionList?: string[];
  addBox: boolean;
  onchangeValue: () => void;
}

const RecruitForms = memo((props: IPropsPositionMap) => {
  return (
    <>
      <Label>{props.label}</Label>
      <RecruitmentWrapper>
        <RecruitmentAddStyle>
          <RecruitmentAddBox>
            <RecruitmentStyle className="position">
              {props.optionList &&
                props.optionList.map((el: any, index) => {
                  return (
                    <RecruitmentAddList key={uuidv4()}>
                      <span>{el.name}</span>
                      <input
                        onChange={(e) => {
                          if(Number(e.target.value) < 0){
                            e.target.value = String(0)
                          } 
                         }
                        }
                        id={el.id}
                        className={`${index}position${index}`}
                        type="number"
                        placeholder={`${el.name} 모집 인원수`}
                        defaultValue={0}
                      />
                    </RecruitmentAddList>
                  );
                })}
            </RecruitmentStyle>
          </RecruitmentAddBox>
        </RecruitmentAddStyle>
      </RecruitmentWrapper>
      {props.valid && <ErroFont>{props.valid && props.errorMessage}</ErroFont>}
    </>
  );
});

export default RecruitForms;
