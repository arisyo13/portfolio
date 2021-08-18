import React, { useRef, useEffect } from "react";
import { Container, Main } from "../../components/Styled";
import { ISimpleProject } from "../../models/index";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

type Props =  {
    projects: ISimpleProject[];
}

const Projects = ({projects}: Props) => {
    let elem = useRef<HTMLElement>(null);
    
    useEffect(() => {
        const test = gsap.to('#projects', {
            scrollTrigger: {
            trigger: '#projects',
            start: 'top 100%',
            end: 'top',
            toggleActions: 'play none none reverse',
            markers: true,
            scrub: true,
        },
            
            backgroundColor: 'red',
            ease: 'none',
            duration: 3
        });
        
    }, [])
    
    return (
        <Main id="projects">
            <Container>
                <div className="flex">
                    <h1 className="p-2 bg-blue-300" ref={elem as React.RefObject<any>}>Animation</h1>
                    {/* { projects && projects.map((project, index) => (
                        <h1 key={index}>{project.title}</h1>
                    ))} */}
                    {/* <BlockContent blocks={author.bio} projectId="peqa4imu" dataset="production" /> */}
                </div>
            </Container>
        </Main>
    )
}

export default Projects