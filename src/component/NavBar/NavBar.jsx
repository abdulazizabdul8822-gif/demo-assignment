import React from 'react';
import shopping from "../../assets/products/shopping-cart.png"

const NavBar = ({ carts, setActiveTab }) => {
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
                <div className="relative"
                    onClick={() => {
                        setActiveTab("Cart");
                        window.scrollTo({ top:1000, behavior: "smooth" });
                    }}>
                    <img className='hover:cursor-pointer w-8' src={shopping} alt="" />

                    {carts.length > 0 && (
                        <span className="absolute -top-1 -right-1 bg-red-600 text-white text-[10px] w-5 h-5 flex items-center justify-center rounded-full">
                            {carts.length}
                        </span>
                    )}
                </div>
                <button className='hover:cursor-pointer'>Login</button>
                <a className="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full text-white">Get Started</a>
            </div>
        </div>
    );
};

export default NavBar;