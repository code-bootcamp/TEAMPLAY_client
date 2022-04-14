import styled from "@emotion/styled";

interface IPropsImg {
  width: number;
  height: number;
}

const Img = styled.img`
  width: ${(props: IPropsImg) => `${props.width}px`};
  height: ${(props: IPropsImg) => `${props.height}px`};
  position: absolute;
  top: 0;
  right: 0;

  :hover {
    cursor: pointer;
  }
`;

interface IPropsXmark {
  width: number;
  height: number;
}

export default function Xmark(props: IPropsXmark) {
  return (
    <Img
      src="/img/preview/Xmark.svg"
      width={props.width}
      height={props.height}
    />
  );
}
