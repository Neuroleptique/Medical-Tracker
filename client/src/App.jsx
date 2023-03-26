import Landing from "./pages/Landing"
import Login from "./pages/Login"
import Register from "./pages/Register"
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
          <Route path='/' element={<Dashboard />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </div>
    </Router> 

    <main className="flex justify-center items-center">
      <Landing />
    </main>


    </>

  )
}

export default App
