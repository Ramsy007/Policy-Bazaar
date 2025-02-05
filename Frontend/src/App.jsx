import { BrowserRouter,Routes,Route } from "react-router-dom"

import Body from "./components/Body"
import Home from "./components/Home"
import About from "./components/About"
import Contact from "./components/Contact"
import Services from "./components/Services"
import Login from "./components/Login"
function App() {
 

  return (
    <>
      <BrowserRouter basename="/">
      <Routes>
       <Route path="/" element={<Body/>}>
       <Route path="/Home" element={<Home/>}></Route>
       <Route path="/About" element={<About/>}></Route>
       <Route path="/Contact" element={<Contact/>}></Route>
       <Route path="/Services" element={<Services/>}></Route>
       <Route path="/Login" element={<Login/>}></Route>
       </Route>
      </Routes>
      </BrowserRouter>
     
    </>
  )
}

export default App
