/* eslint-disable react/prop-types */
import Slider from "react-slick";
import SliderContent from "./SliderContent";
import "./styles-slider-sign.css";
import useSignStore from "../../stores/store-sign-selected";
import { useMemo } from "react";
import { Vector3 } from "three";

/**
 * SliderSign component
 *
 * This component represents a slider with dynamic content.
 * @component
 *
 * @param {Object} props - The component props.
 * @param {Array<Object>} props.datas - An array of objects containing the data for each slide.
 * @param {string} props.datas.subtitle - The subtitle of the slide.
 * @param {string} props.datas.content - The content of the slide.
 * @param {string} props.datas.link - The link of the slide.
 * @returns {JSX.Element} The rendered component.
 */

export default function SliderSign({ datas }) {
  console.log(datas);
  const { setSign } = useSignStore();

  const settings = useMemo(
    () => ({
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    }),
    []
  );

  return (
    <div className="container-slider-sign">
      <button
        className="close-button"
        onClick={() =>
          setSign({
            name: "NOT_SIGN_SELECTED",
            positionCamera: new Vector3(0, 2, 4),
          })
        }
      >
        X
      </button>
      <Slider {...settings}>
        {datas.map((data, index) => (
          <SliderContent
            key={index}
            subtitle={data.subtitle}
            content={data.content ? data.content : ""}
            link={data.link ? data.link : ""}
            image={data.image ? data.image : ""}
          />
        ))}
      </Slider>
    </div>
  );
}
