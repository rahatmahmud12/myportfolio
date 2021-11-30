import React from 'react';
import { Link } from 'react-router-dom';
import img1 from '../../img/91.png'
import img2 from '../../img/92.png'
import img3 from '../../img/93.png'
import img4 from '../../img/94.png'

const Pages = () => {
    return (
        <div>
            <header className="max-h-full bg-white p-6 grid">

                <nav className="w-full grid justify-end">
                    <ul className="hidden md:flex space-x-8 font-bold text-gray-700">
                        {/* <li><a href="#">Works</a></li>
                        <li><a href="#">Blog</a></li> */}
                        <li className="mr-24 bg-gray-500 text-white rounded-sm px-3 p"><a href="https://form.jotform.com/213334926591459">Contact Me</a></li>
                    </ul>
                    <div className="md:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-gray-700 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </div>
                </nav>


                <div className="container mx-auto mt-8 md:mt-0 md:space-x-10 md:grid grid-cols-3 justify-center md:py-40">
                    <div className="grid justify-center items-center order-1 col-span-1 ">
                        <img className="lg:h-80 md:h-64 h-40 rounded-full" src="https://i.ibb.co/KFQJwTp/147342886-4310537265629425-667220922718008872-n-removebg-preview-1.png" alt="" />
                    </div>
                    <div className="pt-20 pl-10 w-3/4 md:mt-0 lg:justify-end col-span-2">
                        <h1 className="text-4xl text-gray-800 text-center md:text-left font-bold mb-6">Hi, I am Rahat Mahmud, Web Developer</h1>
                        <p className="text-xl text-gray-800 text-center md:text-left">I am a Junior Web Developer able to build a Web presence from the ground up-
                            from the concept, navigation, layout and programming to UX.
                            <br />
                            <br />
                            I am Fast learner, Hard worker and team player who is proficient in Javascript language
                            and many multimedia web tools.</p>
                        <a href="https://drive.google.com/file/d/1GauisSl37sPfoFs9qLw_D71PYu96Z_9B/view?usp=sharing"><button className="block mt-8 mx-auto md:mx-0 text-2xl py-3 px-6 text-red-50 font-semibold rounded bg-red-400">Download Resume</button></a>
                    </div>
                </div>
            </header>


            <div className="md:gap-4 p-6 bg-blue-50 md:grid">
                <div className="grid grid-cols-2 justify-between lg:px-40 md:mb-4">
                    <h1 className=" my-6 justify-start md:text-left text-4xl">My Projects</h1>

                </div>
                <div className="md:grid grid-cols-2 gap-6 lg:px-40">
                    <div>
                        <div className="bg-white p-4">
                            <div>
                                <div className="mb-4">
                                    <h1 className="text-2xl mb-6 font-bold text-gray-700">Mongo Bicycle Shop</h1>
                                </div>

                                <div className="">
                                    {/* <a className="mr-5 text-white bg-gray-400 rounded px-2" href=" ">Live Site</a>
                                    <a className=" bg-gray-400 text-white rounded px-2" href="">Server Site</a> <br />
                                    <a className="mr-5 bg-gray-400 text-white rounded px-2" href="">Live site Code</a>
                                    <a className=" bg-gray-400 text-white rounded px-2" href="">Server Site Code</a> */}
                                    <p className="mt-6"><img src={img1}></img></p>
                                    {/* <p className="text-lg mt-10 text-gray-700">1. Fullstack niche related website and Users can log in by creating new account.<br />
                                        2. Users can purchase a product & cancel an order & add review.<br />
                                        3. Have admin and User dashboards. Admin can add , manage product and can
                                        make a user admin.<br />
                                        4. Tools: React js, Bootstrap, Express js, Private route, Firebase Authentication,
                                        MongoDB</p> */}
                                    <button
                                        class="inline-block mt-12 px-6 py-2 text-xs font-medium leading-6 text-center text-white uppercase transition bg-red-500 rounded shadow ripple hover:shadow-lg hover:bg-red-600 focus:outline-none"
                                    >
                                        Details
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white p-4 md:mt-0 mt-6">
                        <div>
                            <div className="mb-4">
                                <h1 className="text-2xl font-bold text-gray-700">Mongo Travel Agency</h1>

                            </div>

                            <div className="">
                                <p className="mt-6"><img src={img2}></img></p>
                                <button
                                    class="inline-block mt-12 px-6 py-2 text-xs font-medium leading-6 text-center text-white uppercase transition bg-red-500 rounded shadow ripple hover:shadow-lg hover:bg-red-600 focus:outline-none"
                                >
                                    Details
                                </button>

                            </div>
                        </div>
                    </div>
                    <div className="bg-white p-4 md:mt-0 mt-6">
                        <div>
                            <div className="mb-4">
                                <h1 className="text-2xl font-bold text-gray-700">Bangladesh PG Hospital</h1>

                            </div>

                            <div className="">
                                <p className="mt-6"><img src={img3}></img></p>
                                <button
                                    class="inline-block mt-12 px-6 py-2 text-xs font-medium leading-6 text-center text-white uppercase transition bg-red-500 rounded shadow ripple hover:shadow-lg hover:bg-red-600 focus:outline-none"
                                >
                                    Details
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white p-4 md:mt-0 mt-6">
                        <div>
                            <div className="mb-4">
                                <h1 className="text-2xl font-bold text-gray-700">Edu-Web Education Centre</h1>

                            </div>

                            <div className="">
                                <p className="mt-6"><img src={img4}></img></p>
                                <button
                                    class="inline-block mt-12 px-6 py-2 text-xs font-medium leading-6 text-center text-white uppercase transition bg-red-500 rounded shadow ripple hover:shadow-lg hover:bg-red-600 focus:outline-none"
                                >
                                    Details
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <div className="mt-6 p-4 bg-white px-6">
                    <div className="border-b pb-6">
                        <h1 className="mt-2 mb-6 text-center text-xl">Featured works</h1>
                        <div className="md:grid grid-cols-2 gap-6">
                            <div>
                                <img className="md:h-full object-cover" src="https://images.unsplash.com/photo-1602992708529-c9fdb12905c9" alt="" />
                            </div>
                            <div>
                                <h1 className="my-6 text-2xl font-bold text-gray-700">Designing Dashboards</h1>
                                <span className="text-lg mr-4 py-1 px-4 rounded-full bg-gray-800 text-white">2020</span>
                                <spnan className="text-lg">Dashboard</spnan>
                                <p className="mt-6 text-lg text-gray-700">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>
            <footer className="bg-white">
                <div className="flex mt-20 px-10 items-center justify-around max-md">
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 text-gray-800 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                        </svg>
                    </span>
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 textgray-800e w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 8l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2M5 3a2 2 0 00-2 2v1c0 8.284 6.716 15 15 15h1a2 2 0 002-2v-3.28a1 1 0 00-.684-.948l-4.493-1.498a1 1 0 00-1.21.502l-1.13 2.257a11.042 11.042 0 01-5.516-5.517l2.257-1.128a1 1 0 00.502-1.21L9.228 3.683A1 1 0 008.279 3H5z" />
                        </svg>
                    </span>
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 text-gray-800 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                        </svg>
                    </span>
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 text-gray-800 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </span>
                </div>
                <p className="text-center my-10 text-lg">Copyright ©2021||Rahat Mahmud| All rights reserved</p>
            </footer>

        </div>
    );
};

export default Pages;