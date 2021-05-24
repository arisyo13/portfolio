import React from 'react';
import { SocialIcon } from "react-social-icons";

type Props = {
    className?: string;
}

const SocialIcons = (props: Props) => {
    return (
        <div className={"flex md:w-1/5 items-center justify-end " + props.className}>
            <SocialIcon 
                url="https://www.facebook.com/arisyo13"
                bgColor="transparent"
                fgColor="#fff"
                className="rounded-full mr-3"
            />
            <SocialIcon 
                url="https://www.linkedin.com/in/aris-arsen-kashari-1755a363"
                bgColor="transparent"
                fgColor="#fff"
                className="rounded-full mr-3"
            />
            <SocialIcon 
                url="https://github.com/arisyo13"
                bgColor="transparent"
                fgColor="#fff"
                className="rounded-full"
            />
        </div>
    )
}

export default SocialIcons