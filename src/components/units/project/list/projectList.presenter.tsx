import SearchBar from "../../../commons/searchbar/searchbar.container";
import { v4 as uuidv4 } from "uuid";
import { Wrapper } from "../../../../commons/styles/commonStyls";
import WriteGoButton from "../../../commons/inputs/component/write_button/write_button";
import ProjectCard from "../projectCard/projectCard";
import projectListDummy from '../../../../commons/json/projetList.json'
import { createContext } from "react";


interface IProjectListContext{
    projectListCount?: number
}

export const ProjectListContext = createContext<IProjectListContext>({})

export default function ProjectListUI() {
    const value = {
        projectListCount :projectListDummy.projectList.length
    }

    return (
        <ProjectListContext.Provider value={value}>
        <Wrapper paddingTop={0}>
            <SearchBar />
            <WriteGoButton />
            <ul>
            {
                projectListDummy.projectList.map((el) => {
                    return (
                        <ProjectCard 
                            key={uuidv4()}
                            name={el.name}
                            imgUrl={el.imgUrl}
                            member={el.member}
                            types={el.types}
                            redruitDate={el.redruitDate}
                        />
                    ) 
                })
            }
            </ul>
        </Wrapper>
        </ProjectListContext.Provider>
    );
};
