import { Link } from "react-router-dom"
import { Form } from "react-router-dom"
import {FormInput} from "../components/FormInput"

function Login() {
  return (
    <div className="h-screen grid place-content-center">
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 ">
  <form className="card-body">
    <div className="form-control">
      <h1 className="text-3xl font-bold text-center mb-4">Login</h1>
      <label className="label">
        <span className="label-text">Email:</span>
      </label>
      <FormInput type="email" name="email" de className="input input-bordered" required />
    </div>
    <div className="form-control">
      <label className="label">
        <span className="label-text">Password:</span>
      </label>
      <FormInput type="password"  className="input input-bordered" required />
    </div>
    <div className="form-control mt-6">
      <button className="btn btn-primary mb-3">Login</button>
      <button className="btn btn-secondary mb-3">GUEST USER </button>
        <p className="text-center -mf-3">Already a member? 
          <Link className="link link-hover  text-blue-600" to="/register">
          Register
        </Link>
        </p>
    </div>
  </form>
</div>
</div>
)
}

export default Login