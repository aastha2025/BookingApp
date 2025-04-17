import React, { useState, useRef, useEffect } from 'react';
import style from './Flight.module.css';
import gb from './global.module.css';
import Brazil from './Brazil';
import FlightSlick from '../CorouSlick/FlightSlick'
import TopFlightGrid from '../CorouSlick/TopFlightGrid';
import { test_trips, Trending_city, Poluar_Routes, Cities, Regions, Countries, Airports } from './data';

const Flight = () => {
  const [activeCard, setActiveCard] = useState(null);
  const cardRefs = useRef({});
  const containerRef = useRef(null);  // Ref for the entire component to detect outside clicks
  const [flightButton, setflightButton] = useState('inter');
  const [TravelBtn, setTravelBtn] = useState('plr')



  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setActiveCard(null);
      }
    };

    document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  const handleCardToggle = (cardId, e) => {
    const rect = e.target.getBoundingClientRect();

    setActiveCard((prev) => {
      if (prev?.id === cardId) {
        return null;
      }
      return { id: cardId, rect };
    });
  };

  return (
    <div ref={containerRef}>
      <div className={style.searchBlock}>
        <div className={`${gb.container} ${style.content}`}>
          <div className={style.head}>Compare and book cheap flights with ease</div>

          <div className={style.searchBarCon}>
            <div className={style.FormChoose}>
              <p className={style.para}>Discover your next dream destination</p>
              <form className={style.ActionChoose}>
                <label className={style.label}>
                  <input type="radio" name="travelType" value="roundTrip" />
                  Round trip
                </label>
                <label className={style.label}>
                  <input type="radio" name="travelType" value="oneWay" />
                  One way
                </label>
                <label className={style.label}>
                  <input type="radio" name="travelType" value="multiCity" />
                  Multi-city
                </label>
                <select className={style.dropdown}>
                  <option>Economy</option>
                  <option>Business</option>
                  <option>First Class</option>
                </select>
                <label className={style.label}>
                  <input type="checkbox" name="city" value="city" />
                  Direct flights only
                </label>
              </form>
            </div>
          </div>

          <div className={style.searchInput}>
            <form className={style.gridContainer}>
              <div
                className={style.col1}
                onClick={(e) => handleCardToggle(1, e)}
                ref={(el) => (cardRefs.current[1] = el)}
              >
                <img
                  src="/images/icons8-sign-up-in-calendar-50.png"
                  alt=""
                  width={"30px"}
                  height={"30px"}
                />
                <span className={style.colPara}>Delhi International Airport</span>
              </div>
              <div className={style.col2}>
                <button>&#x2190;<br />&#x2192;</button>
              </div>
              <div
                className={style.col3}
                onClick={(e) => handleCardToggle(3, e)}
                ref={(el) => (cardRefs.current[3] = el)}
              >
                <img
                  src="/images/icons8-sign-up-in-calendar-50.png"
                  alt=""
                  width={"30px"}
                  height={"30px"}
                />
                <span className={style.colPara}>Where to?</span>
              </div>
              <div className={style.col4}>
                <img
                  src="/images/icons8-sign-up-in-calendar-50.png"
                  alt=""
                  width={"30px"}
                  height={"30px"}
                />
                <span className={style.colPara}>Calendar</span>
              </div>
              <div
                className={style.col5}
                onClick={(e) => handleCardToggle(5, e)}
                ref={(el) => (cardRefs.current[5] = el)}
              >
                <img
                  src="/images/icons8-bed-32.png"
                  alt=""
                  width={"30px"}
                  height={"30px"}
                />
                <span className={style.colPara}>Traveller card</span>
              </div>
              <div className={style.col6}>
                <button>Submit me</button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Card Section */}
      {activeCard && (
        <div
          className={style.card}
          style={{
            width: cardRefs.current[activeCard.id]?.offsetWidth + 'px',
            left: `${activeCard.rect.left}px`,
            top: `${activeCard.rect.bottom + window.scrollY}px`,
            zIndex: 9999,
          }}
        >
          <h3>Card for Column {activeCard.id}</h3>
          <p>Details for card {activeCard.id}</p>
        </div>
      )}

      <div className={gb.container}>
        <div className={style.brazilContent}>
          <h2>A spotlight on Brazil</h2>
          <span className={style.pBrazil}>Soak up its bustling cities, cuisine and carnival. Whether you marvel at its first-class sunsets, or explore its rich rainforests, Brazil offers something vibrant, diverse and addictive. Check these top destinations you can fly to year round.</span>
          <div className={style.BrazilCard}>
            {/* head subHead para 

            */}
            <Brazil sr="/images/beach.webp" head="Rio de Janerio " subHead="Beach, city, nightfall" para="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem ab molestiae deleniti fugit rem vel." />

            <Brazil sr="/images/flood.webp" head="Salvador" subHead="Beach, culture, nature" para="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem ab molestiae deleniti fugit rem vel." />

            <Brazil sr="/images/ancient.webp" head="Manaus" subHead="Nature, wildlife, adventure" para="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem ab molestiae deleniti fugit rem vel." />
          </div>
          <h2 className={style.flight}>Popular Flights near you</h2>
          <p className={style.flightSub}>Find deals on domestic and international flights</p>
          <div className={style.flightNavy}>
            <button
              className={`${style.flightNavbarButton} ${flightButton === 'inter' ? style.selected : ''}`}
              onClick={() => { setflightButton('inter') }}
            >
              International
            </button>
            <button
              className={`${style.flightNavbarButton} ${flightButton === 'domes' ? style.selected : ''}`}
              onClick={() => { setflightButton('domes') }}
            >
              Domestic
            </button>
          </div>
          {/* <hr /> */}
          {flightButton === 'inter' ? <FlightSlick data={test_trips} /> : <FlightSlick data={Trending_city} />}


          <h2 className={style.flight}>Trending cities</h2>
          <p className={style.flightSub}>Book flights to a destination popular with travellers from India</p>
          <FlightSlick data={Trending_city} />

          <h2 className={style.flight}>Your account, your travel</h2>
          <div className={style.AccounTravel}>
            <div className={style.TravelLeft}>
              <h5>All your trip details in one place</h5>
              <p className={style.flightAccountP}>Sign in to book faster and manage your trip with ease</p>
              <div className={style.flightAccountButton}>
                <button className={style.l} >Sign in</button>
                <button className={style.r} >Register</button>
              </div>
            </div>
            <div className={style.TravelRight}>
              <img src="/images/Genius.png" alt="I'm here" width={"90px"} height={"110px"} />
            </div>
          </div>
          <div className={style.TopFlight}>
            <h2 className={style}>Top flights from India</h2>
            <p className={style.flightSub}>Explore destinations you can reach from India and start making new plans</p>
            <div className={style.TravelNav}>
              <button 
                className={`${TravelBtn === 'plr' ? style.btnSelect : ''}`}
                onClick={() => setTravelBtn('plr')}  
              >
                Popular routes
              </button>
              <button 
                className={`${TravelBtn === 'ct' ? style.btnSelect : ''}`}
                onClick={() => setTravelBtn('ct')}  
              >
                Cities
              </button>
              <button 
                className={`${TravelBtn === 'cn' ? style.btnSelect : ''}`}
                onClick={() => setTravelBtn('cn')}  
              >
                Countries
              </button>
              <button 
                className={`${TravelBtn === 'reg' ? style.btnSelect : ''}`}
                onClick={() => setTravelBtn('reg')}  
              >
                Regions
              </button>
              <button 
                className={`${TravelBtn === 'air' ? style.btnSelect : ''}`}
                onClick={() => setTravelBtn('air')}  
              >
                Airports
              </button>
            </div>
            {/* Awesome grid will come here+ */}
            {TravelBtn == 'plr'?<TopFlightGrid item={Poluar_Routes}/>:''}
            {TravelBtn == 'ct'?<TopFlightGrid item={Cities}/>:''}
            {TravelBtn == 'cn'?<TopFlightGrid item={Countries}/>:''}
            {TravelBtn == 'reg'?<TopFlightGrid item={Regions}/>:''}
            {TravelBtn == 'air'?<TopFlightGrid item={Airports}/>:''}
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Flight;
