import cunit from "../store/CUnit.json";
import TopButton from "../components/topButton";
import DownButton from "../components/downButton";
import style from "../style/cunit.module.css";
import {useTranslation} from "react-i18next";

function CUnit(){
  const {t} = useTranslation();
  const header_rate = [7,7,20,66];

  function content_align_style(index) {
    if (index === 3) {
      return {flex:header_rate[index], textAlign:"left"};
    }
    return {flex:header_rate[index], textAlign:"center"};
  }

  function is_last_row(index) {
    if (index === cunit.content.length - 1) {
      return {border:"none"};
    }
    return {};
  }

  function ContentItem({index, item}){
    return (
      <div key={index} className={`${style.content_animation} ${style.table}`} style={is_last_row(index)}>
        <div style={content_align_style(0)}>{item.offset}</div>
        <div style={content_align_style(1)}>{item.type}</div>
        <div style={content_align_style(2)}>{item.name}</div>
        <div style={content_align_style(3)}>{item.description}</div>
      </div>
    );
  }

  return(
    <div className="container">
      <div className={`${style.table}`}>
        {cunit.header.map((item, index) =>
          <div key={index} className={`${style.header}`} style={{flex:header_rate[index]}}>{t(`cunit.${item}`)}</div>
        )}
      </div>
      {cunit.content.map((item, index) =>
        <ContentItem index={index} item={item}/>
      )}
      <TopButton/>
      <DownButton/>
    </div>
  )
}

export default CUnit;