import { FaSun,FaMoon } from "react-icons/fa6";
import { useEffect, useState} from "react";


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
    <label className="swap swap-rotate items-center">
      <input type="checkbox"
        onClick={handleClick}
        />
      {/* sun icon */}
        <FaSun className="swap-on fill-current w-5 h-5"/>
      {/* moon icon */}
        <FaMoon className="swap-off fill-current w-5 h-5" /> 
    </label>
)
}

export default Navbar



