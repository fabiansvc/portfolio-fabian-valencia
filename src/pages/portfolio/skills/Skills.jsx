import { dataSkills } from "../../../data/data-skills";
import { useMemo } from "react";
import SliderSign from "../../../components/slider/SliderSign";

export default function Skills() {
  const datas = useMemo(() => dataSkills, []);

  return <SliderSign title={"Skills"} datas={datas} />;
}
