import { useRouter } from "next/router";
import ProjectDone from "../../../src/components/units/project/done/projectDone.container";

export default function ProjectDonePage() {
  const router = useRouter();
  console.log(router.query);
  return <ProjectDone point={router?.query?.point} />;
}
