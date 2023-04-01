import {FaSignOutAlt} from 'react-icons/fa'
import {IoMdLogIn} from 'react-icons/io'
import {TfiWrite} from 'react-icons/tfi'
import {Link, useNavigate} from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import {logout, reset} from '../features/auth/authSlice'

function Header() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const {user} = useSelector((state) => state.auth)

  const onLogout = () => {
    dispatch(logout())
    dispatch(reset())
    navigate('/')
  }

  return (
    <header className='header'>
      <div className="logo">
        <Link to='/'>LOGO</Link>
      </div>
      <ul>
        {user ? (
          <li>
            <button className='btn' onClick={onLogout}>
              <FaSignOutAlt />Logout
            </button>
          </li>
        ) : (
      <>
        <li>
        <Link to='/login'>
          <IoMdLogIn />Login
        </Link>
      </li>

      <li>
        <Link to='/register'>
          <TfiWrite />Sign up
        </Link>
      </li>
      </>
      )}

      </ul>
    </header>
  )
}

export default Header