import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import CardSection from "./PopularCalculators";
import WhyLoanWalle from "./WhyLoanWalle";
import PBAdvantage from "./PBAdvantage";
import MobileApp from "./MobileApp";
import Testimonial from "./Testimonial";
import SupportSection from "./SupportSection";
import Temp from "./Temp";
import IncomeTaxCalculator from "./IncomeTaxCalculator";
import ULIPCalculator from "./ULIPCalculator";


const Body = () => {
  const location = useLocation();

  // Pages where components should be hidden
  const hiddenPaths = ["/login", "/signup", "/VerifyOTP", "/SIPCalculator","/IncomeTaxCalculator","/ULIPCalculator"];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      {!hiddenPaths.includes(location.pathname) && <Temp />}

      <div className="flex-grow flex items-center justify-center m-4 p-6">
        <Outlet /> {/* Only renders the current page, including Home when path is "/" */}
      </div>

      {/* Show sections only if NOT on login/signup */}
      {!hiddenPaths.includes(location.pathname) && (
        <>
          <WhyLoanWalle />
          <CardSection />
          <PBAdvantage />
          <MobileApp />
          <Testimonial />
          <SupportSection />
          <Footer />
        </>
      )}
    </div>
  );
};

export default Body;
