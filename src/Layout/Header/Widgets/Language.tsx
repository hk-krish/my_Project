import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { languages } from "../../../Data/Layout/Header";
import { useAppDispatch } from "../../../ReduxToolkit/Hooks";
import { setLayoutType } from "../../../ReduxToolkit/Reducers/Layout/ThemeCustomizerReducers";
import { LanguageType } from "../../../Types/Layout";

const Language = () => {
  const [langDropdown, setLangDropdown] = useState(false);
  const [selected, setSelected] = useState<LanguageType | null>(null);
  const { i18n } = useTranslation();
  const dispatch = useAppDispatch();
  const currentLanguage = i18n.resolvedLanguage;

  const changeLanguage = (lng: string) => {
    setLangDropdown(!langDropdown);
    i18n.changeLanguage(lng);
  };

  useEffect(() => {
    const foundLanguage = languages.find((data) => data.value === currentLanguage) || null;
    setSelected(foundLanguage);
    if (currentLanguage === "ae") {
      dispatch(setLayoutType("rtl"));
    } else dispatch(setLayoutType("ltr"));

  }, [currentLanguage, dispatch]);

  return (
    <li className="language-nav">
      <div className={`translate_wrapper ${langDropdown ? "active" : ""}`}>
        <div className="current_lang" onClick={() => setLangDropdown(!langDropdown)}>
          {selected && (
            <div className="lang">
              <i className={`flag-icon flag-icon-${selected.icon}`} />
              <span className="lang-txt box-col-none">{selected.value}</span>
            </div>
          )}
        </div>
        <div className={`more_lang ${langDropdown ? "active" : ""}`}>
          {languages.map((item, index) => (
            <div className="lang" key={index} onClick={() => changeLanguage(item.value)}>
              <i className={`flag-icon flag-icon-${item.icon}`} />
              <span className="lang-txt">
                {item.name}
                <span> ({item.value})</span>
              </span>
            </div>
          ))}
        </div>
      </div>
    </li>
  );
};

export default Language;