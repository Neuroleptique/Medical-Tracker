import { useState, useEffect } from "react";
import { IoMdLogIn } from "react-icons/io";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { login, reset } from "../features/auth/authSlice";
import Spinner from "../components/Spinner";
import logoImage from "../images/medimate2.png";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    if (isSuccess || user) {
      navigate("/dashboard");
    }

    dispatch(reset());
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const userData = {
      email,
      password,
    };

    dispatch(login(userData));
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <div className="form h-screen flex bg-white justify-center items-center">
        <div className="w-auto md:w-7/12 h-auto py-6 md:h-4/6 border-2 flex flex-col md:flex-row justify-center items-center h-70 border-black">
          <div className="w-6/12 flex flex-col items-center text-center">
            <span className="logo-section ">
              <img className="w-11/12 
               pb-4 md:mb-6 " src={logoImage} alt="Logo Image" />
            </span>
            <span className="text-black w-10/12 hidden md:block">
              A web application that helps users keep track of their medical
              appointments and prescriptions.
            </span>
          </div>
          <div className="w-4/5 md:w-2/5 bg-neutral-100 md:h-4/5 p-3 card md:mr-5 leading-loose px-6">
            <div className="login-header-section py-2">
              <h1 className="text-4xl text-center font-semi-bold">Log In</h1>
              <span>
                <p className="text-align text-center">Sign in to continue</p>
              </span>
            </div>
            <form onSubmit={onSubmit}>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text text-base ">Email</span>
                </label>
                <input
                  type="email"
                  className="input input-bordered w-full max-w-xs"
                  id="email"
                  name="email"
                  value={email}
                  placeholder="Enter your email here"
                  onChange={onChange}
                />
              </div>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text text-base">Password</span>
                </label>
                <input
                  type="password"
                  className="input input-bordered w-full max-w-xzzzzs"
                  id="password"
                  name="password"
                  value={password}
                  placeholder="Enter your password here"
                  onChange={onChange}
                />
              </div>
              
                <button type="submit" className="btn  bg-[#2A364E] text-white mt-4 text-xl">
                  Submit
                </button>
              
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
