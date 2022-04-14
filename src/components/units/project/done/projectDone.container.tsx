import ProjectDoneUI from "./projectDone.presenter";

interface IPropsProjectDone {
  point?: string | string[] | undefined;
}

function ProjectDone(props: IPropsProjectDone) {
  return <ProjectDoneUI point={props.point} />;
}

export default ProjectDone;
