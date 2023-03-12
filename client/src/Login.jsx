import React from "react";

function Login() {
  return (
    <div className="h-screen flex bg-white justify-center items-center">
      <div className="w-7/12 h-4/6 border-2 flex justify-center items-center h-70 border-black">
        <div className="w-6/12 flex flex-col items-center text-center">
          <span className="logo-section ">
            <img className="w-11/12 mb-6 " src="../medimate2.png" alt="" />
          </span>
          <span className="text-black w-10/12">
            A web application that helps users keep track of their medical
            appointments and prescriptions.
          </span>
        </div>
        <div className="w-2/5 bg-neutral-100 h-4/5 p-3 card mr-5 leading-loose px-6">
          <div className="login-header-section py-2">
            <h1 className="text-4xl text-center font-semi-bold">Login</h1>
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
                LOGIN
              </button>
            </div>
          </form>
          <span>
            <p>
              Not a member?{" "}
              <a href="#" className="link-info">
                Sign Up
              </a>
            </p>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Login;
