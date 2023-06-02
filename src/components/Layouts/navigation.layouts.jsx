import  { useState } from "react"
import { HiMenuAlt3, HiOutlineX } from "react-icons/hi";
import { AiOutlineHome, AiOutlineUser, AiOutlineProject, AiOutlineMail} from 'react-icons/ai'
import { Link } from "react-scroll"

const Navigation = () => {

    // const [activePage, setActivePage] = useState('Home')

    // const handlePageChange = (page) => {
    //     setActivePage(page)
    // }

    const [nav, setNav] = useState(false)
    const handleNav = () => {
        setNav(!nav)
    }

    return(
        <div className="absolute z-50">
            <HiMenuAlt3 
            size={30}
            onClick={handleNav}
            className="absolute top-7 right-4 z-[99] md:hidden"
            />
            {
                nav ? (
                    <div className='fixed w-full h-screen bg-gray-900/90 flex flex-col justify-center items-center z-20'>
                        <HiOutlineX 
                            size={35}
                            onClick={handleNav}
                            className="absolute top-7 right-4 z-[99] rounded-full bg-gray-200 shadow-gray-300"
                        />
                    <Link
                        activeClass="active"
                        to="home"
                        spy={true}
                        smooth={true}
                        offset={-100}
                        duration={500}
                        className='w-[75%] flex justify-center items-center rounded-full shadow-sm bg-gray-200 shadow-gray-300 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'
                        >
                            <AiOutlineHome size={20} />
                            <span className='pl-4'> Home </span>
                    </Link>
                    <Link
                        activeClass="active"
                        to="about"
                        spy={true}
                        smooth={true}
                        offset={-100}
                        duration={500}
                        className='w-[75%] flex justify-center items-center rounded-full shadow-sm bg-gray-200 shadow-gray-300 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'
                        >
                            <AiOutlineUser size={20} />
                            <span className='pl-4'> About </span>
                    </Link>
                    <Link
                        activeClass="active"
                        to="project"
                        spy={true}
                        smooth={true}
                        offset={-100}
                        duration={500}
                        className='w-[75%] flex justify-center items-center rounded-full shadow-sm bg-gray-200 shadow-gray-300 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'
                        >
                            <AiOutlineProject size={20} />
                            <span className='pl-4'> Project </span>
                    </Link>
                    <Link
                        activeClass="active"
                        to="contact"
                        spy={true}
                        smooth={true}
                        offset={-100}
                        duration={500}
                        className='w-[75%] flex justify-center items-center rounded-full shadow-sm bg-gray-200 shadow-gray-300 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'
                        >
                            <AiOutlineMail size={20} />
                            <span className='pl-4'> Contact </span>
                    </Link>
                </div>
            ) : (
                ""
            )}
            <nav className="md:block hidden bg-white w-full z- drop-shadow-md fixed" data-aos="fade-down" data-aos-anchor-placement="top-bottom">
                <div className="flex flex-wrap justify-between items-center mx-auto py-3 px-12">
                    <a href="/" className="p-4 font-bold text-2xl text-gray-900">IRSYAD<span className="text-blue-600">NAFI</span></a>
                    <div className="items-center justify-between" id="navbar-sticky">
                        <ul className="bg-transparent flex p-4 font-medium text-lg space-x-8">
                            <li>
                                <Link
                                    activeClass="active"
                                    to="home"
                                    spy={true}
                                    smooth={true}
                                    offset={-100}
                                    duration={500}
                                    className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                                >
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link
                                    activeClass="active"
                                    to="about"
                                    spy={true}
                                    smooth={true}
                                    offset={-100}
                                    duration={500}
                                    className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                                >
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link
                                    activeClass="active"
                                    to="project"
                                    spy={true}
                                    smooth={true}
                                    offset={-100}
                                    duration={500}
                                    className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                                >
                                    Project
                                </Link>
                            </li>
                            <li>
                                <Link
                                    activeClass="active"
                                    to="contact"
                                    spy={true}
                                    smooth={true}
                                    offset={-100}
                                    duration={500}
                                    className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                                >
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navigation