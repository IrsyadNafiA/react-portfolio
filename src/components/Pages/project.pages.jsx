import React from "react";
import CardsProject from "../Utilities/cards.project.utilities";

const Project = () => {
    return (
        <div className="w-full h-fit top-0 left-0 py-11 bg-gray-200" id="project">
            <div className="content max-w-[920px] m-auto h-fit w-full flex flex-col justify-center lg:items-start items-center">
                <div className="hero-main flex flex-col gap:4 lg:gap-8">
                    <div className="hero-text text-center lg:text-start m-4">
                        <h2 className="text-3xl font-bold text-blue-700 mb-4">Projects</h2>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Some of the projects I've made 😁</h3>
                    </div>
                    <CardsProject />
                </div>
            </div>
        </div>
        
    )
}

export default Project