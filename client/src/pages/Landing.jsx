import React from "react"
import SignupModal from "../components/SignupModal"
import LoginModal from "../components/LoginModal"
import { Link } from "react-router-dom"

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
        <Link to={"/calendar"}>Calendar</Link>
      </button>
      <SignupModal />
      <LoginModal />
    </section>
  )
}

export default Landing
