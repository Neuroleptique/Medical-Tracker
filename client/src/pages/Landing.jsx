import React from "react"
import SignupModal from "../components/SignupModal"
import LoginModal from "../components/LoginModal"

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
      <button className="btn">
        <a href="/calendar">Calendar</a>
      </button>
      <SignupModal />
      <LoginModal />
    </section>
  )
}

export default Landing
