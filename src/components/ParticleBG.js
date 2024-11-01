import React, { useEffect } from "react";
import particlesJS from "particles.js"

const ParticleBG = () => {
   

    useEffect(() => {
        if (window.particlesJS) {
            window.particlesJS.load('particles-js', '/particlesjs-config.json', () => {
                console.log('particles loaded')
            })
          }
    },[])
    return (
        <div id="particles-js" className="fixed left-0 top-0 bg-black h-full w-full">
        </div>
    );
    
}

export default ParticleBG;