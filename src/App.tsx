import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import AppLayout from "./ui/AppLayout"
import Registration from "./pages/Registration"
import Login from "./pages/Login"


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>


          </Route>
          <Route path="/" element={<Home />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/login" element={<Login />} />

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App