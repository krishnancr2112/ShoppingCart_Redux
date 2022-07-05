import React from "react";
import { Link } from "react-router-dom";

export default function Header(){
    return(
        <header>
        <div >
          <p className='appName'>SHOPPING APP</p>
          <p className='home'><Link to="/"><button >HOME</button></Link></p>
        </div>
      </header>
    )
}