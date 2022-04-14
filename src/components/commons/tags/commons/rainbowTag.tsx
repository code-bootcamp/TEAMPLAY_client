import styled from "@emotion/styled";

interface IPropsDiv {
  backgroundColor: string;
  marginBottom: number;
}

const Div = styled.div`
  display: inline-block;

  padding: 10px 15px;
  margin-right: 12px;
  margin-bottom: ${(props: IPropsDiv) => `${props.marginBottom}px`};

  border-radius: 20px;
  background-color: ${(props: IPropsDiv) => `${props.backgroundColor}`};

  font-weight: 400;
  font-size: 1rem;
  line-height: 16px;
  color: #fff;

  :hover {
    cursor: pointer;
  }
`;

interface IPropsClickTag {
  name: string;
  marginBottom: number;
  backgroundColor: string;
  id: string;
  onClick: ((name: string) => () => void) | undefined;
}

export default function RainbowTag(props: IPropsClickTag) {
  return (
    <Div
      id={props.id}
      backgroundColor={props.backgroundColor}
      marginBottom={props.marginBottom}
      onClick={props.onClick && props.onClick(props.name)}
    >
      {props.name}
    </Div>
  );
}
