import Landing from "./pages/Landing"
import Login from "./pages/LoginForm"
import Register from "./pages/SignupForm"
import Dashboard from "./pages/Dashboard"
import Header from "./components/Header"
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <>

      <Router>
        <div className="flex justify-center items-center py-8">
          <Header />
        </div>

        <div className='container'>
          <Routes>
            <Route path='/' element={<Landing />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/dashboard' element={<Dashboard />} />
          </Routes>
        </div>
      </Router>


    </>

  )
}

export default App
