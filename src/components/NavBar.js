import React from "react";

const NavBar = () => {
    return (
        <div className="text-slate-300 flex justify-center mt-20 text-lg font-DMsans font-medium">
            <ul className="flex flex-row p-4 border-[1px] border-gray-500 rounded-xl">
                <a href="/" className="mx-4 hover:text-slate-200 cursor-pointer">Home</a>
                <a href="/tools" className="mx-4 hover:text-slate-200 cursor-pointer">Tools</a>
                <a className="mx-4 hover:text-slate-200 cursor-pointer">Projects</a>
                <a className="mx-4 hover:text-slate-200 cursor-pointer">Contact</a>
            </ul>
        </div>
    )
}

export default NavBar