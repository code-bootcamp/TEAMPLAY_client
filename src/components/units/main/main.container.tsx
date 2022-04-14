import { useRouter } from "next/router";
import MainUI from "./main.presenter";

export default function Main() {
  const router = useRouter();
  const onClickProjects = () => {
    router.push("project/list");
  };
  return <MainUI onClickProjects={onClickProjects} />;
}
