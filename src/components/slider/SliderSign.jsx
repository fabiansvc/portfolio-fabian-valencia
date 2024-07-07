/* eslint-disable react/prop-types */
import Slider from "react-slick";
import SliderContent from "./SliderContent";
import "./styles-slider-sign.css";

export default function SliderSign({ title, datas }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="container-slider-sign">
      <h1 className="slider-sign-title"> {title} </h1>
      <Slider {...settings}>
        {datas.map((data, index) => (
          <SliderContent
            key={index}
            subtitle={data.subtitle}
            content={data.content}
          />
        ))}
      </Slider>
    </div>
  );
}
