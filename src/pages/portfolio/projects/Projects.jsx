import { useMemo } from "react";
import { dataProjects } from "../../../data/data-projects";
import SliderSign from "../../../components/slider/SliderSign";

/**
 * Projects component
 * 
 * This component uses the SliderSign component to display information about projects.
 * 
 * @component
 * @returns {JSX.Element} The rendered component.
 */
export default function Projects() {
    const datas = useMemo(() => dataProjects, []);
  
    return <SliderSign title={"Projects"} datas={datas}/>;
}
