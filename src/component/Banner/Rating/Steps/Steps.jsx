import React from 'react';
import user from '../../../../assets/products/user.png'
import packageImg from '../../../../assets/products/package.png'
import rocket from '../../../../assets/products/rocket.png'

const Steps = () => {
    return (
        <div>
            <div className='  bg-[#F1F1F1]'>
                <div className=' flex flex-col justify-center items-center space-y-3'>
                    <h1 className=' font-bold text-4xl'>Get Started in 3 Steps</h1>
                <p className=' text-gray-500'>Start using premium digital tools in minutes, not hours.</p>
                </div>
                <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-10'>
                    <div className=' bg-[#FFFFFF] flex flex-col items-center justify-between p-10 space-y-5 rounded-md'>
                        <img src={user} alt="" />
                        <h2 className=' font-semibold text-xl'>Create Account</h2>
                        <p className=' text-gray-500'>Sign up for free in seconds. No credit card required to get started.</p>
                    </div>
                    <div className=' bg-[#FFFFFF] flex flex-col items-center justify-between p-10 rounded-md'>
                        <img src={packageImg} alt="" />
                        <h2 className=' font-semibold text-xl'>Create Account</h2>
                        <p className=' text-gray-500'>Sign up for free in seconds. No credit card required to get started.</p>
                    </div>
                    <div className=' bg-[#FFFFFF] flex flex-col items-center justify-between p-10 rounded-md'>
                        <img src={rocket} alt="" />
                        <h2 className=' font-semibold text-xl'>Create Account</h2>
                        <p className=' text-gray-500'>Sign up for free in seconds. No credit card required to get started.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Steps;