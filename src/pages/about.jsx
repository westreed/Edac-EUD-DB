import {useTranslation} from "react-i18next";


function About(){
  const {t} = useTranslation();
  return (
    <div className="container">
      <h1>{t(`about.title`)}</h1>
      <div>{t(`about.content1`)} {t(`about.content2`)}</div>
      <div>{t(`about.content3`)}</div>
      <div>Link <a href="https://github.com/westreed/edac-eud-db">github.com/westreed/edac-eud-db</a></div>
      <div style={{marginTop:"10px"}}>{t(`about.content4`)}</div>
    </div>
  )
}

export default About;