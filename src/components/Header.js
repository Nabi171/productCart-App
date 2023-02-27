import React from 'react';
import { useSelector } from 'react-redux';

const Header = () => {
    const cartItems = useSelector((state) => state.cartItems);
    return (
        <div>
            <nav className="bg-[#171C2A] py-4">
                <div className="navBar">
                    <a href="index.html">
                        <img src="./images/logo.png" alt="LWS" className="max-w-[140px]" />
                    </a>

                    <div className="flex gap-4">
                        <a href="#home" className="navHome" id="lws-home"> Home </a>
                        <a href="cart.html" className="navCart" id="lws-cart">
                            <i className="text-xl fa-sharp fa-solid fa-bag-shopping"></i>
                            <span id="lws-totalCart">{cartItems.length}</span>
                        </a>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;