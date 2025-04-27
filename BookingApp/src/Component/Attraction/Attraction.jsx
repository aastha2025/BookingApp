import React from 'react';
import style from './Attraction.module.css';
import gb from '../Flight/global.module.css';


const Attraction = () => {
  return (
    <>
      <div className={`${style.AttractionHead}`}>
        <div className={`${gb.container} `}>
          <h1 className={`${style.AttractionHead1}`}>Attractions, activities and experiences</h1>
          <h3 className={`${style.AttractionHead2}`}>Discover new attractions and experiences to match your interests and travel style</h3>
          <div className={`${style.AttractionSearch}`}>
            <div className={`${style.item1}`}>
              <input type="text" placeholder="Where are you going?" />
            </div>
            <div className={`${style.item2}`}>
              <input type="text" placeholder="pick your date" />
            </div>
            <div className={`${style.item3}`}>
              <input type="submit" placeholder="Search for attractions, activities and experiences" />
            </div>
          </div>
        </div>
      </div>
      <div className={gb.container}>
        <div className={style.recom}>
          <div className={style.reL}>
            <span className={style.reH}>Nearby destinations</span>
            {/* <span className={style.reSH}>Our top picks for Delhi experiences to get you started</span> */}
          </div>
          {/* <div className={style.reR}><button>See All recommendation</button></div> */}
        </div>

        <div className={style.Near}>
          <div className={style.upperGrid}>
            <div className={style.card}>
              <img className={style.img} src="./images/old_goa.jpg" alt="image" />
              <h5 className={style.heading5}>Old Goa</h5>
              <p className={style.paragraph}>191 things to do</p>
            </div>
            <div className={style.card}>
              <img className={style.img} src="./images/Than.jpg" alt="image" />
              <h5 className={style.heading5}>Thanjavur</h5>
              <p className={style.paragraph}>27 things to do</p>
            </div>
            <div className={style.card}>
              <img className={style.img} src="./images/Agra.jpg" alt="image" />
              <h5 className={style.heading5}>Agra</h5>
              <p className={style.paragraph}>781 things to do</p>
            </div>
          </div>
          <div className={style.upperGrid}>
            <div className={style.card}>
              <img className={style.img} src="./images/d5.jpg" alt="image" />
              <h5 className={style.heading5}>Varanasi</h5>
              <p className={style.paragraph}>414 things to do</p>
            </div>
            <div className={style.card}>
              <img className={style.img} src="./images/kol.jpg" alt="image" />
              <h5 className={style.heading5}>kolkata</h5>
              <p className={style.paragraph}>136 things to do</p>
            </div>
          </div>
          <hr />
          <span className={style.flight}>Your account, your travel</span>
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
          <hr />
          <span className={style.flight}>Your account, your travel</span>
          <div className={style.thee}>
            <div className={style.boxy}>
              <img className={style.chotiImg} src="./images/Att.png" alt="" />
              <div className={style.AttractContent}>
                <span className={style.chotiHeading}>Explore top attractions</span>
                <p className={style.pary}>Experience the best of your destination with attractions, tours, activities, and more</p>
              </div>
            </div>
            <div className={style.boxy}>
              <img className={style.chotiImg} src="./images/sch.png" alt="" />
              <div className={style.AttractContent}>
                <span className={style.chotiHeading}>Fast and flexible</span>
                <p className={style.pary}>Book tickets online in minutes, with free cancellation on many attractions</p>
              </div>
            </div>
            <div className={style.boxy}>
              <img className={style.chotiImg} src="./images/client.png" alt="" />
              <div className={style.AttractContent}>
                <span className={style.chotiHeading}>Support when you need it</span>
                <p className={style.pary}>Booking.com's global Customer Service team is here to help 24/7</p>
              </div>
            </div>
            {/* <div className={style.boxy}></div>
            <div className={style.boxy}></div> */}
          </div>
          <hr />
          <div className={style.recom}>
            <div className={style.reLL}>
              <span className={style.reH}>Nearby destinations</span>
              <span className={style.reSH}>Our top picks for Delhi experiences to get you started</span>
            </div>
            {/* <div className={style.reR}><button>See All recommendation</button></div> */}
          </div>

          {/* // make a navbar now for different cities and make it responsive */}
          <div className={style.BtnFlexy}>
            <button>Europe</button>
            <button>North America</button>
            <button>Asia</button>
            <button>Africa</button>
            <button>Oceania</button>
            <button>Middle East</button>
            <button>Caribbean</button>
            <button>South America</button>
            <button>Central America</button>
          </div>
          <hr />

        </div>

      </div>
    </>
  )
}

export default Attraction
