/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

/**
 * SliderContent component
 * 
 * @component
 * @param {Object} props - The component props.
 * @param {string} [props.subtitle=""] - The subtitle to display.
 * @param {string} [props.content=""] - The content to display.
 * @param {string} [props.link=""] - The link URL.
 * @returns {JSX.Element} The rendered component.
 */
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
