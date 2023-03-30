import Landing from "./pages/Landing"
import Login from "./pages/LoginForm"
import Register from "./pages/SignupForm"
import Dashboard from "./pages/Dashboard"
import Header from "./components/Header"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import ProtectedRoute from "./components/ProtectedRoute"

function App() {
  return (
    <>
      <Router>
        <Header />

        <div className="container">
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route element={<ProtectedRoute />}>
              <Route path="/dashboard" element={<Dashboard />} />
            </Route>
            {/* <Route path='/dashboard' element={<Dashboard />} /> */}
          </Routes>
        </div>
      </Router>
    </>
  )
}

export default App
