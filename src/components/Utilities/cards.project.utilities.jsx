
import dataProject from "./project.utilities";
import { HiEye } from "react-icons/hi";

const CardsProject = () => {
    return(
        <div className="card flex flex-col gap-8 ">
            {dataProject.map((data, i) => (
            <>
            <div key={i} className="block relative z-0 bg-white border max-w-[920px] mx-4 border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700" data-aos="zoom-in-up">
                <img className="rounded-t-lg" src={ data.img } alt="" />
                <div className="p-5">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{data.title}</h5>
                    <p className="mb-3 font-sm text-rose-600">Date: {data.date}</p>
                    <p className="mb-3 font-normal text-gray-700">{data.desc}</p>
                    <p className="mb-3 font-normal text-xs w-fit text-white bg-green-500 rounded-md p-1">Tech: {data.tech}</p>
                    <a href={data.link} target="blank" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        <HiEye className="mr-2 flex items-center" />
                        See More
                    </a>
                </div>
            </div>
            </>
            ))}
        </div>
    )
}

export default CardsProject