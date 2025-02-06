import { BrowserRouter, Routes, Route } from "react-router-dom";

import Body from "./components/Body";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Services from "./components/Services";
import Login from "./components/Login";
import Signup from "./components/Signup";
import VerifyOTP from "./components/VerifyOTP";

function App() {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<Body />}>
          <Route index element={<Home />} /> {/* Default route for "/" */}
          <Route path="Home" element={<Home />} />
          <Route path="About" element={<About />} />
          <Route path="Contact" element={<Contact />} />
          <Route path="Services" element={<Services />} />
          <Route path="Login" element={<Login />} />
          <Route path="Signup" element={<Signup />} />  
          <Route path="VerifyOTP" element={<VerifyOTP />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
