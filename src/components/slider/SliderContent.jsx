/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

export default function SliderContent({ subtitle = "", content = "", link = "" }) {
  return (
    <div className="slider-content">
      <h2 className="slider-sign-subtitle">{subtitle}</h2>
      <p className="slider-sign-content">{content}</p>
      <Link to={link} className="slider-sign-link">
        {link}
      </Link>
    </div>
  );
}
