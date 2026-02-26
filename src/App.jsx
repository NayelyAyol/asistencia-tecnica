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

// tecnicos
import TecnicoCreate from "./pages/Tecnicos/TecnicosCreate"
import TecnicoList from "./pages/Tecnicos/TecnicosList"
import TecnicoEdit from "./pages/Tecnicos/TecnicosEdit"
import TecnicoDetail from "./pages/Tecnicos/TecnicosDetail"

// tickets
import TicketCreate from "./pages/Tickets/TicketsCreate"
import TicketList from "./pages/Tickets/TicketsList"
import TicketDetail from "./pages/Tickets/TicketsDetail"
import TicketEdit from "./pages/Tickets/TicketsEdit"





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

        {/* RUTAS TECNICOS */}
        <Route
          path="/tecnicos"
          element={
            <PrivateRoute>
              <DashboardLayout />
            </PrivateRoute>
          }
        >
          <Route index element={<TecnicoList />} />
          <Route path="crear" element={<TecnicoCreate />} />
          <Route path="listar" element={<TecnicoList />} />
          <Route path="actualizar/:id" element={<TecnicoEdit />} />
          <Route path="buscar" element={<TecnicoDetail />} />
        </Route>

        {/* RUTAS TICKETS */}
        <Route
          path="/tickets"
          element={
            <PrivateRoute>
              <DashboardLayout />
            </PrivateRoute>
          }
        >
          <Route index element={<TicketList />} />
          <Route path="crear" element={<TicketCreate />} />
          <Route path="listar" element={<TicketList />} />
          <Route path="actualizar/:id" element={<TicketEdit />} />
          <Route path="buscar" element={<TicketDetail />} />
        </Route>


      </Routes>
    </>
  )
}

export default App