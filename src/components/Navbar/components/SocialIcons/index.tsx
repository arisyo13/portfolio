import React from 'react';
import { SocialIcon } from "react-social-icons";

type Props = {
    className?: string;
}

const SocialIcons = (props: Props) => {
    return (
        <div className={"items-center justify-end mt-16 md:mt-0 " + props.className}>
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