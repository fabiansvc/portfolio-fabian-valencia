import { dataSkills } from "../../../data/data-skills";
import { useMemo } from "react";
import SliderSign from "../../../components/slider/SliderSign";

/**
 * Skills component
 * 
 * This component uses the SliderSign component to display skills information.
 * 
 * @component
 * @returns {JSX.Element} The rendered component.
 */
export default function Skills() {
  const datas = useMemo(() => dataSkills, []);

  return <SliderSign title={"Skills"} datas={datas} />;
}
