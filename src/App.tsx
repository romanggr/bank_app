import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Home from "./pages/Home"
import AppLayout from "./ui/AppLayout"
import Registration from "./pages/Registration"
import Login from "./pages/Login"
import ProtectedRoute from "./ui/ProtectedRoute"
import { Toaster } from "react-hot-toast"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import Dashboard from "./pages/Dashboard"
import History from "./pages/History"
import Cards from "./pages/Cards"
import Contacts from "./features/settings/Contacts"
import Settings from "./pages/Settings"
import PageNotFound from "./ui/PageNotFound"


const App = () => {
  const queryClient = new QueryClient();

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/login" element={<Login />} />
            {/*<Route path="/app" element={<ProtectedRoute><AppLayout /></ProtectedRoute>}>*/}
            {/*  <Route index element={<Navigate replace to="dashboard" />} />*/}
            {/*  <Route path="dashboard" element={<Dashboard />} />*/}
            {/*  <Route path="history" element={<History />} />*/}
            {/*  <Route path="settings" element={<Settings />} />*/}
            {/*  <Route path="contacts" element={<Contacts />} />*/}
            {/*  <Route path="cards" element={<Cards />} />*/}
            {/*  <Route path="card:id" element={<Cards />} />*/}

            {/*</Route>*/}
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
        <Toaster position="top-center" reverseOrder={false} />
      </QueryClientProvider>
    </>
  )
}

export default App