import { useState, useEffect } from "react"
import { IoMdLogIn } from "react-icons/io"
import { useSelector, useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import { login, reset } from "../features/auth/authSlice"
import Spinner from "../components/Spinner"

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  })

  const { email, password } = formData

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  )

  useEffect(() => {
    if (isError) {
      toast.error(message)
    }

    if (isSuccess || user) {
      navigate("/dashboard")
    }

    dispatch(reset())
  }, [user, isError, isSuccess, message, navigate, dispatch])

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault()

    const userData = {
      email,
      password
    }

    dispatch(login(userData))
  }

  if (isLoading) {
    return <Spinner />
  }

  return (
    <>
      {/* <section>
        <h1>
          <IoMdLogIn /> Login
        </h1>
        <p>Please login to your account</p>
      </section>

      <section className="form">
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={email}
              placeholder="Enter your email here"
              onChange={onChange} />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              id="password" name="password"
              value={password}
              placeholder="Enter your password here"
              onChange={onChange} />
          </div>
          <div className="form-group">
            <button type="submit" className='btn btn-block'>Submit</button>
          </div>
        </form>

      </section> */}
      <section className="flex justify-center items-center gap-2">
        <div className="card w-96 bg-base-100 shadow-xl ">
          <div className="card-body">
            <h2 className="card-title mx-auto">Please Login To Your Account</h2>
            <form onSubmit={onSubmit}>
              <div className="form-group">
                <input
                  type="email"
                  className="input input-bordered w-full max-w-xs my-2"
                  id="email"
                  name="email"
                  value={email}
                  placeholder="Enter your email here"
                  onChange={onChange}
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  className="input input-bordered w-full max-w-xs my-2"
                  id="password"
                  name="password"
                  value={password}
                  placeholder="Enter your password here"
                  onChange={onChange}
                />
              </div>
              <div className="form-group">
                <div className="card-actions justify-end">
                  <button type="submit" className="btn btn-primary btn-block">
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}

export default Login
