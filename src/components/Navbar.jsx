import { FaSun,FaMoon } from "react-icons/fa6";
import { Link } from 'react-router-dom'


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
         <div className="indicator items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
            <span className="badge badge-sm indicator-item">0</span>
          </div>
       </div>
 </div>
</div>
)
}

export default Navbar

