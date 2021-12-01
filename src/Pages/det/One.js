import React from 'react';

const One = () => {
    return (
        <div>
            <main class="grid w-full min-h-screen bg-gray-900 place-content-center">
                <div class="rounded-lg">
                    <div class="bg-gray-100 rounded-lg w-96">
                        <img src="https://i.ibb.co/QvT5tYw/11.png" alt=""
                            class="w-full h-48 transition duration-300 rounded-t-lg sm:h-56 opacity-80 hover:opacity-100" />


                        <div class="px-10 py-6 mb-10 text-center">
                            <div class="mb-4 text-3xl font-bold text-purple-600 uppercase">Mongo Bicycle Shop</div>
                            <br />
                            <a href="https://matha-nosto-5d89d.web.app/">Live Site</a>
                            <span class="text-sm">
                                Fullstack niche related website and Users can log in by creating new account.<br />
                                Users can purchase a product & cancel an order & add review.<br />
                                Have admin and User dashboards. Admin can add , manage product and can
                                make a user admin.<br />
                                - Tools: React js, Bootstrap, Express js, Private route, Firebase Authentication,
                                MongoDB
                            </span>
                        </div>
                        <button
                            class="w-full h-16 text-lg font-extrabold text-gray-100 transition duration-300 bg-purple-600 rounded-b-lg hover:bg-purple-700"><a href="https://matha-nosto-5d89d.web.app/">Live Site</a></button>
                        <button
                            class="w-full h-16 text-lg font-extrabold text-gray-100 transition duration-300 bg-purple-600 rounded-b-lg hover:bg-purple-700"><a href="https://fierce-wildwood-43514.herokuapp.com">Server Site</a></button>
                    </div>
                </div>
            </main>

        </div>
    );
};

export default One;