import { useMemo } from "react";
import { dataProjects } from "../../../data/data-projects";
import SliderSign from "../../../components/slider/SliderSign";

export default function Projects() {
    const datas = useMemo(() => dataProjects, []);
  
    return <SliderSign title={"Projects"} datas={datas}/>;
}
