import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { MouseEvent, useCallback, useState } from "react";
import ProjectListUI from "./projectList.presenter";

const FETCH_PROJECTS = gql`
  query fetchProjects($page: Float!) {
    fetchProjects(page: $page) {
      id
      name
      imgUrl
      recruitDate
      isStart
      type {
        name
      }
      projectToPositions {
        id
        position {
          name
          id
        }
        number
      }
      projectMembers {
        id
      }
    }
  }
`;

const FETCH_PROJECT_COUNTS = gql`
  query fetchProjectCounts {
    fetchProjectCounts
  }
`;

export default function ProjectList() {
  const { data: fetchProjectCount } = useQuery(FETCH_PROJECT_COUNTS);
  const router = useRouter();
  const { data, fetchMore } = useQuery(FETCH_PROJECTS, {
    variables: {
      page: 1,
    },
  });

  const [detailModal, setDetailModal] = useState(false);
  const [detailId, setDetailId] = useState("");

  const onDetail = useCallback((e: MouseEvent<HTMLDivElement>) => {
    setDetailId(e.currentTarget.id);
    setDetailModal(true);
    if (router.asPath === "/project/list") {
      document.querySelector("#__next")?.classList.add("projectdetalon");
    } else {
      document.querySelector("#__next")?.classList.remove("projectdetalon");
    }
  }, []);

  const onLoadMore = () => {
    if (!data) return;
    fetchMore({
      variables: { page: Math.ceil(data.fetchProjects.length / 12) + 1 },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult.fetchProjects)
          return { fetchProjects: [...prev.fetchProjects] };

        return {
          fetchProjects: [
            ...prev.fetchProjects,
            ...fetchMoreResult.fetchProjects,
          ],
        };
      },
    });
  };

  return (
    <ProjectListUI
      data={data}
      onLoadMore={onLoadMore}
      onDetail={onDetail}
      detailModal={detailModal}
      setDetailModal={setDetailModal}
      detailId={detailId}
      fetchProjectCount={fetchProjectCount?.fetchProjectCounts}
    />
  );
}
