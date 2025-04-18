import React from 'react'
import style from './Carrentalgrid.module.css';
const CarrentalGrid = ({item}) => {
  return (
    <div className={style.gridcontainer}>
      {item.map((it) => (
        <div key={it.id} className={style.gridItem}>
            <img src={it.image} alt={it.name}  className={style.img}/>
            <div className={style.content}>
                <h5 className={style.gridname}>{it.name}</h5>
                <p className={style.gridp}>{it.loc}</p>
                <p className={style.gridp}>{it.price}</p>
            </div>
        </div>
      ))}
    </div>
  );
};

export default CarrentalGrid;
