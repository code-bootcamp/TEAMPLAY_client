import styled from "@emotion/styled";
import { Dispatch, SetStateAction } from "react";
import { Label } from "../../commons/styles";

const TypingInputStyle = styled.div`
  display: flex;
  flex-direction: column;
`;

const TextInput = styled.input`
  border-bottom: 1px solid #c4c4c4;
  padding-bottom: 6px;
  transition: 0.4s;
  &::placeholder {
    font-size: 14px;
    color: #999;
    font-weight: 600;
  }
  &:focus {
    border-color: #3894ff;
  }
`;

const ErroFont = styled.span`
  color: red;
  padding-top: 5px;
`;

interface IPropsTypingInput {
  label?: string;
  type?: string;
  placeholder?: string;
  setValues?: Dispatch<SetStateAction<string>>;
  id?: string;
  errorMessage?: string;
  valid?: boolean | string;
}

export default function TypingInput(props: IPropsTypingInput) {
  return (
    <TypingInputStyle id={props.id && props.id}>
      <Label>{props.label}</Label>
      <TextInput
        onChange={(e) => {
          if (props.setValues) {
            props.setValues(e.target.value);
          }
        }}
        type={props.type}
        placeholder={props.placeholder}
      />
      {props.valid && <ErroFont>{props.valid && props.errorMessage}</ErroFont>}
    </TypingInputStyle>
  );
}
