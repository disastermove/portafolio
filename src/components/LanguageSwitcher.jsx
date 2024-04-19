import React from "react";
import { useTranslation } from "react-i18next";

function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="LanguageSwitcher">
      <button
        onClick={() => changeLanguage(i18n.language === "en" ? "es" : "en")}
      >
        {i18n.language === "en" ? "🇪🇸" : "en"}
      </button>
    </div>
  );
}

export default LanguageSwitcher;
