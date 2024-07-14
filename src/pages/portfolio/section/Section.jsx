/* eslint-disable react/prop-types */
import { useMemo } from "react";
import SliderSign from "../../../components/slider/SliderSign";
import { useTranslation } from "react-i18next";

/**
 * GenericSlider component
 *
 * This component uses the SliderSign component to display various types of information.
 *
 * @component
 * @param {string} sectionKey - The translation key for the section (e.g., "aboutMe", "skills", "projects", "contactMe").
 * @param {string[]} fields - The fields to extract from the translation (e.g., ["subtitle", "content", "link"]).
 * @returns {JSX.Element} The rendered component.
 */
export default function Section({ sectionKey, fields }) {
  const { t } = useTranslation();

  const datas = useMemo(() => {
    const sectionLength = t(sectionKey, { returnObjects: true }).length;

    return Array.from({ length: sectionLength }, (_, index) => {
      const data = {};
      fields.forEach(field => {
        data[field] = t(`${sectionKey}.${index}.${field}`);
      });
      return data;
    });
  }, [t, sectionKey, fields]);

  const title = t(`signTitle.0.${sectionKey}`);

  return (
    <SliderSign
      title={title}
      datas={datas}
    />
  );
}

