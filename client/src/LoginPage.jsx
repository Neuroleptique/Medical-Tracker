import React from "react";
import Login from "./Components/Login";
function LoginPage() {
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
       <Login title="Login" buttonText="LOGIN" memberText="Not a member?" linkText="Sign up"></Login>
      </div>
    </div>
  );
}

export default LoginPage;
