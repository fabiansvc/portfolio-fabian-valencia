import { useMemo } from "react";
import { dataAboutMe } from "../../../data/data-about-me";
import SliderSign from "../../../components/slider/SliderSign";

export default function AboutMe() {
  const datas = useMemo(() => dataAboutMe, []);
  
  return <SliderSign title={"About Me"} datas={datas} />;
}
