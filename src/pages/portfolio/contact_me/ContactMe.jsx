import { useMemo } from "react";
import SliderSign from "../../../components/slider/SliderSign";
import { useTranslation } from "react-i18next";

/**
 * ContactMe component
 * 
 * This component uses the SliderSign component to display contact information.
 * 
 * @component
 * @returns {JSX.Element} The rendered component.
 */
export default function ContactMe() {
  const { t } = useTranslation();

  const datas = useMemo(() => {
    const contactMeLength = t("contactMe", { returnObjects: true }).length;

    return Array.from({ length: contactMeLength }, (_, index) => ({
      subtitle: t(`contactMe.${index}.subtitle`),
      link: t(`contactMe.${index}.link`),
    }));
  }, [t]);

  const title = t("signTitle.0.contactMe");

  return <SliderSign title={title} datas={datas} />;
}
