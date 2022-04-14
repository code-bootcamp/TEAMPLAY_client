import styled from "@emotion/styled";
import {
  ChangeEvent,
  KeyboardEvent,
  RefObject,
  useCallback,
  useRef,
} from "react";

const Textarea = styled.textarea`
  width: 100%;
  height: 30px;
  max-height: 15vh;
  padding-top: 7px;
  border: none;
  background: none;
  font-weight: 500;
  font-size: 16px;
  line-height: 18px;
  overflow: hidden;
`;

interface IProps {
  value: string | undefined;
  wrapperRef: RefObject<HTMLDivElement>;
  onChange: ((e: ChangeEvent<HTMLTextAreaElement>) => void) | undefined;
  onkeydown: (e: KeyboardEvent<HTMLTextAreaElement>) => void;
}

export function TextArea(props: IProps) {
  const textRef = useRef<HTMLTextAreaElement>(null);

  const handleResizeHeight = useCallback(() => {
    const textArea = textRef.current;
    if (!textArea) return;
    if (!textArea.value) {
      textArea.style.height = "30px";
      props.wrapperRef.current?.scrollTo(0, props.wrapperRef.current.scrollTop);
    }

    textArea.style.height = textArea.scrollHeight + "px";
    props.wrapperRef.current?.scrollTo(
      0,
      props.wrapperRef.current.scrollHeight
    );
  }, []);

  return (
    <Textarea
      ref={textRef}
      value={props.value}
      onInput={handleResizeHeight}
      onKeyPress={props.onkeydown}
      onChange={props.onChange && props.onChange}
    />
  );
}
