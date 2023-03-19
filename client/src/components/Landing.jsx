import React from "react"
import SignupModal from "./SignupModal"
import LoginModal from "./LoginModal"

const Landing = () => {
  return (
    <section className="flex h-screen justify-center items-center gap-2">
      <label htmlFor="login-modal" className="btn">
        Login
      </label>
      <label htmlFor="signup-modal" className="btn">
        Sign up
      </label>
      <button className="btn">Logout</button>
      <SignupModal />
      <LoginModal />
    </section>
  )
}

export default Landing
