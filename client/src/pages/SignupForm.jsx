import {useState, useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import {toast} from 'react-toastify'
import {TfiWrite} from 'react-icons/tfi'
import {register, reset} from '../features/auth/authSlice'
import Spinner from '../components/Spinner'

function Register() {
  const [formData, setFormData] = useState({
    userName: '',
    email: '',
    password: '',
    password2: ''
  })

  const { userName, email, password, password2 } = formData

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const {user, isLoading, isError, isSuccess, message} = useSelector(
    (state) => state.auth
    )


  useEffect(() => {
    if(isError) {
      toast.error(message)
    }

    if(isSuccess || user) {
      navigate('/dashboard')
    }

    dispatch(reset())

  }, [user, isError, isSuccess, message, navigate, dispatch])

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault()

    if(password !== password2) {
      toast.error('Passwords do not match!')
    } else {
      const userData = {
        userName,
        email,
        password,
      }

      dispatch(register(userData))
    }
  }

  if(isLoading) {
    return <Spinner />
  }

  return (
    <>
      <section>
        <h1>
          <TfiWrite /> Sign up
        </h1>
        <p>Please create your account</p>
      </section>

      <section className="form">
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="name" name="userName"
              value={userName}
              placeholder="Enter your name here"
              onChange={onChange} />
          </div>
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
            <input
              type="password"
              className="form-control"
              id="password2" name="password2"
              value={password2}
              placeholder="Confirm password here"
              onChange={onChange} />
          </div>
          <div className="form-group">
            <button type="submit" className='btn btn-block'>Submit</button>
          </div>
        </form>

      </section>
    </>
  )
}

export default Register