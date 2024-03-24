import React, { useEffect, useState } from "react";
import CallbackForm from "./CallbackForm";

const CallbackComponent = () => {
  const arr = [
    "Transforming Visions into reality",
    "Building the Foundation for Success",
    "Navigationg The Feature of Business Together",
    "Crafting the Business to Landscaps",
    "Drive the Success to creative",
    "Company Registration IN Hyderabad!!",
    "Empower your business to Innovative Solutions",
    "Leading THE way Business in Excelence",
    "Navigating the Feature Business to Success",
  ];

  const [count, setCount] = useState(0);

  useEffect(() => {
    // Set up the interval when the component mounts
    const textElement = document.querySelector(".magic-text");
    const interval = setInterval(() => {
      if (count === arr.length - 1) {
        setCount(0);
        textElement.textContent = arr[count];
      } else {
        setCount((prevCount) => prevCount + 1);
        textElement.textContent = arr[count];
      }
    }, 1000);
    return () => clearInterval(interval);
  });
  return (
    <div className=" flex bg-blue-700 p-10 bg-container grid grid-cols-1 md:grid-cols-2">
      <div className="flex flex-col justify-center magic-text font-bold text-4xl md:text-6xl">
        Transforming Visions into reality
      </div>
      <CallbackForm />
    </div>
  );
};

export default CallbackComponent;
