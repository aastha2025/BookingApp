import React from 'react'
import style from "./CarTransp.module.css";
import gb from "../Flight/global.module.css";

const CarTransp = ({ item }) => {
    return (
            <div className={gb.container}>
                <div className={style.airporttransportation}>
                <div className={style.left}>
                    {item.map((car) => (
                        <div key={car.id} className={style.left1}>
                            <div className={style.leftleft}>
                                <img src={car.image} alt={car.name} />
                            </div>
                            <div className={style.leftright}>
                                <h5 className={style.carhead}>{car.name}</h5>
                                <p className={style.carpara}>{car.desc}</p>
                            </div>
                        </div>
                    ))}
                
               </div>
                <div className={style.right}>
                <img src="/images/taxi.svg" alt="taxipath"  />
                </div>

                </div>
            </div>
    );
}

export default CarTransp;