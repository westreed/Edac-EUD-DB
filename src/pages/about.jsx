import {useTranslation} from "react-i18next";
import {useTitle} from "../utils/useTitle";
import style from "../style/about.module.css";
import star1 from "../assets/star1.png";
import star2 from "../assets/star2.png";
import star3 from "../assets/star3.png";
import star4 from "../assets/star4.png";
import star5 from "../assets/star5.png";
import star6 from "../assets/star6.png";
import sc from "../assets/sc.png";
import update from "../assets/update.png";


function About(){
  useTitle("EUD Database: About");
  const {t} = useTranslation();
  return (
    <div className="container">
      <div className={`${style.background_img}`}>
        <img className={`${style.star1}`} src={star1} alt="star"/>
        <img className={`${style.star2}`} src={star2} alt="star"/>
        <img className={`${style.star3}`} src={star3} alt="star"/>
        <img className={`${style.star4}`} src={star4} alt="star"/>
        <img className={`${style.star5}`} src={star5} alt="star"/>
        <img className={`${style.star6}`} src={star6} alt="star"/>
      </div>
      <div className={`${style.group}`} style={{marginBottom:"5em"}}>
        <img src={sc} alt="sc"/>
        <div className={`${style.content}`}>
          <h1 className={`${style.title}`}>{t(`about.title`)}</h1>
          <div style={{marginBottom:"10px"}}>{t(`about.content1`)}</div>
          <div>Github Link <a href="https://github.com/westreed/edac-eud-db">https://github.com/westreed/edac-eud-db</a></div>
          <div style={{marginTop:"10px"}}>{t(`about.content2`)}</div>
        </div>
      </div>
      <div className={`${style.group}`}>
        <div className={`${style.content}`}>
          <h1 className={`${style.title}`}>{t(`about.update`)}</h1>
          <div style={{marginBottom:"10px"}}>{t(`about.update_content1`)}</div>
          <div style={{marginBottom:"10px"}}>{t(`about.update_content2`)}</div>
          <div style={{marginBottom:"10px"}}>{t(`about.update_content3`)}</div>
          <div style={{marginBottom:"10px"}}>{t(`about.update_content4`)}</div>
        </div>
        <img src={update} alt="update"/>
      </div>
    </div>
  )
}

export default About;