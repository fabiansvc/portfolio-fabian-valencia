import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./styles-skills.css";
import Modeling3D from "./slides/Modeling3D";
import ShaderProgramming from "./slides/ShaderProgramming";
import Web2DDevelopment from "./slides/Web2DDevelopment";
import FrameworksLibraries from "./slides/FrameworksLibraries";
import DesktopDevelopment from "./slides/DesktopDevelopment";
import VersionControl from "./slides/VersionControl";
import GameDevelopment from "./slides/GameDevelopment";
import UXUIDesign from "./slides/UXUIDesign";
import Web3DDevelopment from "./slides/Web3DDevelopment";

export default function Skills() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="container-skills">
      <Slider {...settings}>
        <Web3DDevelopment />
        <Web2DDevelopment />
        <GameDevelopment />
        <Modeling3D />
        <ShaderProgramming />
        <FrameworksLibraries />
        <DesktopDevelopment />
        <VersionControl />
        <UXUIDesign />
      </Slider>
    </div>
  );
}
