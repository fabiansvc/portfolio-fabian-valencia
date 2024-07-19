/* eslint-disable react/prop-types */
import { useMemo } from "react";
import SliderSign from "../../../components/slider/SliderSign";
import { useTranslation } from "react-i18next";

/**
 * Section component
 *
 * This component uses the SliderSign component to display various types of information.
 *
 * @component
 * @param {string} sectionKey - The translation key for the section (e.g., "aboutMe", "skills", "projects", "contactMe").
 * @param {string[]} fields - The fields to extract from the translation (e.g., ["subtitle", "content", "link"]).
 * @returns {JSX.Element} The rendered component.
 */
export default function Section({ sectionKey, fields }) {
  const { t } = useTranslation(sectionKey);

  const datas = useMemo(() => {
    const sectionData = t(sectionKey, { returnObjects: true });
    const imageBasePath = t(`imageBasePath`, { ns: sectionKey });

    return sectionData.map((item, index) => {
      const data = {};
      fields.forEach((field) => {
        if (field === "image") {
          data[field] = [`${item[field]}`][0]
            .split(",")
            .map((img) => imageBasePath + img);
        } else {
          data[field] = t(`${sectionKey}.${index}.${field}`);
        }
      });
      return data;
    });
  }, [t, sectionKey, fields]);

  return <SliderSign datas={datas} />;
}
