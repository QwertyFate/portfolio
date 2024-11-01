import React, { useState } from "react";

const About = () => {

    const [alert, setAlert] = useState(false);


    const handlecopy = () => {
        navigator.clipboard.writeText("justinpcapulI@gmail.com").then(() => {
            setAlert(true);

            setTimeout(() => {
                setAlert(false);
            },1000)
        })
    }

    return (
        <div className="flex flex-col items-center mt-40">
            <h3 className="font-DMsans font-semibold text-lg text-slate-300 uppercase tracking-[0.2em]">Based in Philippines</h3>
            <h2 className="font-DMsans text-7xl text-center font-semibold text-white w-3/6 mt-4">Integrating<span className="text-indigo-400"> Quality Design with Web Development </span></h2>
            <h1 className="font font-DMsans font-light text-lg text-slate-200 opacity-70 mt-10">Hi, I’m Justin. I design and develop web applications that offer an intuitive experience, stunning visuals, and exceptional functionality.</h1>
            <div className="flex flex-row mt-10 font-DMsans">
                <button className="text-slate-200 mx-5 hover:bg-slate-600 text-lg font-semibold border-[1px] p-2 rounded-xl bg-slate-900">See My Projects &gt;</button>
                <button className="text-slate-900 hover:bg-slate-400 mx-5 bg-slate-200 rounded-xl text-lg font-semibold p-2 flex flex-row items-center"><img src="/images/downloadsvg.svg" className="mr-1" height={30} width={30}/>Download CV </button>
            </div>
            <div id="icons" className="flex flex-row mt-10">
                <ul className="flex flex-row">
                    <a href="/" className="bg-slate-200 rounded-full mx-3 hover:bg-slate-300"><img height={30} width={30} src="/images/githubsvg.svg"/></a>
                    <a href="/" className="bg-slate-200 rounded-full mx-3 hover:bg-slate-300"><img height={30} width={30} src="/images/facebooksvg.svg"/></a>
                    <a href="/" className="bg-slate-200 rounded-full mx-3 hover:bg-slate-300"><img height={30} width={30} src="/images/linkedinsvg.svg"/></a>
                    <a onClick={handlecopy} className="bg-slate-200 rounded-full pr-3 mx-3 text-md flex flex-row items-center cursor-pointer hover:bg-slate-300"><img height={30} width={30} className="mr-3" src="/images/gmailsvg.svg"/><h3 className="font-DMsans"> justinpcapuli@gmail.com</h3></a>
                    {alert && <div className="fixed bottom-52 bg-slate-200 rounded-lg font-DMsans px-2 transition-transform right-[550px] text-slate-700 opacity-55">Text copied to clipboard! </div>}
                </ul>
               
            </div>
        </div>
    )
}

export default About;