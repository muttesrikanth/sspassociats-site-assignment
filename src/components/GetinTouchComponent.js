import React from "react";

const GetinTouchComponent = () => {
  return (
    <div class="flex justify-center items-center p-4">
      <div class="bg-white  rounded-lg shadow-2xl p-8 mx-auto my-8 w-full max-w-6xl border-t-4 border-blue-500">
        <h2 class="text-2xl font-bold text-blue-700 mb-6 text-center">
          Get In Touch
        </h2>
        <form class="flex flex-row flex-wrap  items-center space-x-2 space-y-2 bg-blue-50 p-4 rounded-lg">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required=""
            class="w-full md:w-auto px-3 py-2 border border-blue-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300 transition duration-200 ease-in-out"
          />
          <input
            type="tel"
            name="mobileNumber"
            placeholder="Mobile No."
            required=""
            class="w-full md:w-auto px-3 py-2 border border-blue-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300 transition duration-200 ease-in-out"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            required=""
            class="w-full md:w-auto px-3 py-2 border border-blue-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300 transition duration-200 ease-in-out"
          />
          <select
            name="service"
            class="w-full md:w-auto px-3 py-2 border border-blue-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500 transition duration-200 ease-in-out"
          >
            <option value="">Service</option>
            <option value="company-registration">Company Registration</option>
            <option value="gst-registration">GST</option>
            <option value="trademark-registration">Trademark</option>
            <option value="llp-registration">LLP</option>
            <option value="opc-registration">One Person Company</option>
            <option value="digital-signature">Digital Signature</option>
            <option value="other">Other</option>
          </select>
          <button
            type="submit"
            class="bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-700 hover:to-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-200 ease-in-out shadow-lg"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default GetinTouchComponent;
