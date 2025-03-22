import React, { useState } from 'react'
import "./Navbar.css"

import { FiShoppingCart } from "react-icons/fi";
import { IoMdMenu } from "react-icons/io";

export default function Navbar() {

  const [menuOpen,setMenuOpen] = useState(false);

  return (
    <nav id='Navigation-bar'>
      <div id='Logo-bar'>
        <ul>
          <li className="item-bar"><a href="http://">MY<strong>BOOK</strong></a></li>
        </ul>
        <span>|</span>
        <FiShoppingCart title="Shopping Cart" />
      </div>
      <div id='item-list'>
        <ul>
          <li className="item-bar"><a href="#">Explore</a></li>
          <li className="item-bar"><a href="#">Shop</a></li>
          <li className="item-bar"><a href="#">Blog</a></li>
        </ul>
        <button id='btn-login'>Log in</button>
      </div>
      <div id="menu-mobile" onClick={() => setMenuOpen(!menuOpen)}>
        <IoMdMenu />
      </div>
    </nav>
  )
}
