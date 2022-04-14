import {
  Dispatch,
  Fragment,
  MouseEvent,
  SetStateAction,
  useState,
} from "react";
import ClickTag from "../../../../commons/tags/commons/clickTag";
import { v4 as uuidv4 } from "uuid";
import { Label } from "../../../../commons/inputs/commons/styles";
import styled from "@emotion/styled";

interface IPropsTagBox {
  list: any;
  label: string;
  checkBox: boolean;
  valid: boolean;
  errorMessage: string;
  setValues?: Dispatch<SetStateAction<string[] | any>>
}

const ProjectTagArea = styled.div`
  display: flex;
  flex-wrap: wrap;
  row-gap: 10px;
`;

const ErroFont = styled.div`
  color: red;
  padding-top: 5px;
`;

export default function TagBox(props: IPropsTagBox) {
  const [tagValue, setTagValue] = useState("");
  const [interest, setInterest] = useState<string[]>([]);
  const onClickPushTag = (id: string) => (e: MouseEvent<HTMLDivElement>) => {
    let temp: string[] = [];
    if (props.checkBox) {
      if (interest.includes(id)) {
        temp = interest.filter((el: string) => el !== id);
        setInterest([...temp]);
        props.setValues && props.setValues("");
      } else {
        setInterest((prev: string[]) => [...prev, id]);
        props.setValues && props.setValues(e.currentTarget.id);
      }
    } else {
      if (tagValue === id) {
        setTagValue("");
        props.setValues && props.setValues("");
      } else {
        setTagValue(id);
        props.setValues && props.setValues(e.currentTarget.id);
      }
    }
  };

  return (
    <>
      <Label>{props.label}</Label>
      <ProjectTagArea>
        {props.list &&
          props.list.map((el: any) => {
            return (
              <Fragment key={uuidv4()}>
                {props.checkBox ? (
                  <ClickTag
                    name={el.name}
                    id={el.id}
                    marginBottom={0}
                    isClick={interest && interest.includes(el.id) && true}
                    onClick={onClickPushTag}
                  />
                ) : (
                  <ClickTag
                    name={el.name}
                    id={el.id}
                    marginBottom={0}
                    isClick={tagValue && tagValue === el.name && true}
                    onClick={onClickPushTag}
                  />
                )}
              </Fragment>
            );
          })}
      </ProjectTagArea>
      {props.valid && <ErroFont>{props.valid && props.errorMessage}</ErroFont>}
    </>
  );
}
