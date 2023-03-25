import React from "react"
import LoginForm from "./LoginForm"
import mediMateImg from "../assets/images/medimate2.png"

const LoginModal = () => {
  return (
    <>
      <input type="checkbox" id="login-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative flex flex-col items-center justify-center border-2 border-black">
          <img src={mediMateImg} alt="medimate" className="" />
          <label
            htmlFor="login-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <div className="mx-16">
            <LoginForm />
          </div>
        </div>
      </div>
    </>
  )
}

export default LoginModal
