import React from "react";
import BoostingComponent from "../components/BoostingComponent";
import CallbackComponent from "../components/CallbackComponent";
import Faqs from "../components/Faqs";
import Footer from "../components/Footer";
import GetinTouchComponent from "../components/GetinTouchComponent";
import NavbarInfo from "../components/NavbarInfo";
import NavbarMain from "../components/NavbarMain";
import OtherServices from "../components/OtherServices";
import OurServices from "../components/OurServices";
import WhyChooseUse from "../components/WhyChooseUse";

const LandingPage = () => {
  return (
    <>
      <NavbarInfo />
      <NavbarMain />
      <CallbackComponent />
      <BoostingComponent />
      <GetinTouchComponent />
      <OurServices />
      <WhyChooseUse />
      <OtherServices />
      <Faqs />
      <Footer />
    </>
  );
};

export default LandingPage;
