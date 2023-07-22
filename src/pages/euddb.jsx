import euddb from "../store/EUDDB.json";
import style from "../style/euddb.module.css";
import {useTranslation} from "react-i18next";
import TopButton from "../components/topButton";
import DownButton from "../components/downButton";

function EUDDB(){
    const {t} = useTranslation();
    const header_rate = [7,7,7,20,5,5,8,41];

    function content_style(index) {
        if (index === 7) {
            return {flex:header_rate[index], textAlign:"left"};
        }
        return {flex:header_rate[index], textAlign:"center"};
    }

    function is_last_row(index) {
        if (index === euddb.content.length - 1) {
            return {border:"none"};
        }
        return {};
    }


    return(
        <div className="container">
            <div className={`${style.table}`}>
                {euddb.header.map((item, index) =>
                    <div key={index} className={`${style.header}`} style={{flex:header_rate[index]}}>{t(`database.${item}`)}</div>
                )}
            </div>
            {euddb.content.map((item, index) =>
                <div key={index} className={`${style.table}`} style={is_last_row(index)}>{item.map((item2, index2) =>
                    <div key={index2} className={`${style.content}`} style={content_style(index2)}>{item2.split("\n").map((line, index3) => {return (<span key={`${index3}${line}`}>{line}<br/></span>)})}</div>
                )}</div>
            )}
            <TopButton/>
            <DownButton/>
        </div>
    )
}

export default EUDDB;