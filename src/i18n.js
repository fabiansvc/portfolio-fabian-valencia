// i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enAboutMe from "./locales/en/en_about_me.json";
import enContactMe from "./locales/en/en_contact_me.json";
import enProjects from "./locales/en/en_projects.json";
import enSkills from "./locales/en/en_skills.json";
import esAboutMe from "./locales/es/es_about_me.json";
import esContactMe from "./locales/es/es_contact_me.json";
import esProjects from "./locales/es/es_projects.json";
import esSkills from "./locales/es/es_skills.json";
import esGeneral from "./locales/es/es_general.json";
import enGeneral from "./locales/en/en_general.json";

const resources = {
  en: {
    aboutMe: enAboutMe,
    contactMe: enContactMe,
    projects: enProjects,
    skills: enSkills,
    general: enGeneral,
  },
  es: {
    aboutMe: esAboutMe,
    contactMe: esContactMe,
    projects: esProjects,
    skills: esSkills,
    general: esGeneral,
  },
};

i18n.use(initReactI18next).init(
  {
    resources,
    lng: "es",
    fallbackLng: "en",
    ns: ["aboutMe", "contactMe", "projects", "skills", "general"],
    defaultNS: "aboutMe",
    interpolation: {
      escapeValue: false,
    },
  },
  (err, t) => {
    if (err) return console.log("something went wrong loading", err);
    t("key");
  }
);
export default i18n;
