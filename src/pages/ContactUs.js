import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

const ContactUs = () => {
  return (
    <div>
      <Footer />
      <Link to="/">
        <button className="mt-6 ml-6 bg-red-500 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-lg">
          back
        </button>
      </Link>
    </div>
  );
};

export default ContactUs;
