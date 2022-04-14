import SearchBar from "../../../commons/searchbar/searchbar.container";
import { v4 as uuidv4 } from "uuid";
import { Wrapper } from "../../../../commons/styles/commonStyls";
import WriteGoButton from "../../../commons/inputs/component/write_button/write_button";
import * as S from "./projectList.styles";
import { IQuery } from "../../../../commons/types/generated/types";
import InfiniteScroll from "react-infinite-scroller";
import { Dispatch, MouseEvent, SetStateAction } from "react";
import PreviewProject from "../../../commons/preview/project/previewProject.container";
import ProjectCard from "../projectCard/projectCard";

interface IPropsProjectListUI {
  data: Pick<IQuery, "fetchProjects">;
  onLoadMore: any;
  onDetail: (e: MouseEvent<HTMLDivElement>) => void;
  detailModal: boolean;
  setDetailModal: Dispatch<SetStateAction<boolean>>;
  detailId: string;
  fetchProjectCount?: number;
}

export default function ProjectListUI(props: IPropsProjectListUI) {  
  return (
    <>
      <Wrapper paddingTop={0}>
        <S.ProjectListTitle>모든 프로젝트</S.ProjectListTitle>
        <SearchBar fetchProjectCount={props.fetchProjectCount} />
        <WriteGoButton />
        <InfiniteScroll
          loadMore={props.onLoadMore}
          hasMore={true}
          pageStart={1}
        >
          <S.ProjectListBox>
            {props?.data &&
              props?.data.fetchProjects.map((el:any) => {
                return (
                el.isStart ? null :
                  <div key={uuidv4()}>
                    <ProjectCard
                      id={el.id}
                      name={el.name}
                      imgUrl={el.imgUrl}
                      type={el.type.name}
                      recruitDate={el.recruitDate}
                      projectToPositions={el.projectToPositions}
                      projectMembers={el?.projectMembers}
                      onDetail={props.onDetail}
                    />
                  </div>
                );
              })}
          </S.ProjectListBox>
        </InfiniteScroll>
      </Wrapper>
      {props.detailModal && (
        <PreviewProject
          detailId={props.detailId}
          setDetailModal={props.setDetailModal}
        />
      )}
    </>
  );
}
