import "./styles-language.css";
import { useTranslation } from "react-i18next";

/**
 * Language component that displays a button to change the language.
 * Only one button is shown at a time, depending on the current language.
 * If the current language is English, it shows a button to change to Spanish, and vice versa.
 *
 * @component
 */
export default function Language() {
  const { i18n } = useTranslation();

  /**
   * Changes the current language.
   *
   * @param {string} lng - The language code to change to. For example, 'en' for English, 'es' for Spanish.
   */
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="language-buttons">
      {i18n.language === "en" ? (
        <button className="es" onClick={() => changeLanguage("es")} />
      ) : (
        <button className="en" onClick={() => changeLanguage("en")} />
      )}
    </div>
  );
}
