import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { Dday } from "../../../../commons/library/calcDate";
import {
  IMutation,
  IMutationJoinChatRoomArgs,
  IQuery,
  IQueryFetchProjectArgs,
} from "../../../../commons/types/generated/types";
import PreviewProjectUI from "./previewProject.presenter";
import { FETCH_PROJECT, JOIN_CHATROOM } from "./previewProject.queries";
import { IPropsPreviewProject } from "./previewProject.types";

export default function PreviewProject(props: IPropsPreviewProject) {
  const router = useRouter();

  const { data } = useQuery<
    Pick<IQuery, "fetchProject">,
    IQueryFetchProjectArgs
  >(FETCH_PROJECT, {
    variables: {
      projectId: props.detailId,
    },
  });

  const [joinChatRoom] = useMutation<
    Pick<IMutation, "joinChatRoom">,
    IMutationJoinChatRoomArgs
  >(JOIN_CHATROOM);
  const day = Dday(data?.fetchProject.recruitDate);

  const onClickChatStart = async () => {
    try {
      await joinChatRoom({
        variables: {
          projectId: String(props.detailId),
        },
      });

      router.push("/chatting");

      document.querySelector("#__next")?.classList.remove("projectdetalon");
    } catch (error) {
      if (error instanceof Error) console.log(error.message);
    }
  };

  return (
    <PreviewProjectUI
      data={data}
      day={day}
      setDetailModal={props.setDetailModal}
      onClickChatStart={onClickChatStart}
    />
  );
}
