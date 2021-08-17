import React from "react";
import { ISimpleAuthor } from "../../models";
import { Main, Container } from "../../components/Styled";

type Props = {
    author: ISimpleAuthor
}

const Hero = ({ author }: Props) => {
    const texts = ['software developer', 'designer', 'test'];
    return (
        <Main>
            <video
                className="relative transform -translate-y-20 w-full object-cover h-screen"
                autoPlay
                muted
                preload="auto"
                playsInline
                loop
            >
                <source src="../videos/chain.mp4" type="video/mp4" />
                <source src="../videos/chain.webm" type="video/webm" />
            </video>
            <div className="absolute inset-0 pt-20 text-white">
                <Container>
                    {/* <img src={author.image.asset.url} className="w-24 md:w-72 h-auto" alt={author.image.alt} /> */}
                    <span className="flex items-baseline">
                        <h3 className="text-6xl md:text-9xl">im&nbsp;</h3>
                        <h3 className="text-6xl md:text-10xl text-purple-600">{author.name}</h3>
                    </span>
                    <span className="flex items-baseline">
                        <h3 className="text-2xl">Im a</h3>
                        <h3>{}</h3>
                    </span>
                </Container>
            </div>
        </Main>
    )
}

export default Hero