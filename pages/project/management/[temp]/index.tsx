import { useRouter } from "next/router";
import ProjectManage from "../../../../src/components/units/project/management/projectManage.container";

export default function ProjectDetailPage() {
  const router = useRouter();
  return <ProjectManage project={router.query.temp} />;
}
