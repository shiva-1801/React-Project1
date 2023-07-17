import React from "react";
import './Header.css'

const Header = () => {
  return (
    <section className="h-wrapper">
      <div className="flexCenter paddings innerwidth h-container">
        <img src="./logo.png" alt="" width ={100}/>
        <div className="flexCenter h-menu">
          <a href="">Our Values</a>
          <a href="">Contact</a>
          {/* <a href="">Get started</a> */}
          <a href="">Contact</a>
          <a href="">Residencies</a>
          <button className="button">Content</button>
        </div>
      </div>
      
    </section>

  )
}

export default Header;