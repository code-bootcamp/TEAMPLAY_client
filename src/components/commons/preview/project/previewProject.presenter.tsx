import SquareTag from "../../tags/commons/squareTag";
import * as S from "./previewProject.styles";
import SubmitButton from "../../inputs/component/submitbutton/submit.container";
import {
  ProjectInfoKey,
  ProjectInfoValue,
} from "../../../units/project/management/projectManage.styles";
import { v4 as uuidv4 } from "uuid";
import { IPropsPreviewProjectUI } from "./previewProject.types";

export default function PreviewProjectUI(props: IPropsPreviewProjectUI) {
  let recuriteNumber = 0;
  if (props.data?.fetchProject?.projectToPositions) {
    for (
      let i = 0;
      i < props.data?.fetchProject?.projectToPositions?.length;
      i++
    ) {
      recuriteNumber =
        recuriteNumber + props.data?.fetchProject?.projectToPositions[i].number;
    }
  }
  return (
    <S.Wrapper id="detail__modal">
      <S.Modal>
        <S.ImgBox>
          {props.data?.fetchProject.imgUrl &&
          !props.data?.fetchProject.imgUrl.includes(
            "cdn-cashy-static-assets.lucidchart.com/"
          ) ? (
            <S.Img
              src={`https://storage.googleapis.com/${props.data?.fetchProject.imgUrl}`}
              alt={props.data?.fetchProject.name}
            />
          ) : (
            <S.Img src={props.data?.fetchProject.imgUrl} />
          )}
          <S.OffButton
            onClick={() => {
              props.setDetailModal(false);
              document
                .querySelector("#__next")
                ?.classList.remove("projectdetalon");
            }}
          >
            <S.Img
              src="/img/down-arrow.svg"
              className="Xmark"
              alt="down-arrow"
            />
          </S.OffButton>
        </S.ImgBox>
        <S.TitleBox>
          <div>
            <SquareTag
              bgColor={props.day <= 0 ? "#ccc" : "#3894FF"}
              size={1}
              name={props.day <= 0 ? "마감" : `D-${props.day}`}
            />
          </div>
          <S.Title>
            <span>{props.data?.fetchProject.name}</span>
          </S.Title>
          <S.Remarks>
            <span>{props.data?.fetchProject.intro}</span>
          </S.Remarks>
          <S.TagBox>
            <SquareTag
              name={props.data?.fetchProject?.type.name}
              size={1}
              bgColor="#ccc"
            />
          </S.TagBox>
        </S.TitleBox>
        <S.ProjectListInfo>
          <li>
            <ProjectInfoKey>팀명</ProjectInfoKey>
            <ProjectInfoValue>
              {props.data?.fetchProject?.teamname}
            </ProjectInfoValue>
          </li>
          <li>
            <ProjectInfoKey>팀장</ProjectInfoKey>
            <ProjectInfoValue>
              {props.data?.fetchProject?.leader.name}
            </ProjectInfoValue>
          </li>
          <li>
            <ProjectInfoKey>활동 지역</ProjectInfoKey>
            <ProjectInfoValue>
              {props.data?.fetchProject?.location.name}
            </ProjectInfoValue>
          </li>
          <li>
            <ProjectInfoKey>진행 방식</ProjectInfoKey>
            <ProjectInfoValue>
              {props.data?.fetchProject?.method === "MEET" && "대면"}
              {props.data?.fetchProject?.method === "UNTACT" && "비대면"}
              {props.data?.fetchProject?.method === "MEDIATE" && "조정 가능"}
            </ProjectInfoValue>
          </li>
        </S.ProjectListInfo>
        <S.TeamInfoBox>
          <S.InfoName>{recuriteNumber}명 구인 중</S.InfoName>
          <S.WantedBox>
            {props.data?.fetchProject?.projectToPositions &&
              props.data?.fetchProject?.projectToPositions.map((el) => {
                return (
                  <S.ProfileBox key={uuidv4()}>
                    <div>
                      <img src="/img/preview/user1.png" />
                      <div>{el.position.name}</div>
                    </div>
                    <div>
                      <span>{el.number}</span>명 모집중
                    </div>
                  </S.ProfileBox>
                );
              })}
          </S.WantedBox>
        </S.TeamInfoBox>
        <S.DescriptionBox>
          <h3>상세 설명</h3>
          <div>{props.data?.fetchProject.description}</div>
        </S.DescriptionBox>
        <S.SubmitBox onClick={props.onClickChatStart}>
          <SubmitButton btnvalue="팀플 참여하기" bgColor="#3894ff" />
        </S.SubmitBox>
      </S.Modal>
    </S.Wrapper>
  );
}
