import React from "react";
import style from  "../loader.module.css"

const Loader = () => {
    
    
  return (
    <div className={style.loader}>
        <div>
      <span className={style.textLoading}>L</span>
      <span className={style.textLoading}>O</span>
      <span className={style.textLoading}>A</span>
      <span className={style.textLoading}>D</span>
      <span className={style.textLoading}>I</span>
      <span className={style.textLoading}>N</span>
      <span className={style.textLoading}>G</span>
      <span className={style.textLoading}>.</span>
      <span className={style.textLoading}>.</span>
     </div>
      <small>Thank you for your patients</small>
    </div>
  );
 
};

export default Loader;
