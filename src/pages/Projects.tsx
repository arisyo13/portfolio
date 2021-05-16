import React, { useEffect, useState } from "react";
import sanityClient from "../client";
import { queryProjects } from '../utilities/queries';

const Projects =() => {
    const [projectData, setProjects] = useState<any[]>([])

    useEffect(() => {
        sanityClient
        .fetch(queryProjects)
        .then((data) => setProjects(data))
        .catch(console.error);
    }, []);
    return (
        <main className="flex min-h-screen pt-20 bg-gray-100">
            { projectData && projectData.map((project, index) => (
                <div key={index}>
                    <h1>{project.title}</h1>
                    <h1>{new Date(project.date).toLocaleDateString()}</h1>
                    <h1>{project.place}</h1>
                    <h1>{project.description}</h1>
                    <h1>{project.link}</h1>
                </div>
            
          ))}
        </main>
    )
}

export default Projects