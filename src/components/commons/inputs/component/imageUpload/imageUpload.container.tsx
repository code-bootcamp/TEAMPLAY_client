import { gql, useMutation } from "@apollo/client";
import styled from "@emotion/styled";
import { Dispatch, SetStateAction, ChangeEvent, useRef, useState } from "react";
import {
  IMutation,
  IMutationUploadFileArgs,
} from "../../../../../commons/types/generated/types";
import { Label } from "../../commons/styles";

const FileInput = styled.input`
  display: none;
`;

const CautionFont = styled.span`
  color: #3894ff;
  padding-top: 5px;
  font-size: 12px;
`;

const ImageBox = styled.div`
  width: 100%;
  max-width: 500px;
  height: 180px;
  color: #fff;
  flex-direction: column;
  text-align: center;
  position: relative;
  display: flex;
  justify-content: center;
  border-radius: 12px;
  overflow: hidden;
  background-color: #999;
  position: relative;
  cursor: pointer;
  & > div > div {
    color: #fff;
  }
  & img.upload__image {
    width: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  :after {
    display: block;
    content: " ";
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    transition: ease-in-out 0.5s;
    background: rgba(0, 0, 0, 0.3) url("/img/add.svg") no-repeat center/auto;
  }
  :hover::after {
    opacity: 1;
  }
`;

interface IPropsImageUpload {
  label: string;
  setValues?: Dispatch<SetStateAction<string>>;
}

const UPLOADE_FILE = gql`
  mutation uploadFile($files: [Upload!]!) {
    uploadFile(files: $files)
  }
`;

export default function ImageUpload(props: IPropsImageUpload) {
  const refFile = useRef<HTMLInputElement>(null);
  const refImage = useRef<HTMLImageElement>(null);
  const [uploadFile] = useMutation<
    Pick<IMutation, "uploadFile">,
    IMutationUploadFileArgs
  >(UPLOADE_FILE);

  const [imgSrc, setImgSrc] = useState("../img/image_upload.svg");

  const onFileUpload = () => {
    const refCurret = refFile.current;
    if (refCurret) refCurret.click();
  };

  const onChangeFileUpload = async (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files: any = e.target.files;
      const reader = new FileReader();
      reader.readAsDataURL(e.target.files?.[0]);
      reader.onload = (e) => {
        if (typeof e?.target?.result === "string") setImgSrc(e?.target?.result);
      };
      try {
        const result = await uploadFile({
          variables: { files },
        });
        result.data &&
          props.setValues &&
          props.setValues(result && result.data.uploadFile[0]);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <>
      <Label>
        <div>{props.label}</div>
        <CautionFont>
          * 이미지를 업로드 하지 않으면 기본 이미지로 설정됩니다.
        </CautionFont>
      </Label>
      <div>
        <ImageBox onClick={onFileUpload}>
          {imgSrc !== "../img/image_upload.svg" ? (
            <img
              ref={refImage}
              src={imgSrc}
              alt="preview image upload"
              className="upload__image"
            />
          ) : (
            <div>
              <img
                src="../img/image_upload.svg"
                alt="preview upload before image"
              />
              <div>프로젝트를 대표할 이미지를 첨부해주세요.</div>
            </div>
          )}
        </ImageBox>
        <FileInput onChange={onChangeFileUpload} ref={refFile} type="file" />
      </div>
    </>
  );
}
