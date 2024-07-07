import { useMemo } from "react";
import { dataAboutMe } from "../../../data/data-about-me";
import SliderSign from "../../../components/slider/SliderSign";

/**
 * AboutMe component
 * 
 * This component uses the SliderSign component to display information about the user.
 * 
 * @component
 * @returns {JSX.Element} The rendered component.
 */
export default function AboutMe() {
  const datas = useMemo(() => dataAboutMe, []);
  
  return <SliderSign title={"About Me"} datas={datas} />;
}
