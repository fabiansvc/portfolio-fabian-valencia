/* eslint-disable react/prop-types */

export default function SliderContent({ subtitle, content }) {
  return (
    <div className="slider-content">
      <h2 className="slider-sign-subtitle">{subtitle}</h2>
      <p className="slider-sign-content">{content}</p>
    </div>
  );
}
