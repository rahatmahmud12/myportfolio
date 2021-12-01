import React from 'react';
import { Link } from 'react-router-dom';

const Projects = (props) => {
    const { screnshotOne, name, id } = props.project
    return (
        <div>
            <div className="md:grid ml-64 grid-cols-2 gap-6 lg:px-40">
                <div>
                    <div className="bg-white p-4 ">
                        <div>
                            <div className="mb-4">
                                <h1 className="text-2xl mb-6 font-bold text-gray-700">{name}</h1>
                            </div>

                            <div className="">
                                {/* <a className="mr-5 text-white bg-gray-400 rounded px-2" href=" ">Live Site</a>
                                    <a className=" bg-gray-400 text-white rounded px-2" href="">Server Site</a> <br />
                                    <a className="mr-5 bg-gray-400 text-white rounded px-2" href="">Live site Code</a>
                                    <a className=" bg-gray-400 text-white rounded px-2" href="">Server Site Code</a> */}
                                <p className="mt-6"><img src={screnshotOne}></img></p>
                                {/* <p className="text-lg mt-10 text-gray-700">1. Fullstack niche related website and Users can log in by creating new account.<br />
                                        2. Users can purchase a product & cancel an order & add review.<br />
                                        3. Have admin and User dashboards. Admin can add , manage product and can
                                        make a user admin.<br />
                                        4. Tools: React js, Bootstrap, Express js, Private route, Firebase Authentication,
                                        MongoDB</p> */}
                                <Link to={`/project/${id}`}><button
                                    class="inline-block mt-12 px-6 py-2 text-xs font-medium leading-6 text-center text-white uppercase transition bg-red-500 rounded shadow ripple hover:shadow-lg hover:bg-red-600 focus:outline-none"
                                >
                                    Details
                                </button></Link>
                            </div>
                        </div>
                    </div>
                </div>





            </div>

        </div>
    );
};

export default Projects;