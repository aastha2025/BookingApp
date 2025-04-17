import React from 'react'
import style from './Brazil.module.css'

const Brazil = (props) => {
    return (
        <div className={style.cardContainer}>
            <img className={style.BrazilImg} src={props.sr} alt="" />
            <div className={style.brazilContent}>
                <span className={style.head}>{props.head}</span>
                <span className={style.subHeading}>{props.subHead}</span>
                <span className={style.brazilP}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem ab molestiae deleniti fugit rem vel.</span>
            </div>
        </div>
    )
}

export default Brazil