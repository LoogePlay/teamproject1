import React from 'react';
import '../styles/main.css'
import img1 from '../logos/buy-svgrepo-com.svg'

function Header() {
    return (
        <div>
            <nav className="top-menu">
                <ul className="menu-main">
                    <li><a href="/home">Home</a></li>
                    <li><a href="/order">Order</a></li>
                    <li><a href="">Shop</a></li>
                    <li><a href="">Gallery</a></li>
                    <li><a href=""><img src={img1}></img></a></li>
                </ul>
            </nav>
        </div>
    );
}

export default Header;