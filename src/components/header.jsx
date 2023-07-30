import style from '../style/header.module.css';
import {useTranslation} from "react-i18next";
import {useNavigate} from "react-router-dom";

function Header(){
  const {t, i18n} = useTranslation();
  const navigate = useNavigate();
  const languageText = {
    "en": "English",
    "ko": "한국어",
  }

  function switchLanguage(){
    if(i18n.resolvedLanguage === "en"){
      i18n.changeLanguage("ko").then(r => {});
    }else{
      i18n.changeLanguage("en").then(r => {});
    }
  }

  return(
    <div className={`${style.header}`}>
      <div className={`flex_row`} style={{maxWidth:"1400px", alignContent:"space-between"}}>
        <div className={`flex_row`}>
          <button className={`clear_button ${style.nav}`} onClick={() => navigate("about")}>{t('navbar.about')}</button>
          <button className={`clear_button ${style.nav}`} onClick={() => navigate("")}>{t('navbar.database')}</button>
          <button className={`clear_button ${style.nav}`}>{t('navbar.cunit')}</button>
        </div>
        <button className={`clear_button ${style.language_switch}`} onClick={switchLanguage}>
          {t('language')} {languageText[i18n.resolvedLanguage]}
        </button>
      </div>
    </div>
  );
}

export default Header;