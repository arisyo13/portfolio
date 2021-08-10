import React from "react";
import Project from "../../components/Project";
import { ISimpleProject } from "../../models/index";

type Props =  {
    projects: ISimpleProject[];
}

const Projects = ({projects}: Props) => {
    
    return (
        <main className="min-h-screen pt-20">
            <div className="container mx-auto flex px-4 md:px-0">
                { projects && projects.map((project, index) => (
                    <Project index={index} project={project} />
                ))}
            </div>
        </main>
    )
}

export default Projects