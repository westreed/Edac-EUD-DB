import style from '../style/footer.module.css';
function Footer(){
  return(
    <div className={`${style.footer}`}>
      <div style={{marginTop:"20px", marginBottom:"20px"}}>
        <div style={{fontWeight:"bold", fontSize:"1.2em"}}>EUD Database</div>
        <div>Contact: westreed@naver.com | <a href="https://github.com/westreed">Github</a></div>
      </div>
      <div style={{backgroundColor:"#c9d1d9", width:"100vw", height:"1px", maxWidth:"1400px"}}/>
      <div style={{marginTop:"20px", marginBottom:"20px"}}>Copyright © 2023 갈대 All rights reserved.</div>
    </div>
  );
}

export default Footer;