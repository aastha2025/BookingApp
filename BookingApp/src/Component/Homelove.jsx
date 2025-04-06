import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Homelove.css";


function Homelove() {
    const homeloves = [
        {
            id: 1,
            image: "/images/h1.webp",
            title: "Old Town, Poland, Krakow",
            name: "Aparthotel Stare Miasto",
            rating: "8.8",
            feedback: "Excellent",
            review:"3,165 reviews",
            price: "Starting from",
            rupee: " 9,211"
        },
        {
            id: 2,
            image: "/images/h2.webp",
            title: "06. Terezvaros, Hungary, Budapest",
            name: "7Seasons Apartments Budapest",
            rating: "8.8",
            feedback: "Excellent",
            review:"11,447 reviews",
            price: "Starting from",
            rupee: " 8,024"
       },

        {
            id: 3,
            image: "/images/h3.webp",
            title: "Santa Maria Novella, Italy, Florence",
            name: "Numa I Vita Apartments",
            rating: "9.0",
            feedback: "Wonderful",
            review:"1,399 reviews",
            price: "Starting from",
            rupee: "19,556"
         },

        {
            id: 4,
            image: "/images/h4.webp",
            title: "Tower Hamlets, United Kingdom, London",
            name: "GLeman Locke",
            rating: "8.8",
            feedback: "Excellent",
            review:"720 reviews",
            price: "Starting from",
            rupee: " 15,580"
        },
        {
            id: 5,
            image: "/images/h5.webp",
            title: "santa Teresa, Brazil, Rio de Janeiro",
            name: "Sugar Loft Apartments",
            rating: "8.1",
            feedback: "Very Good",
            review:"600 reviews",
            price: "Starting from",
            rupee: "3,083"
         },
        {
            id: 6,
            image: "/images/h6.webp",
            title: "Kensington and Chelsea, United Kingdom, London",
            name: "The Apartments b the Sloane Club",
            rating: "9.1",
            feedback: "Wonderful",
            review:"247 reviews",
            price: "Starting from",
            rupee: "83,453"
         },
         {
            id: 7,
            image: "/images/h7.webp",
            title: "City of London, United Knigdom, London",
            name: "Cheval Three Quays at The Tower of London",
            rating: "9.4",
            feedback: "Wonderful",
            review:"706 reviews",
            price: "Starting from",
            rupee: "50,018"
         },
         {
            id: 8,
            image: "/images/h8.webp",
            title: "Santa Maria Maior, Portugal, Lisbon",
            name: "Flora Chiado Apartments",
            rating: "9.8",
            feedback: "Exceptional",
            review:"199 reviews",
            price: "Starting from",
            rupee: "47,009"
         },
         {
            id: 9,
            image: "/images/h9.webp",
            title: "Prague 3, Czech Republic, Prague",
            name: "Baranova Apartmnets",
            rating: "9.6",
            feedback: "Exceptional",
            review:"9.6 reviews",
            price: "Starting from",
            rupee: "19,062"
         },
         {
            id: 10,
            image: "/images/h10.webp",
            title: "Amsterdam City Center, Netherlands, Amsterdam",
            name: "Zoku Amsterdam",
            rating: "9.0",
            feedback: "Wonderful",
            review:"2,885 reviews",
            price: "Starting from",
            rupee: "18,951"
         }
         ];

         const settings = {
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1,
            arrows: true,
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 3,
                    },
                },
                {
                    breakpoint: 890,
                    settings: {
                        slidesToShow: 2,
                    },
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                    },
                },
            ],
        };
        
    
        return (
            <div className="homelove">
                <div className="container">
                    <h2>Home Guest Love</h2>
                    <Slider {...settings} className="homelove-carousel">
                        {homeloves.map((homelove) => (
                            <div className="homelove-card" key={homelove.id}>
                                <div className="homelove-image">
                                    <img src={homelove.image} alt={homelove.name} />
                                </div>
                                <h5 className="homelove-h">{homelove.name}</h5>
                                <p className="homelove-p1">{homelove.title}</p>
                                <div className="homelove-view">
                                    <button className="homelove-view-btn">{homelove.rating}</button>
                                    <p className="homelove-view-p">{homelove.feedback}</p>
                                    <p className="homelove-view-review">{homelove.review}</p>
                                </div>
                                <div className="homelove-price">
                                    <p className="homelove-price-p">{homelove.price}</p>
                                    <h5 className="homelove-rupee">{homelove.rupee}</h5>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        );

        }

        export default Homelove;
