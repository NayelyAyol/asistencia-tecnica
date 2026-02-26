import { Routes, Route } from "react-router-dom"
import PrivateRoute from "./routes/PrivateRoutes"
import DashboardLayout from "./components/layout/DashboardLayout"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

//Auth
import Login from "./pages/Auth/Login"
import Register from "./pages/Auth/Register"

//Home
import Home from "./pages/Home"
// clientes
import ClienteCreate from "./pages/Clientes/ClientesCreate" 
import ClienteList from "./pages/Clientes/ClientesList" 
import ClienteEdit from "./pages/Clientes/ClientesEdit" 
import ClienteDetail from "./pages/Clientes/ClientesDetail" 


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

         {/* RUTAS CLIENTES */}
        <Route
          path="/clientes"
          element={
            <PrivateRoute>
              <DashboardLayout />
            </PrivateRoute>
          }
        >
          <Route index element={<ClienteList />} />
          <Route path="crear" element={<ClienteCreate />} />
          <Route path="listar" element={<ClienteList />} />
          <Route path="actualizar/:id" element={<ClienteEdit />} />
          <Route path="buscar" element={<ClienteDetail />} />
        </Route>

      </Routes>
    </>
  )
}

export default App