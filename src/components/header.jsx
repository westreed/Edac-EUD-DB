import style from '../style/header.module.css';

function Header(){
    return(
        <div className={`${style.header}`}>
            <h1>Header</h1>
        </div>
    );
}

export default Header;