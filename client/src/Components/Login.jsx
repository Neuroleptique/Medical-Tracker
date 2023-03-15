import React from 'react'
import { Link } from "react-router-dom";


function Login(props) {
  return (
 
        
    <div className="w-2/5 bg-neutral-100 h-4/5 p-3 card mr-5 leading-loose px-6">
    <div className="login-header-section py-2">
      <h1 className="text-4xl text-center font-semi-bold">{props.title}</h1>
      <span>
        <p className="text-align text-center">Sign in to continue</p>
      </span>
    </div>
    <form action="/">
      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text text-base ">Name</span>
        </label>
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs"
        />
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text text-base">Password</span>
          </label>
          <input
            type="Password"
            placeholder="Enter Your Password"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <button className="btn btn-primary text-white mt-4 text-xl">
          {props.buttonText}
        </button>
      </div>
    </form>
    <span>
      <p>
        {props.memberText}
        <Link to={props.link} className="link-info">
         {props.linkText}
        </Link>
      </p>
    </span>
  </div>
  )
}

export default Login