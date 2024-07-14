import { useMemo } from "react";
import SliderSign from "../../../components/slider/SliderSign";
import { useTranslation } from "react-i18next";

/**
 * Projects component
 *
 * This component uses the SliderSign component to display information about projects.
 *
 * @component
 * @returns {JSX.Element} The rendered component.
 */
export default function Projects() {
  const { t } = useTranslation();

  const datas = useMemo(() => {
    const projectsLength = t("projects", { returnObjects: true }).length;

    return Array.from({ length: projectsLength }, (_, index) => ({
      subtitle: t(`projects.${index}.subtitle`),
      content: t(`projects.${index}.content`),
      link: t(`projects.${index}.link`),
    }));
  }, [t]);

  const title = t("signTitle.0.projects");
  

  return (
    <SliderSign
      title={title}
      datas={datas}
    />
  );
}
