import React from "react"
import SignupForm from "./SignupForm"
import signupLogo from "../assets/images/med1.png"

const SignupModal = () => {
  return (
    <>
      <input type="checkbox" id="signup-modal" className="modal-toggle" />

      <div className="modal">
        <div className="modal-box relative flex flex-col items-center justify-center border-2 border-black">
          <img
            src={signupLogo}
            alt="signup-logo"
            className="w-[250px] h-[250px] border-2 border-black shadow-md rounded"
          />
          <label
            htmlFor="signup-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <SignupForm />
          {/* <SignupRoute /> */}
        </div>
      </div>
    </>
  )
}

export default SignupModal
