import { Routes, Route } from "react-router-dom"
import PrivateRoute from "./routes/PrivateRoutes"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

//Auth
import Login from "./pages/Auth/Login"
import Register from "./pages/Auth/Register"

//Home
import Home from "./pages/Home"


function App() {
  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} />

      <Routes>
        {/* LOGIN */}
        <Route path="/" element={<Login />} />

        {/* REGISTER */}
        <Route path="/register" element={<Register />} />

        {/* PÁGINA PRINCIPAL */}
        <Route
          path="/home"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
      </Routes>
    </>
  )
}

export default App