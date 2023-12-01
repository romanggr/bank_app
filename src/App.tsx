import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import AppLayout from "./ui/AppLayout"


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>


          </Route>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App