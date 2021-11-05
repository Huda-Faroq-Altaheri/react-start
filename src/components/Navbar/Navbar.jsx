import React, { useEffect } from "react";
import style from "./Navbar.module.css";
import $ from "jquery";

function Navbar()
{
  useEffect(() => {
    $('.active').on("click",function(){
      $('a').css("backgroundColor","");
      $(this).css({"backgroundColor":"#1abc9c","color":"#fff"});
    })
  }, [])

    return(
        <>
<nav className={`navbar navbar-expand-lg navbar-dark ${style.main}`}>
  <div className="container">
    <a className={`navbar-brand fw-bold ${style.logo}`} href="#home">START REACT</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      MENU <span className="navbar-toggler-icon"></span>
    </button>
    <div className={`collapse navbar-collapse`} id="navbarSupportedContent">
      <ul className={`${style.navbarNav} navbar-nav ms-auto mb-2 mb-lg-0`}>
    
        <li className={`nav-item`}>
          <a className={`active nav-link  rounded`} href="#Portfolio" aria-current="page" >PORTFOLIO</a>
        </li>
        <li className={`nav-item`}>
          <a className={`active nav-link rounded `} href="#about">ABOUT</a>
        </li>
        <li className={` nav-item`}>
          <a className={`active nav-link rounded`} href="#contact" >CONTACT</a>
        </li>
        <li className={`nav-item`}>
          <a className={`active nav-link rounded`} href="#location">LOCATION</a>
        </li>

      </ul>    
    </div>
  </div>
</nav>
        </>
    )
}
export default Navbar;
