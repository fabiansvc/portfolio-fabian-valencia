import "./styles-language.css";
import { useTranslation } from "react-i18next";

export default function Language() {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="language-buttons">
      <button className="en" onClick={() => changeLanguage("en")}/>
      <button className="es" onClick={() => changeLanguage("es")}/>
    </div>
  );
}
