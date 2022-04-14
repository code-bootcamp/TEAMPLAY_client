import styled from "@emotion/styled";

interface IPropsButtonStyle {
  bgColor: string;
  type: string;
}

const ButtonStyle = styled.button`
  width: 100%;
  padding: 10px 0;
  background-color: ${(props: IPropsButtonStyle) => props.bgColor};
  color: #fff;
  border-radius: 26px;
  font-size: 20px;
  margin: 40px 0 15px;
  margin-right: 8px;
  font-family: normal;
  max-width: 375px;
`;

interface IPropsSubmitButton {
  btnvalue?: string;
  type?: "button" | "submit" | "reset";
  bgColor?: string;
  onClick?: () => void
}

export default function SubmitButton(props: IPropsSubmitButton) {
  return (
    <ButtonStyle
      onClick={props.onClick ? props.onClick : () => {}}
      bgColor={props.bgColor ? props.bgColor : "#3894ff"}
      type={props.type ? props.type : "submit"}
    >
      {props.btnvalue}
    </ButtonStyle>
  );
}
