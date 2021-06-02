import React from "react";
import LJU from './Assets/LOGO/LJKU_logo_Full.png';
import LJE from './Assets/LOGO/LJIET_LOGO.png';
import LJS from './Assets/LOGO/LJ Smart LabZ Logo.png';

import "./App.css"

function Header(){
  return(
    <section className="Header">
      <div className="header-logo">
        <img className="ljs" src={LJS}></img>
        <img className="lju" src={LJU}></img>
        <img className="lje" src={LJE}></img> 
      </div>
      <h1 className="h1">Weather Station</h1>
    </section>
  )
};

export default Header;
