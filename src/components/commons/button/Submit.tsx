import styled from "@emotion/styled";

interface IPropsButton {
  fontSize: number;
  backgroundcolor: string;
}

const Button = styled.button`
  width: 100%;
  padding: 12px 0px;
  background-color: ${(props: IPropsButton) => `${props.backgroundcolor}`};
  color: #fff;
  border-radius: 20px;
  font-size: ${(props: IPropsButton) => `${props.fontSize}rem`};
`;

interface IPropsSubmitButton {
  name: string;
  fontSize: number;
  backgroundcolor: string;
  isActive: boolean;
  onClick: (() => void) | undefined;
}

export default function SubmitBtn(props: IPropsSubmitButton) {
  return (
    <Button
      disabled={props.isActive}
      fontSize={props.fontSize}
      backgroundcolor={props.backgroundcolor}
      onClick={props.onClick}
    >
      {props.name}
    </Button>
  );
}
