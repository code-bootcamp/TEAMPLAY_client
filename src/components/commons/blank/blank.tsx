import styled from "@emotion/styled";

interface IPropsDiv {
  width: number;
  height: number;
}

const Div = styled.div`
  width: ${(props: IPropsDiv) => `${props.width}px`};
  height: ${(props: IPropsDiv) => `${props.height}px`};
`;

interface IPropsBlank {
  width: number;
  height: number;
}

export default function Blank(props: IPropsBlank) {
  return <Div width={props.width} height={props.height} />;
}
