import React from 'react';

const Three = () => {
    return (
        <div>
            <main class="grid w-full min-h-screen bg-gray-900 place-content-center">
                <div class="rounded-lg">
                    <div class="bg-gray-100 rounded-lg w-96">
                        <img src="https://i.ibb.co/559T3s6/31.png" alt=""
                            class="w-full h-48 transition duration-300 rounded-t-lg sm:h-56 opacity-80 hover:opacity-100" />

                        <div class="px-10 py-6 mb-10 text-center">
                            <div class="mb-4 text-3xl font-bold text-purple-600 uppercase">Bangladesh PG Hospital</div>
                            <span class="text-sm">
                                It is a hospital Website<br />
                                This website provides health related services and insurances .<br />
                                Tools: React Js, React router, Firebase Authentication, Tailwind
                            </span>
                        </div>
                        <button
                            class="w-full h-16 text-lg font-extrabold text-gray-100 transition duration-300 bg-purple-600 rounded-b-lg hover:bg-purple-700"><a href="https://hospital-wev.web.app">Live Site</a></button>
                    </div>
                </div>
            </main>

        </div>
    );
};

export default Three;