import { ChangeEvent, useContext, useEffect, useState } from "react";
import { useMutation } from "@apollo/client";
import { START_PROJECT } from "../chattingDetail.queries";
import {
  IChatRoomMember,
  IMutation,
  IMutationStartProjectArgs,
} from "../../../../../commons/types/generated/types";
import { ChattingContext } from "../../chatting.container";
import SidebarUI from "./sidebar.presenter";
import useMoveToPage from "../../../../commons/hooks/useMoveToPage";

export default function Sidebar() {
  const { moveToProjectManagement } = useMoveToPage();
  const { chatRoomId } = useContext(ChattingContext);
  const [checkList, setCheckList] = useState<IChatRoomMember[]>([]);
  const [isCheck, setIsCheck] = useState<string[]>([]);
  const [price, setPrice] = useState<number | string>(10000);
  const [isSelf, setIsSelf] = useState(false);
  const [isChoose, setIsChoose] = useState(false);
  const [isSubmit, setIsSubmit] = useState(false);

  const [startProject] = useMutation<
    Pick<IMutation, "startProject">,
    IMutationStartProjectArgs
  >(START_PROJECT);

  useEffect(() => {
    if (typeof price !== "number" || !isCheck.length) setIsSubmit(false);
    else setIsSubmit(true);
  }, [price, isCheck]);

  const onClickProjectSetting = () => {
    setIsChoose((prev) => !prev);
  };

  const onChangeCheckedUser = (data: IChatRoomMember) => () => {
    if (isCheck.includes(data.user.name)) {
      const index = isCheck.indexOf(data.user.name);
      const tempIsCheck = isCheck.filter((el) => {
        return data.user.name !== el;
      });
      const tempCheckList = checkList;
      tempCheckList.splice(index, 1);

      setCheckList([...tempCheckList]);
      setIsCheck([...tempIsCheck]);
    } else {
      setCheckList((prev) => [...prev, data]);
      setIsCheck((prev) => [...prev, data.user.name]);
    }
  };

  const onChangeSelectPrice = (e: ChangeEvent<HTMLSelectElement>) => {
    if (e.target.value === "직접입력") {
      setIsSelf(true);
      return;
    }

    setPrice(Number(e.target.value));
    setIsSelf(false);
  };

  const onChangeInputPrice = (e: ChangeEvent<HTMLInputElement>) => {
    setPrice(Number(e.target.value));
  };

  const onClickStartProject = async () => {
    if (!chatRoomId) return;
    const userIds: string[] = [];

    checkList.forEach((data) => {
      userIds.push(data.user.id);
    });

    try {
      const result = await startProject({
        variables: {
          userIds,
          point: Number(price),
          chatRoomId,
        },
      });
      moveToProjectManagement(String(result.data?.startProject.id));
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  return (
    <SidebarUI
      checkList={checkList}
      price={price}
      isCheck={isCheck}
      isSelf={isSelf}
      isChoose={isChoose}
      isSubmit={isSubmit}
      onClickStartProject={onClickStartProject}
      onChangeInputPrice={onChangeInputPrice}
      onChangeSelectPrice={onChangeSelectPrice}
      onClickProjectSetting={onClickProjectSetting}
      onChangeCheckedUser={onChangeCheckedUser}
    />
  );
}
