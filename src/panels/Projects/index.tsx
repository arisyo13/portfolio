import React, { useEffect } from "react";
import { Container, Panel } from "../../components/Styled";
import { ISimpleProject } from "../../models/index";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

type Props =  {
    projects: ISimpleProject[];
}

const Projects = ({ projects }: Props) => {
    
    useEffect(() => {

        const tl = gsap.timeline();

        ScrollTrigger.create({
            trigger: '#projects',
            animation: tl,
            start: 'top top',
            end: `${projects.length}00% top`,
            toggleActions: 'play none reverse pause',
            scrub: .5,
            pin: true,
        });

        projects.map((v, i) => {
            tl.to(`#phone${i}`, {
                translateY: '-200%',
                ease: 'ease-in-out',
                duration: 20,
            }, i*10)
            .from(`#text${i}`, {
                opacity: 0,
                ease: 'ease-in',
                duration: 6,
                translateY: 60,
                rotateZ: '45deg'
            }, i*10)
            .to(`#text${i}`, {
                opacity: 0,
                ease: 'ease-out',
                duration: 3,
            }, i*10+10);
        });
        
    }, []);
    
    return (
        <Panel id="projects">
            <Container>
                <div className="flex flex-col bg-white relative justify-between">
                    <h1>Projects</h1>
                    <div className="w-8 mt-2 h-0.5 bg-gradient-to-r from-blue-400 via-red-500 to-pink-500"></div>
                    { projects && projects.map((v, i) =>(
                        <React.Fragment key={i}>
                            <h1 id={`text${i}`} className="p-2 h-16 absolute top-16 left-8">{0}{i+1}{" "}{v.title}</h1>
                            <img
                                id={`phone${i}`}
                                className="transform absolute top-64 translate-y-full right-0"
                                src="../img/phone.png" alt="phone"
                            />
                        </React.Fragment>
                    ))}
                    {/* { projects && projects.map((project, index) => (
                        <h1 key={index}>{project.title}</h1>
                    ))} */}
                    {/* <BlockContent blocks={author.bio} projectId="peqa4imu" dataset="production" /> */}
                </div>
            </Container>
        </Panel>
    )
}

export default Projects