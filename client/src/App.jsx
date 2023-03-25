import { Routes, Route } from "react-router-dom"
import Landing from "./pages/Landing"
import Calendar from "./pages/Calendar"

function App() {
  return (
    <main className="h-screen flex justify-center items-center m-6">
      <div>
        <h1 className="text-center text-2xl">Appt Tracker</h1>
        <Routes>
          <Route path={"/"} element={<Landing />} />
          <Route path={"/calendar"} element={<Calendar />} />
        </Routes>
      </div>
    </main>
  )
}

export default App
