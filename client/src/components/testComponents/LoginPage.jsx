import React from "react"
import Login from "./Login"
import mediMateImg from "../../assets/images/medimate2.png"

function LoginPage() {
  return (
    <div className="h-screen flex bg-white justify-center items-center ">
      <div className=" h-4/6 border-2 flex justify-center items-center h-70 border-black">
        <div className=" flex flex-col items-center text-center">
          <span className="logo-section ">
            <img className=" mb-6 " src={mediMateImg} alt="Login Logo" />
          </span>
          <span className="text-black ">
            A web application that helps users keep track of their medical
            appointments and prescriptions.
          </span>
        </div>
        <Login
          title="Login"
          buttonText="LOGIN"
          memberText="Not a member?"
          linkText="Sign up"
          link="../signup"
        ></Login>
      </div>
    </div>
  )
}

export default LoginPage
