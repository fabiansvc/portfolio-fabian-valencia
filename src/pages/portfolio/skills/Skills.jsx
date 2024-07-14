import { useMemo } from "react";
import SliderSign from "../../../components/slider/SliderSign";
import { useTranslation } from "react-i18next";

/**
 * Skills component
 *
 * This component uses the SliderSign component to display skills information.
 *
 * @component
 * @returns {JSX.Element} The rendered component.
 */
export default function Skills() {
  const { t } = useTranslation();

  const datas = useMemo(() => {
    const projectsLength = t("skills", { returnObjects: true }).length;

    return Array.from({ length: projectsLength }, (_, index) => ({
      subtitle: t(`skills.${index}.subtitle`),
      content: t(`skills.${index}.content`),
    }));
  }, [t]);

  const title = t("signTitle.0.skills");


  return (
    <SliderSign
      title={title}
      datas={datas}
    />
  );
}
