import { useMemo } from "react";
import SliderSign from "../../../components/slider/SliderSign";
import { useTranslation } from "react-i18next";

/**
 * AboutMe component
 *
 * This component uses the SliderSign component to display information about the user.
 *
 * @component
 * @returns {JSX.Element} The rendered component.
 */
export default function AboutMe() {
  const { t } = useTranslation();

  const datas = useMemo(() => {
    const aboutMeLength = t("aboutMe", { returnObjects: true }).length;

    return Array.from({ length: aboutMeLength }, (_, index) => ({
      subtitle: t(`aboutMe.${index}.subtitle`),
      content: t(`aboutMe.${index}.content`),
    }));
  }, [t]);

  const title = t("signTitle.0.aboutMe");

  return (
    <SliderSign
      title={title}
      datas={datas}
    />
  );
}
