import {useState, useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import {toast} from 'react-toastify'
import {TfiWrite} from 'react-icons/tfi'
import {register, reset} from '../features/auth/authSlice'
import Spinner from '../components/Spinner'
import images from '../images/med-1.png'
import logo from '../images/medimate 3.png'

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
    
      <div className=' border-2 border-white flex justify-center align-center my-[80px] mx-[50px] w-[1280px] h-[600px] max-sm:border-none max-sm:w-full max-sm:flex-col max-sm:mx-1'>
        <div  >
          <img src={logo} alt='logo' className='hidden max-sm:block' />
          <img src={images} alt="Photo" className=' mr-[60px] w-[470px] h-[509px] mt-[46px] mb-[45px]  block object-fill max-sm:hidden' />
        </div>


      
      <div className="signup-container flex justify-center ml-[42px] mt-[80px] mb-[46px] relative w-[388px] h-[409px] max-sm:p-3 max-sm:m-1">
      <div>
        {/* <h1>
          <TfiWrite /> Sign up
        </h1> */}
        
      </div>

      <section className="form font-Sans space-y-6 ">
      <p className=" mb-4 text-xl font-medium  text-gray-900 dark:text-white">Sign Up</p>
        <form onSubmit={onSubmit}>
          <div className="form-group">
          <label for="email" className="block mt-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
            <input
              type="text"
              className="form-control  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-[12px] focus:ring-blue-500 focus:border-blue-500 block w-[216px] h-[35px] p-3 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" 
              id="name" name="userName"
              value={userName}
              placeholder="Enter your name here"
              onChange={onChange} />
          </div>
          <div className="form-group">
          <label for="email" class="block mt-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
            <input
              type="email"
              className="form-control bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-[12px] focus:ring-blue-500 focus:border-blue-500 block w-[216px] h-[35px] p-3 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              id="email"
              name="email"
              value={email}
              placeholder="Enter your email here"
              onChange={onChange} />
          </div>
          <div className="form-group">
          <label for="email" class="block mt-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
            <input
              type="password"
              className="form-control bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-[12px] focus:ring-blue-500 focus:border-blue-500 block w-[216px] h-[35px] p-3 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              id="password" name="password"
              value={password}
              placeholder="***********"
              onChange={onChange} />
          </div>
          <div className="form-group">
          <label for="email" class="block mt-2 text-sm font-medium text-gray-900 dark:text-white">Confirm Password</label>
            <input
              type="password"
              className="form-control bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-[12px] focus:ring-blue-500 focus:border-blue-500 block w-[216px] h-[35px] p-3 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" 
              id="password2" name="password2"
              value={password2}
              placeholder="Confirm password here"
              onChange={onChange} />
          </div>
          <div className="form-group">
            <button type="submit" className='btn mt-4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-[8px] text-sm p-3 w-[216px] h-[45px] text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>Create Account</button>
          </div>
        </form>

      </section>
      </div>
      </div>
    
   
  )
}

export default Register



// <!-- Modal toggle -->
// <button data-modal-target="authentication-modal" data-modal-toggle="authentication-modal" class="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">
//   Toggle modal
// </button>

// <!-- Main modal -->
// <div id="authentication-modal" tabindex="-1" aria-hidden="true" class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] md:h-full">
//     <div class="relative w-full h-full max-w-md md:h-auto">
//         <!-- Modal content -->
//         <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
//             <button type="button" class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-hide="authentication-modal">
//                 <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
//                 <span class="sr-only">Close modal</span>
//             </button>
//             <div class="px-6 py-6 lg:px-8">
//                 <h3 class="mb-4 text-xl font-medium text-gray-900 dark:text-white">Sign in to our platform</h3>
//                 <form class="space-y-6" action="#">
//                     <div>
//                         <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
//                         <input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required>
//                     </div>
//                     <div>
//                         <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
//                         <input type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required>
//                     </div>
//                     <div class="flex justify-between">
//                         <div class="flex items-start">
//                             <div class="flex items-center h-5">
//                                 <input id="remember" type="checkbox" value="" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-600 dark:border-gray-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required>
//                             </div>
//                             <label for="remember" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
//                         </div>
//                         <a href="#" class="text-sm text-blue-700 hover:underline dark:text-blue-500">Lost Password?</a>
//                     </div>
//                     <button type="submit" class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login to your account</button>
//                     <div class="text-sm font-medium text-gray-500 dark:text-gray-300">
//                         Not registered? <a href="#" class="text-blue-700 hover:underline dark:text-blue-500">Create account</a>
//                     </div>
//                 </form>
//             </div>
//         </div>
//     </div>
// </div> 
