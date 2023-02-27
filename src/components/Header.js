import React from 'react';
import { useSelector } from 'react-redux';

const Header = ({ handleClick }) => {
    const cartItems = useSelector((state) => state.cartItems);
    return (
        <div>
            <nav className="bg-[#171C2A] py-4">
                <div className="navBar">
                    <a href="index.html"
                        onClick={handleClick}
                    >
                        <img src="./images/logo.png" alt="LWS" className="max-w-[140px]" />
                    </a>

                    <div className="flex gap-4">
                        <a href="#home" className="navHome" id="lws-home"
                            onClick={handleClick}
                        > Home </a>
                        <a href="cart.html" className="navCart" id="lws-cart"
                            onClick={handleClick}
                        >
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