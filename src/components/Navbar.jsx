import {BsCart3,BsMoonFill,BsSunFill} from "react-icons/bs"
import { FaBarsStaggered } from "react-icons/fa6";
import { useEffect, useState} from "react";
import { NavLink } from "react-router-dom";


const themes ={
  winter:"winter",
  dracula:"dracula",
}


function darkModeFromLocalStoage(){
  return localStorage.getItem("mode") || themes.winter
}

function Navbar() {
  const [theme,setTheme] =useState(darkModeFromLocalStoage)
  const handleClick =() =>{
    const newTheme =theme==themes.winter ? themes.dracula:themes.winter
    setTheme(newTheme)
    localStorage.setItem("mode",newTheme)
  }
  useEffect(()=>{
    document.documentElement.setAttribute("data-theme",theme)
  },[theme])

  return(
  <nav className="bg-base-200">
    <div className="navbar align-content">
       <div className="navbar-start">
          <NavLink to="/" className="hidden lg:flex btn btn-primary text-3xl items-center">
            C
          </NavLink>
          {/* DROPDOWN */}
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <FaBarsStaggered className="h-6 w-6"/>
              <ul tabIndex={0} className=" menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-200 rounded-box w-52">
                {/* <NavLinks/> */}
              </ul>
          </label>
          </div>
       </div>
       <div className="navbar-center">
          {/*NAVLIKS */}
       </div>
       <div className="navbar-end">
          {/* THEMEICON */}
          <label className="swap swap-rotate mt-1 items-center justify-center">
            <input type="checkbox"
            onClick={handleClick}
            />
            {/* sun icon */}
             <BsSunFill className="swap-on fill-current w-4 h-4"/>
             {/* moon icon */}
             <BsMoonFill className="swap-off fill-current w-4 h-4" /> 
            </label>
          {/* CART LINK */}
          <NavLink to="/cart" className="btn btn-circle btn-md ml-4">
            <div className="indicator">
               <BsCart3 className="h-6 w-6"/>
               <span className="badge badge-sm badge-primary indicator-item">
                 10
               </span>
            </div>
          </NavLink>
       </div>
    </div>
  </nav>
)
}

export default Navbar



