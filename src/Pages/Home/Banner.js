import React from 'react';

const Banner = () => {
    return (
        <section class="hero min-h-screen">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <img src="https://i.ibb.co/h1Yr07F/banner-2.jpg" class="max-w-3xl rounded-lg shadow-2xl" />
                <div>
                    <h1 class="text-5xl text-accent text-center font-bold">Lets Build Your Dream Computer!!</h1>
                    <p class="py-6 font-bold text-center">Build your dream computer with our exclusive and updated computer parts. Our products are highly enhanced and will give you the best experience.</p>
                </div>
            </div>
        </section>
    );
};

export default Banner;