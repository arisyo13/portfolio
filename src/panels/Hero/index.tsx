import React from "react";
import BlockContent from "@sanity/block-content-to-react";
import { ISimpleAuthor, ISimpleProject } from "../../models";
import { Main, Container } from "../../components/Styled";

type Props = {
    projects: ISimpleProject[];
    author: ISimpleAuthor
}

const Hero = ({ projects, author }: Props) => {
    return (
        <Main>
            <Container>
                <img src={author.image.asset.url} className="w-72 h-auto" alt={author.image.alt} />
                <h1 className="text-4xl text-primary">{author.name}</h1>
                <BlockContent blocks={author.bio} projectId="peqa4imu" dataset="production" />
                { projects && projects.map((v, index) => (
                    <p key={index}>{v.date}</p>
                ))}
            </Container>
        </Main>
    )
}

export default Hero