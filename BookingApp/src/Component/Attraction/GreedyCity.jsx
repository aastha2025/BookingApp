import React from 'react'
// import { Europe } from './data3';
import style from './GreedyCity.module.css';

const GreedyCity = ({ data }) => {
    return (
        <div className={style.GreedyCity}>
            {data.map((item) => (
                <div className={style.boxu} key={item.id}>
                    <img className={style.img} src={item.image} alt="" />
                    <h5 className={style.head5}>{item.name}</h5>
                    <p className={style.para}>{item.things}</p>
                </div>
            ))};
        </div>
    )
}

export default GreedyCity;
