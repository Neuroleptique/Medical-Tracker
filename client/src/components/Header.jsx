import { FaSignOutAlt } from "react-icons/fa";
import { IoMdLogIn } from "react-icons/io";
import { TfiWrite } from "react-icons/tfi";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout, reset } from "../features/auth/authSlice";
import Logo from "../assets/logo/medimate.png";
import Calendar from "../assets/icons/calendar.png";

function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/");
  };

  return (
    <>
      <header className="bg-gray-200 navbar flex justify-between items-center p-4">
        <div className="">
          <Link to="/">
            <img src={Logo} className="w-20 h-20"></img>
          </Link>
        </div>
        <ul className="menu menu-horizontal px-2">
          {user ? (
            <li>
              <button
                className="bg-blue-900 hover:bg-blue-500 text-white py-2 px-4 rounded"
                onClick={onLogout}
              >
                <FaSignOutAlt />
                Logout
              </button>
            </li>
          ) : (
            <>
              <li>
                <Link
                  to="/login"
                  className="bg-blue-400 hover:bg-blue-500 text-white py-2 px-4 rounded m-2"
                >
                  <IoMdLogIn />
                  Login
                </Link>
              </li>

              <li>
                <Link
                  to="/register"
                  className="bg-blue-400 hover:bg-blue-500 text-white py-2 px-4 rounded m-2"
                >
                  <TfiWrite />
                  Sign up
                </Link>
              </li>
            </>
          )}
        </ul>
      </header>
    </>
  );
}

export default Header;
