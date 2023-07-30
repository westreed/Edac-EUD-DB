import style from '../style/footer.module.css';
function Footer(){
  return(
    <div className={`${style.footer}`}>
      <h1>Footer</h1>
      <div style={{backgroundColor:"#c9d1d9", width:"100vw", height:"1px", maxWidth:"1400px"}}/>
      <div style={{marginTop:"20px", marginBottom:"20px"}}>Copyright © 2023 갈대 All rights reserved.</div>
    </div>
  );
}

export default Footer;