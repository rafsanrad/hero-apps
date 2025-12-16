import React from 'react';

const Banner = () => {
    return (
        <div>
            <div className='h-[400px] w-full border  bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-center'>
                <h1 className='text-white font-bold text-5xl mt-8 md:mt-18'>Trusted by Millions, Built for You</h1>
                <div className='text-white flex justify-center items-center gap-3 md:gap-10 mt-12'>
                    <div>
                        <h4>Total Downloads</h4>
                        <p className='font-bold text-5xl mt-5 mb-5'>29.6M</p>
                        <p>21% more than last month</p>
                    </div>
                    <div>
                        <h4>Total Reviews</h4>
                        <p className='font-bold text-5xl mt-5 mb-5'>906K</p>
                        <p>46% more than last month</p>
                    </div>
                    <div>
                        <h4>Active Apps</h4>
                        <p className='font-bold text-5xl mt-5 mb-5'>132+</p>
                        <p>31 more will Launch</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;