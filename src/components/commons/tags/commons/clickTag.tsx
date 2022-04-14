import styled from "@emotion/styled";
import { MouseEvent } from "react";

interface IPropsDiv {
  marginBottom: number;
  isClick: boolean | string | undefined;
}

const Div = styled.div`
  display: inline-block;
  padding: 10px 20px;
  margin-right: 12px;
  margin-bottom: ${(props: IPropsDiv) => `${props.marginBottom}px`};

  border-radius: 20px;
  border: ${(props: IPropsDiv) =>
    `${props.isClick ? "1px solid #fff" : "1px solid #999"}`};
  background-color: ${(props: IPropsDiv) =>
    `${props.isClick ? "#3894FF" : "#fff"}`};

  font-weight: 400;
  font-size: 1rem;
  color: ${(props: IPropsDiv) => `${props.isClick ? "#fff" : "#999"}`};

  :hover {
    cursor: pointer;
  }
`;

interface IPropsClickTag {
  name: string;
  marginBottom: number;
  isClick: boolean | string | undefined;
  id?: string | undefined;
  onClick:
    | ((name: string) => (e: MouseEvent<HTMLDivElement>) => void)
    | undefined;
}

export default function ClickTag(props: IPropsClickTag) {
  return (
    <Div
      id={props.id}
      isClick={props.isClick}
      marginBottom={props.marginBottom}
      onClick={props.onClick && props.onClick(props.name)}
    >
      {props.name}
    </Div>
  );
}
