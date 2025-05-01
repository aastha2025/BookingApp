import React from 'react'
import style from './PageDetail.module.css'
import gb from '../Flight/global.module.css'
import {Page} from './data4.js';
const PageDetail = () => {
  return (
    <>
    <div className={gb.container}>
        <div className={style.flexy}>
            <div className={style.l}></div>
            <div className={style.r}>
                <div className={style.card}>
                    <img src="/booking.jpeg" alt="" />
                    <div className={style.conty}></div>
                </div>
                <div className={style.card}></div>
                <div className={style.card}></div>
            </div>
        </div>    
    </div> 
    </>
  )
}

export default PageDetail;
