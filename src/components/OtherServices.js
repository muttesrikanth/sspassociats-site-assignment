import SliderHoc from "../hoccomponents/SliderHoc";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const OtherServices = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024, // Large devices (desktops)
        settings: {
          slidesToShow: 3, // Show 3 slides at a time
        },
      },
      {
        breakpoint: 576, // Medium devices (tablets)
        settings: {
          slidesToShow: 2, // Show 2 slides at a time
        },
      },
      {
        breakpoint: 372, // Small devices (phones)
        settings: {
          slidesToShow: 1, // Show 1 slide at a time
        },
      },
    ],
  };

  return (
    <div className="md:mx-5 mx-10 sm:mx-10 xs:mx-10">
      <div>
        <h2 class="text-3xl font-bold text-gray-800 mb-6 text-center">
          Other Services
        </h2>
        <Slider {...settings}>
          <div>
            <SliderHoc bgcolor={"red"} text={"ISO"} />
          </div>
          <div>
            <SliderHoc bgcolor={"green"} text={"IEC"} />
          </div>
          <div>
            <SliderHoc bgcolor={"blue"} text={"GST"} />
          </div>
          <div>
            <SliderHoc bgcolor={"pink"} text={"APEDA"} />
          </div>
          <div>
            <SliderHoc bgcolor={"indigo"} text={"FIRM"} />
          </div>
          <div>
            <SliderHoc bgcolor={"purple"} text={"LLP"} />
          </div>
          <div>
            <SliderHoc bgcolor={"yellow"} text={"GHMC"} />
          </div>
          <div>
            <SliderHoc bgcolor={"pink"} text={"SHOOP"} />
          </div>
          <div>
            <SliderHoc bgcolor={"indigo"} text={"FOOD"} />
          </div>
          <div>
            <SliderHoc bgcolor={"purple"} text={"TM"} />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default OtherServices;
