import React, { useState, useRef, useEffect } from 'react';
import style from './Flight.module.css';
import gb from './global.module.css';
import Brazil from './Brazil';
import FlightSlick from './FlightSlick';

const Flight = () => {
  const [activeCard, setActiveCard] = useState(null);
  const cardRefs = useRef({});
  const containerRef = useRef(null);  // Ref for the entire component to detect outside clicks


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
                  <input type="radio" name="trip" value="trip" />
                  Round trip
                </label>
                <label className={style.label}>
                  <input type="radio" name="way" value="way" />
                  One way
                </label>
                <label className={style.label}>
                  <input type="radio" name="city" value="city" />
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
            <Brazil sr = "/images/beach.webp" head="Rio de Janerio " subHead="Beach, city, nightfall" para="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem ab molestiae deleniti fugit rem vel." />

            <Brazil sr = "/images/flood.webp" head="Salvador" subHead="Beach, culture, nature" para="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem ab molestiae deleniti fugit rem vel." />

            <Brazil sr = "/images/ancient.webp" head="Manaus" subHead="Nature, wildlife, adventure" para="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem ab molestiae deleniti fugit rem vel." />
          </div>
        </div>


        <FlightSlick />
      </div>
    </div>
  );
};

export default Flight;
