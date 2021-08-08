import React from 'react';
import { SocialIcon } from "react-social-icons";

type Props = {
    className?: string | "";
}

const SocialIcons = (props: Props) => {
    return (
        <div className={"md:w-1/5 items-center justify-end " + props.className}>
            <div className="w-32 justify-end flex gap-3 ">
                <SocialIcon
                    url="https://www.facebook.com/arisyo13"
                    bgColor="transparent"
                    fgColor="#fff"
                />
                <SocialIcon
                    url="https://www.linkedin.com/in/aris-arsen-kashari-1755a363"
                    bgColor="transparent"
                    fgColor="#fff"
                />
                <SocialIcon
                    url="https://github.com/arisyo13"
                    bgColor="transparent"
                    fgColor="#fff"
                />
            </div>
        </div>
    )
}

export default SocialIcons