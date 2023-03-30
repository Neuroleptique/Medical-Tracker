import { FaSignOutAlt } from "react-icons/fa"
import { IoMdLogIn } from "react-icons/io"
import { TfiWrite } from "react-icons/tfi"
import { Link, useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { logout, reset } from "../features/auth/authSlice"

function Header() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.auth)

  const onLogout = () => {
    dispatch(logout())
    dispatch(reset())
    navigate("/")
  }

  return (
    <header className="max-w-full ">
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl">
            <Link to="/"> 100 Devs Appt Tracker</Link>
          </a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            {user ? (
              <button className="btn" onClick={onLogout}>
                <FaSignOutAlt />
                Logout
              </button>
            ) : (
              <>
                <li>
                  <Link to="/login">
                    <IoMdLogIn />
                    Login
                  </Link>
                </li>
                <li>
                  {" "}
                  <Link to="/register">
                    <TfiWrite />
                    Sign up
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
      <div className="divider"></div>
    </header>
  )
}

export default Header
