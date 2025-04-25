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
              <img  className={style.img} src="./images/d5.jpg" alt="image" />
              <h5 className={style.heading5}>kolkata</h5>
              <p className={style.paragraph}>helo</p>
            </div>
            {/* <div className={style.cardy}>
              <p className={style.content}>Kolkata</p>
            </div>
            <div className={style.cardy}></div>
            <div className={style.cardy}></div>
          </div>
          <div className={style.lowerGrid}>
            <div className={style.cardy}></div>
            <div className={style.cardy}></div> */}
            {/* <div className={style.cardy}></div> */}
          </div>
        </div>

      </div>
    </>
  )
}

export default Attraction
