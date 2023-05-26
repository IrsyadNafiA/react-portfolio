import React from "react";
import Irsyad from '../Albums/Irsyad.jpg'
import { FaMapMarkedAlt } from "react-icons/fa";
import { HiMail } from "react-icons/hi";


const Contact = () => {
    return (
        <div className="w-full h-screen top-0 left-0 bg-white" id="contact">
            <div className="content max-w-[1024px] m-auto h-screen w-full flex flex-col justify-cente items-center lg:items-start">
                <div className="m-auto">
                    <div className="hero-main flex flex-col gap-12 m-2">
                        <div className="hero-text text-center flex flex-col justify-center">
                            <h2 className="text-3xl font-bold text-blue-700 mb-4" data-aos="fade-down">CONTACT ME</h2>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4" data-aos="fade-up">My Inbox is always open, Hit me up!🤙</h3>
                        </div>
                        <div className="icons flex flex-col justify-center lg:flex-row sm:flex-row gap-12">
                            <div className="flex flex-col lg:flex-row items-center gap-2" data-aos="flip-left">
                                <span className="bg-white drop-shadow-xl p-4 rounded-full">
                                    <FaMapMarkedAlt className="text-blue-700" size={50} />
                                </span>
                                <span className="text-center lg:text-start">
                                    <p className="font-bold text-gray-900">Location</p>
                                    <p className="text-gray-500 hover:text-blue-700">Batam, Indonesia</p>
                                </span>
                            </div>
                            <div className="flex flex-col lg:flex-row items-center gap-2" data-aos="flip-right">
                                <span className="bg-white drop-shadow-xl p-4 rounded-full">
                                    <HiMail className="text-blue-700" size={50} />
                                </span>
                                <span className="text-center lg:text-start">
                                    <p className="font-bold text-gray-900">Email</p>
                                    <a target="blank" href="mailto:irsyadnap33@gmail.com" className="text-gray-500 hover:text-blue-700">irsyadnap33@gmail.com</a>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default Contact