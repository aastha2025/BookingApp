import React, { useEffect, useState } from 'react'
import style from "./Car.module.css"
import gb from "../Flight/global.module.css"
import CarrentalGrid from './CarrentalGrid';
import { Cities, Airports } from './data1';
function Car() {

    const [worldwide, setWorldwide] = useState('city');
    const [place, setPlace] = useState("");
    const [pickupdate, setPickupdate] = useState("");
    const [pickuptime, setPickuptime] = useState("");
    const [dropoffdate, setDropoffdate] = useState("");
    const [dropofftime, setDropofftime] = useState("");
    // const [searchHistory, setSearchHistory] = useState([]);
    // const [showHistory, setShowHistory] = useState(false);
    const [differentlocation, setDifferentlocation] = useState(false);
    const [driverage, setDriverage] = useState(true);

    // useEffect(()=>{
    //     if(pickupdate && dropoffdate){
    //         const pickupdateObj = new Date(pickupdate);
    //         const dropoffdateObj = new Date(dropoffdate);

    //         if(pickupdateObj > dropoffdateObj){
    //             alert(`Pick-up date must be before drop-off date`);
    //             return;
    //         }

    //         if(pickupdate === dropoffdate && pickuptime && dropofftime){
    //             if(pickuptime >= dropofftime){
    //                 alert(`Pick-up time must be before drop-off time`);
    //             }
    //         }
    //     }
    // }, [pickupdate, pickuptime, dropoffdate, dropofftime])


    const handlesearch = () => {
        if (!place || !pickupdate || !pickuptime || !dropoffdate || !dropofftime) {
            alert(`Please fill all required fields!!`);
            return;
        }

        const pickupDateObj = new Date(`${pickupdate}T${pickuptime}`);
        const dropoffDateObj = new Date(`${dropoffdate}T${dropofftime}`);

        if (pickupDateObj >= dropoffDateObj) {
            alert("Pick-up date/time must be before drop-off date/time");
            return;
        }

        // if (!driverage) {
        //     alert(`Driver must be aged 30-65 to rent a car`);
        //     return;
        // }
        alert("Search Successfull !!");
    }

    const handleDifferentlocation = (e) => {
        setDifferentlocation(e.target.checked);
    }

    const handleDriverage = (e) => {
        setDriverage(e.target.checked);
        console.log(e.target.checked);
    }


    return (
        <div className={style.car}>
            <div className={style.sec}>
                <div className={gb.container}>
                    <h2 className={style.h}>Car rentals for any kind of trip</h2>
                    <p className={style.p}>Great cars at great prices from the biggest rental companies</p>
                </div>
            </div>

            {/*Search bar */}

            <div className={gb.container}>
                <div className={style.search}>
                    <div className={style.col1}>
                        <img className={style.icon} src="/images/search.png" alt="search" />
                        <div className={style.right}>
                            <div className={style.up}>
                                <p className={style.uptext} >Pick-up location</p>
                            </div>
                            <div className={style.low}>
                                <input className={style.inputtext}
                                    type="text"
                                    placeholder='Airport, city, or station'
                                    value={place}
                                    onChange={(e) => setPlace(e.target.value)} />
                            </div>
                        </div>
                    </div>
                    <div className={style.half}>
                        <div className={style.col2}>
                            <div className={style.right}>
                                <div className={style.up}>
                                    <p className={style.uptext} >Pick-up date</p>
                                </div>
                                <div className={style.low}>
                                    <input className={style.inputtext} type="date" onChange={(e) => setPickupdate(e.target.value)} />
                                </div>
                            </div>
                        </div>

                        <div className={style.col3}>
                            <div className={style.right}>
                                <div className={style.up}>
                                    <p className={style.uptext}>Time</p>
                                </div>
                                <div className={style.low}>
                                    <input className={style.inputtext} type="time" onChange={(e) => setPickuptime(e.target.value)} />
                                </div>
                            </div>
                        </div>

                        <div className={style.col4}>
                            <div className={style.right}>
                                <div className={style.up}>
                                    <p className={style.uptext}>Drop-off date</p>
                                </div>
                                <div className={style.low}>
                                    <input className={style.inputtext} type="date" onChange={(e) => setDropoffdate(e.target.value)} />
                                </div>
                            </div>
                        </div>

                        <div className={style.col5}>
                            <div className={style.right}>
                                <div className={style.up}>
                                    <p className={style.uptext} >Time</p>
                                </div>
                                <div className={style.low}>
                                    <input className={style.inputtext} type="time" onChange={(e) => setDropofftime(e.target.value)} />
                                </div>
                            </div>
                        </div>
                        <div className={style.col6}>
                            <button className={style.searchbtn} onClick={handlesearch}>Search</button>
                        </div>
                    </div>
                </div>


                <div className={style.option}>
                    <div className={style.l}>
                        <label className={style.checkboxContainer}>
                            <input className={style.check}
                                type="checkbox"
                                onChange={handleDifferentlocation} />
                            <span className={style.checkmark}></span>
                            <p className={style.carloc} >Drop car off at different location</p>
                        </label>
                    </div>
                    <div className={style.l}>
                        <label className={style.checkboxContainer}>
                            <input className={style.check}
                                type="checkbox"
                                onChange={handleDriverage} />
                            <span className={style.checkmark}></span>
                            <p className={style.carloc} >Driver aged 30 – 65?</p>
                        </label>
                    </div>
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
