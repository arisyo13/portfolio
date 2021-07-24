import React from "react";
import { ISimpleAuthor } from "../../models/SimpleAuthor";
import { ISimpleProject } from "../../models/SimpleProject";

type Props = {
    projects: ISimpleProject[];
    author: ISimpleAuthor
}

const Hero = ({ projects, author }: Props) => {
    return (
        <main className="min-h-screen py-20">
            <div className="container mx-auto px-4 md:px-0">
                <img src={author.image.asset.url} alt={author.image.alt} />
                <h1 className="text-4xl text-primary">{author.name}</h1>
                { projects && projects.map((v, index) => <p key={index}>{v.date}</p>) }
            </div>
        </main>
    )
}

export default Hero