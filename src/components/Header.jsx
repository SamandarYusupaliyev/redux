import { Link } from "react-router-dom"

function Header() {
  return (
    <header className="bg-neutral py-2 text-neutral-content">
      <div className="align-content flex justify-center sm:justify-end">
        <div className="flex gap-x-2 sm:gap-x-8 items-center">
          <p className="text-xs sm:text-sm">"Hello ," "demo user"</p>
          <button className="btn btn-xs btn-outline btn-primary">Logout</button>
        </div>
            {/* User */}
            {/* Links */}
          <div className="flex gap-x-6 justify-center items-center sm:justify-end">
              <Link to="/login" className="link link-hover text-xs sm:textsm">Sign in / Guest</Link>
              <Link to="/register" className="link link-hover text-xs sm:textsm">Create an Account</Link>
           </div>
      </div>
    </header>
  )
}

export default Header