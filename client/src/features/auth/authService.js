import axios from 'axios'

// const API_URL = '/api/users/'

// Registers user
const register = async (userData) => {
  const response = await axios.post('signup', userData)

  if(response.data) {
    localStorage.setItem('user', JSON.stringify(response.data))
  }

  return response.data
}

// Login the user
const login = async (userData) => {
  const response = await axios.post('login', userData)

  if(response.data) {
    localStorage.setItem('user', JSON.stringify(response.data))
  }

  return response.data
}

// Logs out the user
const logout = () => {
  localStorage.removeItem('user')
}

const authService = {
  register,
  logout,
  login,
}

export default authService