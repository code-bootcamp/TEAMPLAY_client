import { memo } from "react";
import { ProjectMembers } from "../projectManage.styles";

const TeamMember = (props : any) => {
    return (
        <ProjectMembers>
            <div className="left_img">
            {
                props.imgUrl ? 
                <img src={props.imgUrl} alt="profile" /> : <img src="/img/unprofile.svg" alt="unprofile"/>
            }
            </div>
            <div className="right_info">
                <div className="name">{props.name && props.name}</div>
                <div className="position">{props.position ? props.position : "포지션 미정"}</div>
            </div>
        </ProjectMembers>
    );
}

export default memo(TeamMember)
