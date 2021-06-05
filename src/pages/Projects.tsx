import React, { useEffect, useState } from "react";
import sanityClient from "../client";
import { SimpleProject } from "../models/SimpleProject";
import { queryProjects } from '../utils/queries';

const Projects =() => {
    const [projectData, setProjects] = useState<SimpleProject[]>([])

    useEffect(() => {
        sanityClient
        .fetch(queryProjects)
        .then((data) => setProjects(data))
        .catch(console.error);
    }, []);
    return (
        <main className="min-h-screen pt-20">
            <div className="container mx-auto flex px-4 md:px-0">
                { projectData && projectData.map((project, index) => (
                    <div key={index}>
                        <h1>{project.title}</h1>
                        <h1>{new Date(project.date).toLocaleDateString()}</h1>
                        <h1>{project.place}</h1>
                        <h1>{project.description}</h1>
                        <h1>{project.link}</h1>
                    </div>
                ))}
            </div>
            
        </main>
    )
}

export default Projects