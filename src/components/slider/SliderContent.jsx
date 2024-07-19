import { Link } from "react-router-dom";

/**
 * SliderContent component
 *
 * @component
 * @param {Object} props - The component props.
 * @param {string} [props.subtitle=""] - The subtitle to display.
 * @param {string} [props.content=""] - The content to display.
 * @param {string} [props.link=""] - The link URL.
 * @param {Array<string>} [props.image=[]] - The array of image URLs.
 * @returns {JSX.Element} The rendered component.
 */
export default function SliderContent({
  subtitle = "",
  content = "",
  link = "",
  image = [],
}) {
  return (
    <div className="slider-content">
      <h2 className="slider-sign-subtitle">{subtitle}</h2>
      <p className="slider-sign-content">{content}</p>
      {link && (
        <Link to={link} className="slider-sign-link" target="_blank" rel="noopener noreferrer">
          {link.split("mailto:")}
        </Link>
      )}
      <div className="slider-sign-image">
        {image.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`slider-image-${index}`}
          />
        ))}
      </div>
    </div>
  );
}
