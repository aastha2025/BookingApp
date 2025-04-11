import React from 'react'
import hotel from './Hotel.module.css';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";



const Hotel = () => {
  const hotelList = [
    {
      id: "1",
      name: "Anjuna, India",
      image: "/images/hotestplace1.avif",
      price: "from 10803 Rupee"
    },
    {
      id: "2",
      name: "Arambol, India",
      image: "/images/hotestplace2.avif",
      price: "from 10959 Rupee"
    },{
      id: "3",
      name: "goa, India",
      image: "/images/hotestplace3.avif",
      price: "from 11205 Rupee"
    },{
      id: "4",
      name: "Poloem, India",
      image: "/images/hotestplace4.avif",
      price: "from 13157 Rupee"
    },{
      id: "5",
      name: "Jaipur, India",
      image: "/images/hotestplace5.avif",
      price: "from 11205 Rupee"
    },{
      id: "6",
      name: "Bangalore, India",
      image: "/images/hotestplace6.avif",
      price: "from 13157 Rupee"
    }
  ];

  const Settings = {
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
        {
          breakpoint: 1024,
          settings:{
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 768,
          settings:{
            slidesToShow: 2
          },
        },
        {
          breakpoint: 480,
          settings:{
            slidesToShow: 1
          },
        },
    ],
  
  };
  return (
    <div className={hotel.container}>
    <div className={hotel.border}>
      <div className={hotel.search}>
        <div className={hotel.left}>
        <div className={hotel.upper}>
          <p>Departure</p>
        </div>
        <div className={hotel.lower}>
          Delhi
        </div>
        </div>
        <div className={hotel.right}>
        <div className={hotel.upper}>
          <p>Departure</p>
        </div>
        <div className={hotel.lower}>
          Delhi
        </div>
        </div>
      </div>
      
      <div className={hotel.stay}>
        <div className={hotel.upper}>
          <p>When?</p>
        </div>
        <div className={hotel.lower}>
          date
        </div>
        </div>

      <div className={hotel.book}>
        <div className={hotel.upper}>
          <p>Travellers and flight class</p>
        </div>
        <div className={hotel.lower}>
          child
        </div>
      </div>
      <button><img src="/images/searchicon.png" alt="Search" /></button>
    </div>

    <div className={hotel.desti}>
      <h5>Discover our hottest destinations</h5>
    <Slider {...Settings} className={hotel.carousel-card}>
    {hotelList.map((place) => (
      <div className={hotel.card} key={place.id}>
        <div className={hotel.image}></div>
        <h5>{place.name}</h5>
        <img src={place.image} alt={place.name} />
        <p>{place.price}</p>
      </div>
    ))}
    </Slider>
    </div>

    <div className={hotel.foo}>
      <div className={hotel.upperfoo}>
        <div className={hotel.foo-sec-1}>
          <a href="#">General conditions</a>
        </div>
        <div className={hotel.foo-sec-2}>
          <a href="#">Privacy policy</a>
        </div>
        <div className={hotel.foo-sec-3}>
          <a href="#">Cookie policy</a>
        </div>
        <div className={hotel.foo-sec-4}>
          <a href="#">Manage cookie</a>
        </div>
        <div className={hotel.foo-sec-5}>
          <a href="#">Useful information</a>
        </div>
      </div>
      <div className={hotel.upperfoo}>
        <p>This website is property of BravoNext, S.A., headquartered in Vicolo de’ Calvi 2, 6830, Chiasso, CH (Company/VAT num. CHE-115.704.228), a company belonging to lastminute.com group. © 2025  - All rights reserved. “lastminute.com”, “lastminute”, “LM”, “Top Secret Hotels” and “Top Secret” are all registered trademarks owned by a company of lastminute.com group.</p>
      </div>

    </div>
    </div>

  )
}

export default Hotel;

