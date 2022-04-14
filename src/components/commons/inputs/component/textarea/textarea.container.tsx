import styled from "@emotion/styled";
import { Dispatch, SetStateAction } from "react";
import { Label } from "../../commons/styles";

const TextAreaStyle = styled.textarea`
  border: 1px solid #999;
  width: 100%;
  height: 210px;
  border-radius: 12px;
  padding: 10px;
  transition: 0.4s;
  :focus {
    border-color: #3894ff;
  }
`;
interface IPropsTextArea {
  label: string;
  setValues?: Dispatch<SetStateAction<string>>;
}

export default function TextArea(props: IPropsTextArea) {
  return (
    <>
      <Label>{props.label}</Label>
      <TextAreaStyle
        onChange={(e) => props.setValues && props.setValues(e.target.value)}
      />
    </>
  );
}
