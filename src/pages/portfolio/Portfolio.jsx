import { Loader } from "@react-three/drei";
import World from "./world/World";
import { Suspense } from "react";
import Back from "../../components/back/Back";
import Language from "./language/Language";
import useSignStore from "../../stores/store-sign-selected";
import Section from "./section/Section";

/**
 * Portfolio component renders a Three.js scene for displaying a portfolio.
 * It includes a loading fallback using Suspense and Loader components.
 *
 * @component
 * @returns {JSX.Element}
 */
export default function Portfolio() {
  const { sign } = useSignStore();

  const sectionConfig = {
    ABOUT_ME: {
      sectionKey: "aboutMe",
      fields: ["subtitle", "content", "image"],
    },
    SKILLS: {
      sectionKey: "skills",
      fields: ["subtitle", "content", "image"],
    },
    PROJECTS: {
      sectionKey: "projects",
      fields: ["subtitle", "content", "link", "image"],
    },
    CONTACT_ME: {
      sectionKey: "contactMe",
      fields: ["subtitle", "link", "image"],
    },
  };

  const config = sectionConfig[sign.name];

  return (
    <Suspense fallback={<Loader />}>
      <Back />
      <World />
      <Language />
      {config && (
        <Section sectionKey={config.sectionKey} fields={config.fields} />
      )}
    </Suspense>
  );
}
