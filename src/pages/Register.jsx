import { Link } from "react-router-dom"

function Register() {
  return(
       <div className="flex justify-center items-center mt-[100px]">
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 ">
      <form className="card-body">
        <div className="form-control">
          <h1 className="text-3xl font-bold text-center mb-4">Register</h1>
          <label className="label">
            <span className="label-text">Username</span>
          </label>
          <input type="email" placeholder="username" className="input input-bordered" required />
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered" required />
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary mb-3">Register</button>
            <p className="text-center">Already a member? 
              <Link className="link link-hover  text-blue-600" to="/login">
              Login
            </Link>
            </p>
        </div>
      </form>
    </div>
    </div>
  )
 }
  
  export default Register