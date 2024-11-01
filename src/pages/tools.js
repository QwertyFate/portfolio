import React from "react";

const Tools = () => {
    return(
        <div className="mt-40 mx-64">
            <h1 className="text-white text-5xl font-DMsans font-semibold">Programming Stack</h1>
            <h3 className=" text-slate-200 opacity-65 w-3/6 mt-6 font-DMsans">I’m skilled in a variety of contemporary technologies that enable me to create powerful and efficient solutions. Here are some of the key tools and languages I use.</h3>
            <ul className="grid grid-cols-4 grid-row-2 mt-20">
                <li className="bg-slate-800 hover:bg-slate-700 cursor-pointer rounded-lg p-2 flex flex-row m-3">
                    <img src="/images/photoshopsvg.svg" height={60} width={60} className="rounded-md" />
                    <div className="flex flex-col ml-5 justify-center">
                        <h1 className="text-slate-200 font-medium text-xl font-DMsans tracking-wider">Photoshop</h1>
                        <h2 className="text-slate-400 text-md font-DMsans font-medium">Design Tool</h2>
                    </div>
                </li>
                <li className="bg-slate-800 hover:bg-slate-700 cursor-pointer rounded-lg p-2 flex flex-row m-3">
                    <img src="/images/javascriptsvg.svg" height={60} width={60} className="rounded-md" />
                    <div className="flex flex-col ml-5 justify-center">
                        <h1 className="text-slate-200 font-medium text-xl font-DMsans tracking-wider">Javacript</h1>
                        <h2 className="text-slate-400 text-md font-DMsans font-medium">Main Programming Language</h2>
                    </div>
                </li>
                <li className="bg-slate-800 hover:bg-slate-700 cursor-pointer rounded-lg p-2 flex flex-row m-3">
                    <img src="/images/reactsvg.svg" height={60} width={60} className="rounded-md" />
                    <div className="flex flex-col ml-5 justify-center">
                        <h1 className="text-slate-200 font-medium text-xl font-DMsans tracking-wider">React</h1>
                        <h2 className="text-slate-400 text-md font-DMsans font-medium">Javascript Library</h2>
                    </div>
                </li>
                <li className="bg-slate-800 hover:bg-slate-700 cursor-pointer rounded-lg p-2 flex flex-row m-3">
                    <img src="/images/nextjssvg.svg" height={60} width={60} className="rounded-md" />
                    <div className="flex flex-col ml-5 justify-center">
                        <h1 className="text-slate-200 font-medium text-xl font-DMsans tracking-wider">Next JS</h1>
                        <h2 className="text-slate-400 text-md font-DMsans font-medium">React Framework</h2>
                    </div>
                </li>
                <li className="bg-slate-800 hover:bg-slate-700 cursor-pointer rounded-lg p-2 flex flex-row m-3">
                    <img src="/images/tailwindsvg.svg" height={60} width={60} className="rounded-md" />
                    <div className="flex flex-col ml-5 justify-center">
                        <h1 className="text-slate-200 font-medium text-xl font-DMsans tracking-wider">Tailwind CSS</h1>
                        <h2 className="text-slate-400 text-md font-DMsans font-medium">CSS Framework</h2>
                    </div>
                </li>
                <li className="bg-slate-800 hover:bg-slate-700 cursor-pointer rounded-lg p-2 flex flex-row m-3">
                    <img src="/images/gitsvg.svg" height={60} width={60} className="rounded-md" />
                    <div className="flex flex-col ml-5 justify-center">
                        <h1 className="text-slate-200 font-medium text-xl font-DMsans tracking-wider">Git </h1>
                        <h2 className="text-slate-400 text-md font-DMsans font-medium">Version Control</h2>
                    </div>
                </li>
                <li className="bg-slate-800 hover:bg-slate-700 cursor-pointer rounded-lg p-2 flex flex-row m-3">
                    <img src="/images/nodejssvg.svg" height={60} width={60} className="rounded-md" />
                    <div className="flex flex-col ml-5 justify-center">
                        <h1 className="text-slate-200 font-medium text-xl font-DMsans tracking-wider">Node JS </h1>
                        <h2 className="text-slate-400 text-md font-DMsans font-medium">Backend Tool</h2>
                    </div>
                </li>
                <li className="bg-slate-800 hover:bg-slate-700 cursor-pointer rounded-lg p-2 flex flex-row m-3">
                    <img src="/images/expresssvg.svg" height={60} width={60} className="rounded-md" />
                    <div className="flex flex-col ml-5 justify-center">
                        <h1 className="text-slate-200 font-medium text-xl font-DMsans tracking-wider">Express JS </h1>
                        <h2 className="text-slate-400 text-md font-DMsans font-medium">Backend Tool</h2>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default Tools