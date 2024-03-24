import React from "react";
import "../App.css";
const SliderHoc = (props) => {
  const { bgcolor, text } = props;
  const bagcolor = {
    backgroundColor: bgcolor,
  };
  return (
    <div
      key={text}
      style={bagcolor}
      className={`flex flex-col justify-evenly p-10 rounded-2xl border-2 border border-white slk-slide`}
    >
      <p className="text-center text-xl font-bold">{text}</p>
      <p className="text-center text-xl">Registration</p>
    </div>
  );
};

export default SliderHoc;
