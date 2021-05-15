import React from 'react';
import { SocialIcon } from "react-social-icons";

const SocialIcons = () => {
    return (
        <div className="md:inline-flex items-center max-h-6 w-1/5 justify-end hidden">
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
                className="rounded-full "
            />
        </div>
    )
}

export default SocialIcons