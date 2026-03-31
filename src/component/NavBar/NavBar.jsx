import React, { useState } from 'react';
import shopping from "../../assets/products/shopping-cart.png"
import { TiThMenu } from 'react-icons/ti';
import { IoIosCloseCircle } from "react-icons/io";



const NavBar = ({ carts, setActiveTab }) => {
    const [open, setOpen] = useState(false);
    return (
        <div className="navbar bg-base-100 shadow-sm container mx-auto">
            <div className="navbar-start">
                <span></span>
                {open ? <IoIosCloseCircle className=' md:hidden mr-5' onClick={() => setOpen(!open)} />
                    : <TiThMenu className=' md:hidden mr-5' onClick={() => setOpen(!open)} />}
                <div className="">
                    <ul className={`md:hidden w-full bg-white shadow-md transition-all duration-500 cursor-pointer p-4 space-y-2 transform ${open ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0 pointer-events-none"}`}>
                        <li><a>Products</a></li>
                        <li><a>Features</a></li>
                        <li><a>Pricing</a></li>
                        <li><a>Testimonials</a></li>
                        <li><a>FAQ</a></li>
                    </ul>
                    <h2 className="hidden md:block font-bold text-4xl bg-linear-to-r from-[#2e13f6] to-[#8c03f5] bg-clip-text text-transparent py-4">DigiTools</h2>
                </div>

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
            <div className="navbar-end md:gap-5">
                <div className="relative z-50"
                    onClick={() => {
                        setActiveTab("Cart");
                        window.scrollTo({ top: 1000, behavior: "smooth" });
                    }}>
                    <img className='hover:cursor-pointer w-8 h-8 min-w-[32px] object-contain flex-shrink-0 brightness-0' src={shopping} alt="" />

                    {carts.length > 0 && (
                        <span className="absolute -top-1 -right-1 bg-red-600 text-white text-[10px] w-5 h-5 flex items-center justify-center rounded-full">
                            {carts.length}
                        </span>
                    )}
                </div>
                <button className='hover:cursor-pointer'>Login</button>
                <a className="btn text-sm px-3 md:px-6 bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full text-white">Get Started</a>
            </div>
        </div>
    );
};

export default NavBar;