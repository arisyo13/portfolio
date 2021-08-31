import React from "react";
import { ISimpleAuthor } from "../../models";
import { Panel, Container } from "../../components/Styled";
import CanvasAnimation from "../../components/CanvasAnimation";

type Props = {
    author: ISimpleAuthor
}

const Hero = ({ author }: Props) => {
    
    return (
        <Panel>
            {/* <video
                className="relative w-full -z-10 object-cover h-screen"
                autoPlay
                muted
                preload="auto"
                playsInline
                loop
            >
                <source src="../videos/chain.mp4" type="video/mp4" />
                <source src="../videos/chain.webm" type="video/webm" />
            </video> */}
                <CanvasAnimation />
                <Container>
                    {/* <img src={author.image.asset.url} className="w-24 md:w-72 h-auto" alt={author.image.alt} /> */}
                    <span className="flex items-baseline absolute inset-6 text-white comtainer mx-auto">
                        <h3 className="text-6xl md:text-9xl">im&nbsp;</h3>
                        <h3 className="text-6xl md:text-10xl text-purple-600">{author.name}</h3>
                    </span>
                    <span className="flex items-baseline">
                        <h3 className="text-2xl">Im a</h3>
                        <h3>{}</h3>
                    </span>
                    <div className="w-48 h-48 bg-transparent flex rounded-full"></div>
                </Container>
        </Panel>
    )
}

export default Hero