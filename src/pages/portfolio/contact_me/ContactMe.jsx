import { useMemo } from "react";
import SliderSign from "../../../components/slider/SliderSign";
import { dataContactMe } from "../../../data/data-contact-me";

/**
 * ContactMe component
 * 
 * This component uses the SliderSign component to display contact information.
 * 
 * @component
 * @returns {JSX.Element} The rendered component.
 */
export default function ContactMe() {
    const datas = useMemo(() => dataContactMe, []);
  
    return <SliderSign title={"Contact me"} datas={datas}/>;
}
