import React, { useState } from 'react'
import style from "./Car.module.css"
import gb from "../Flight/global.module.css"
import CarrentalGrid from './CarrentalGrid';
import { Cities, Airports } from './data1';
function Car() {

    const [worldwide, setWorldwide] = useState('city');
    return (
        <div className={style.car}>
            <div className={style.sec}>
                <div className={gb.container}>
                    <h2 className={style.h}>Car rentals for any kind of trip</h2>
                    <p className={style.p}>Great cars at great prices from the biggest rental companies</p>
                </div>
            </div>




            {/* card */}
            <div className={gb.container}>
                <h2 className={style.travel}>Travel more, spend less</h2>
                <div className={style.cardsec}>
                    <div className={style.travelleft}>
                        <h5 className={style.savemoney}>Sign in, save money</h5>
                        <p className={style.save}>Save 10% on select rental cars – just look for the blue Genius label</p>
                        <div className={style.travelbtn}>
                            <button className={style.signin}> Sign in</button>
                            <button className={style.register}>Register</button>
                        </div>
                    </div>
                    <div className={style.travelright}>
                        <img src="/images/Genius.png" alt="I'm here" width={"90px"} height={"110px"} />
                    </div>
                </div>
            </div>

            {/* car rental destination */}

            <div className={gb.container}>
                <div className={style.carrental}>
                    <h2 className={style.head}>Popular car rental destinations</h2>
                    <p className={style.par}>Explore more options to rent a car for cheap</p>
                    <div className={style.carbtn}>
                        <button className={`${worldwide === 'city' ? style.carrentalbtn : ''}`} onClick={() => { setWorldwide('city') }}>Cities worldwide</button>
                        <button className={`${worldwide === 'air' ? style.carrentalbtn : ''}`} onClick={() => { setWorldwide('air') }}>Airports worldwide</button>
                    </div>
                    {worldwide === 'city' ? <CarrentalGrid item={Cities} /> : ''}
                    {worldwide === 'air' ? <CarrentalGrid item={Airports} /> : ''}
                </div>
            </div>
        </div>
    )
}

export default Car
