import React from "react";
import { Main } from "../../components/Styled";
import { ISimpleProject } from "../../models/index";

type Props =  {
    projects: ISimpleProject[];
}

const Projects = ({projects}: Props) => {
    
    return (
        <Main id="projects">
            <div className="container mx-auto flex px-4 md:px-0">
                { projects && projects.map((project, index) => (
                    <h1 key={index}>{project.title}</h1>
                ))}
                {/* <BlockContent blocks={author.bio} projectId="peqa4imu" dataset="production" /> */}
            </div>
        </Main>
    )
}

export default Projects