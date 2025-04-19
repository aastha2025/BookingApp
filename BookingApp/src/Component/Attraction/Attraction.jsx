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
    </>
  )
}

export default Attraction
