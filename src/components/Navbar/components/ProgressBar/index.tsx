import React, { useEffect } from "react";

const ProgressBar = () => {
    let bodyElement:any = null;
    let progressbar:any = null;
    let progress:any = null;
    let fullBodyHeight:number = 0;

    useEffect(() =>{
        progress = setTimeout(() => {
            bodyElement = document.documentElement;
            progressbar = document.getElementById('progress');
            fullBodyHeight = bodyElement.scrollHeight - window.innerHeight;
            window.addEventListener('scroll', handleScroll, { passive: true });
        });

        return () => {
			window.removeEventListener('scroll', handleScroll);
		};
    });
    
    clearTimeout(progress);
    
    const handleScroll = () => {
        progressbar.style.width = `${(window.pageYOffset / fullBodyHeight) * 100}%`
    };

    return (
        <div 
            id="progress"
            className="w-0 h-0.5 bg-gradient-to-r from-blue-400 via-red-500 to-pink-500" 
        />
    )
}

export default ProgressBar