import React from "react";
import "../App.css";
const CallbackForm = () => {
  return (
    <>
      <form className="callback-form rounded-10 shadow-md mx-auto px-4 w-full bg-white-500">
        <div className="flex flex-col">
          <p className="text-2xl mb-2 font-bold">Request A Call Back</p>
          <input
            className="input-element rounded"
            type="text"
            placeholder="Your Name"
          />
          <input
            className="input-element rounded"
            type="text"
            placeholder="Email Address"
          />
          <input
            className="input-element rounded"
            type="text"
            placeholder="+91 xxxxx-xxxxx"
          />
          <button className="bg-orange-500 text-white font-bold text-1xl mt-2 p-1 rounded">
            Submit
          </button>
        </div>
      </form>
    </>
  );
};

export default CallbackForm;
