import { BrowserRouter, Routes, Route } from "react-router-dom";

import Body from "./components/Body";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Services from "./components/Services";
import Login from "./components/Login";
import Signup from "./components/Signup";
import VerifyOTP from "./components/VerifyOTP";
import SIPCalculator from "./components/SIPCalculator";
import IncomeTaxCalculator from "./components/IncomeTaxCalculator";
import ULIPCalculator from "./components/ULIPCalculator";

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
          <Route path="SIPCalculator" element={<SIPCalculator />} />
          <Route path = "IncomeTaxCalculator" element = {<IncomeTaxCalculator/>}/>
           <Route path ="ULIPCalculator" element = {<ULIPCalculator />}/> 
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
