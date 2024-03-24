import React, { useEffect, useState } from "react";

const BoostingComponent = () => {
  const text = "Boosting Your Business!";
  const [end, SetEnd] = useState(1);
  const [inc, SetInc] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      if (inc) {
        if (end === text.length - 1) {
          SetInc(false);
          SetEnd(text.length);
        } else {
          SetEnd((prev) => prev + 1);
        }
      } else {
        if (end === 2) {
          SetInc(true);
          SetEnd(1);
        } else {
          SetEnd((prev) => prev - 1);
        }
      }
    }, 150);
    return () => clearInterval(interval);
  });

  return (
    <div className="flex flex-col justify-center">
      <h2
        id="moving-text"
        className="p-9 mt-3 text-orange-500 text-xl text-center sm:text-2xl md:text-3xl lg:text-5xl font-bold mb-6 break-words"
      >
        {text.slice(0, end)}
      </h2>
      <p class="sm:text-xl md:text-xl font-bold text-center px-10 mb-5">
        At SSP Associates, we're all about giving entrepreneurs the right tools
        to succeed. Our platform makes starting and growing a business
        straightforward with easy-to-use solutions for getting your business off
        the ground and keeping it compliant. Since we began in 2011, we've
        become a trusted partner for entrepreneurs looking to bring their
        visions to life. We offer a full range of services, including company
        registration, intellectual property, tax planning, and ongoing
        compliance. Our experts are here to navigate the complex legal stuff, so
        you don't have to, ensuring your business stays on track.
      </p>
    </div>
  );
};

export default BoostingComponent;
