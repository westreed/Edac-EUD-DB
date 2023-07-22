import euddb from "../store/EUDDB.json";
import style from "../style/euddb.module.css";

function EUDDB(){
    const header_rate = [0.7,0.7,0.7,2,0.5,0.5,0.8,4.1];

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
                    <div key={index} className={`${style.header}`} style={{flex:header_rate[index]}}>{item}</div>
                )}
            </div>
            {euddb.content.map((item, index) =>
                <div key={index} className={`${style.table}`} style={is_last_row(index)}>{item.map((item2, index2) =>
                    <div key={index2} className={`${style.content}`} style={content_style(index2)}>{item2.split("\n").map(line => {return (<span>{line}<br/></span>)})}</div>
                )}</div>
            )}
        </div>
    )
}

export default EUDDB;