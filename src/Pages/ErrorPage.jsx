import React from 'react';

const ErrorPage = () => {
    return (
        <div className='text-center'>
            <img src="error-404.png" className='mx-auto block mt-5 md:mt-15' alt="" />
            <h1 className='font-semibold text-5xl mt-5'>Oops, page not found!</h1>
            <h6 className='mt-2 text-gray-500'>The page you are looking for is not available.</h6>
        </div>
    );
};

export default ErrorPage;