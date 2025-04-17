import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import style from './FlightSlick.module.css';
const FlightSlick = ({ data }) => {


  const settings = {
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrow: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div className={style.cards}>
      <Slider {...settings} className={style.FlightSlick}>
        {data.map((tm) => (
          <div className={style.card} key={tm.id}>
            <div className={style.CardImage}>
              <img src={tm.image} alt="" />
            </div>
            <div className={style.cardContent}>
              <h5 className={style.heading}>{tm.title}</h5>
              {tm.desc === null ? '': <p className={style.desc}>{tm.desc}</p>}
            </div>
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default FlightSlick;