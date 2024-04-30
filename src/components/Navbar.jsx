import { FaSun,FaMoon } from "react-icons/fa6";
import { FiShoppingCart } from "react-icons/fi";
import { useEffect, useState} from "react";
import { Link } from "react-router-dom";


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
    <div className="bg-base-300 duration-300 transition ">
    <div className="navbar align-element justify-around">
      <div className="navbar-start">
        <Link to ="/" className="btn text-[30px] btn-primary lg:btn-lg hidden lg:flex ">C</Link>
      </div>
        <div className='gap-5'>
          <label className="swap swap-rotate items-center ">
            <input type="checkbox"
              onClick={handleClick}/>
            {/* sun icon */}
            <FaSun className="swap-on fill-current w-5 h-5"/>
            {/* moon icon */}
            <FaMoon className="swap-off fill-current w-5 h-5" /> 
          </label>
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
         <div className="indicator items-center">
             <span className="indicator-item badge badge-primary">0</span> 
             <button className="m-1"><FiShoppingCart className="h-6 w-6"/></button> 
          </div>
          </div>
       </div>
 </div>
</div>
)
}

export default Navbar

