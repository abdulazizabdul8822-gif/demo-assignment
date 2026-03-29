import React from 'react';
import shopping from "../../assets/products/shopping-cart.png"

const NavBar = () => {
    return (
        <div className="navbar bg-base-100 shadow-sm container mx-auto">
            <div className="navbar-start">
                <h2 className="font-bold text-4xl bg-linear-to-r from-[#2e13f6] to-[#8c03f5] bg-clip-text text-transparent py-4">DigiTools</h2>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><a>Products</a></li>
                    <li><a>Features</a></li>
                    <li><a>Pricing</a></li>
                    <li><a>Testimonials</a></li>
                    <li><a>FAQ</a></li>
                </ul>
            </div>
            <div className="navbar-end gap-5">
                <img className=' hover:cursor-pointer' src={shopping} alt="" />
                <button className='hover:cursor-pointer'>Login</button>
                <a className="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full text-white">Get Started</a>
            </div>
        </div>
    );
};

export default NavBar;