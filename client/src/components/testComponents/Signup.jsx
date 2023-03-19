import React from "react"
import Login from "./Login"
function LoginPage() {
  return (
    <div className="h-screen flex bg-white justify-center items-center">
      <div className="w-7/12 h-4/6 border-2 flex justify-center items-center h-70 border-black">
        <div className="w-6/12 flex flex-col items-center text-center">
          <span className="logo-section ">
            <img
              className="w-11/12 mb-6 "
              src="../med1.png"
              alt="Signup Logo"
            />
          </span>
        </div>
        <Login
          title="Signup"
          buttonText="CREATE ACCOUNT"
          memberText="Already a member?"
          linkText="Sign in"
          link="/login"
        ></Login>
      </div>
    </div>
  )
}
