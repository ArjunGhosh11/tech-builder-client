import React from 'react';

const Subscribe = () => {
    return (
        <div class="hero p-20  bg-neutral rounded-3xl mb-20">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <div class="text-center lg:text-left">
                    <h1 class="text-5xl font-bold text-accent">SUBSCRIBE NOW!</h1>
                    <p class="py-6 text-xl font-bold text-white">Subscribe now, to get daily updates from our research team. And also keep a track on our latest products and launches.</p>
                </div>
                <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-200 lg:mr-20">
                    <div class="card-body">
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text font-bold text-primary">Email</span>
                            </label>
                            <input type="text" placeholder="email" class="input input-bordered" />
                        </div>
                        <div class="form-control mt-6">
                            <button class="btn btn-primary">Subscribe</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Subscribe;