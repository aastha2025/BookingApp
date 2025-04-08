import React, {useState} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Trip.css";


function Trip() {

    const [selectedCategory, setSelectedCategory] = useState("City");
    
    const categories =[
        { name: "City", icon: "/images/t3.png" },
        { name: "Beach", icon: "/images/t1.png" },
        { name: "Outdoors", icon: "/images/t6.png" },
        { name: "Relax", icon: "/images/t5.png" },
        { name: "Romance", icon: "/images/t2.png" },
        { name: "Food", icon: "/images/t7.png" },
    ];

    const trips = [
        {
            id: 1,
            image: "/images/trip1.jpg",
            name: "Strabourg",
            distance: "6,198 km away",
            category: "City"
        },
        {
            id: 2,
            image: "/images/trip2.jpg",
            name: "Colmar",
            distance: "6,233 km away",
            category: "City"
        },

        {
            id: 3,
            image: "/images/trip3.jpg",
            name: "Dijon",
            distance: "6,417 km away",
            category: "City"
        },

        {
            id: 4,
            image: "/images/trip4.jpg",
            name: "Lyon",
            distance: "6,459 km away",
            category: "City"
        },
        {
            id: 5,
            image: "/images/trip5.jpg",
            name: "Avignon",
            distance: "6,497 km away",
            category: "City"
        },
        {
            id: 6,
            image: "/images/trip6.jpg",
            name: "Lille",
            distance: "6,505 km away",
            category: "City"
        },
        {
            id: 7,
            image: "/images/trip7.jpg",
            name: "Paris",
            distance: "6,586 km away",
            category: "City"
        },
        {
            id: 8,
            image: "/images/trip8.jpg",
            name: "Rouen",
            distance: "6,665 km away",
            category: "City"
        },
        {
            id: 9,
            image: "/images/trip9.jpg",
            name: "Toulouse",
            distance: "6,769 km away",
            category: "City"
        },
        {
            id: 10,
            image: "/images/trip10.jpg",
            name: "Bordeaux",
            distance: "6,894 km away",
            category: "City"
        },
        {
            id: 11,
            image: "/images/trip11.jpg",
            name: "Murud",
            distance: "1,228 km away",
            category: "Beach"
        },
        {
            id: 12,
            image: "/images/trip12.jpg",
            name: "Diveagar",
            distance: "1,243 km away",
            category: "Beach"
        },

        {
            id: 13,
            image: "/images/trip13.jpg",
            name: "Arambol",
            distance: "1,486 km away",
            category: "Beach"
        },

        {
            id: 14,
            image: "/images/trip14.jpg",
            name: "Calangute",
            distance: "1,501 km away",
            category: "Beach"
        },
        {
            id: 15,
            image: "/images/trip15.jpg",
            name: "Benaulim",
            distance: "1,528 km away",
            category: "Beach"
        },
        {
            id: 16,
            image: "/images/trip16.jpg",
            name: "Agonda",
            distance: "1,549 km away",
            category: "Beach"
        },
        {
            id: 17,
            image: "/images/trip17.jpg",
            name: "Palolem",
            distance: "1,553 km away",
            category: "Beach"
        },
        {
            id: 18,
            image: "/images/trip18.jpg",
            name: "Rishikesh",
            distance: "18 km away",
            category: "Outdoors"
        },
        {
            id: 19,
            image: "/images/trip19.jpg",
            name: "Uttarkashi",
            distance: "259 km away",
            category: "Outdoors"
        },
        {
            id: 20,
            image: "/images/trip20.jpg",
            name: "Kausani",
            distance: "265 km away",
            category: "Outdoors"
        },
        {
            id: 21,
            image: "/images/trip21.jpg",
            name: "Kufri",
            distance: "272 km away",
            category: "Outdoors"
        },
        {
            id: 22,
            image: "/images/trip22.jpg",
            name: "Palampur",
            distance: "391 km away",
            category: "Outdoors"
        },
        {
            id: 23,
            image: "/images/trip23.jpg",
            name: "Shimla",
            distance: "273 km away",
            category: "Relax"
        },
        {
            id: 24,
            image: "/images/trip24.jpg",
            name: "Hundar",
            distance: "662 km away",
            category: "Relax"
        },
        {
            id: 25,
            image: "/images/trip25.jpg",
            name: "Kalimpog",
            distance: "1,118 km away",
            category: "Relax"
        },
        {
            id: 26,
            image: "/images/trip26.jpg",
            name: "Yercaud",
            distance: "1,878 km away",
            category: "Relax"
        }, {
            id: 27,
            image: "/images/trip27.jpg",
            name: "Ooty",
            distance: "1,919 km away",
            category: "Relax"
        },
        {
            id: 28,
            image: "/images/trip28.jpg",
            name: "Pune",
            distance: "1,178 km away",
            category: "Romance"
        },
        {
            id: 29,
            image: "/images/trip29.jpg",
            name: "Siolim",
            distance: "1,492 km away",
            category: "Romance"
        },
        {
            id: 30,
            image: "/images/d1.jpg",
            name: "New Delhi",
            distance: "2.6 km away",
            category: "Food"
        },
        {
            id: 31,
            image: "/images/trip31.jpg",
            name: "Gandhinagar",
            distance: "758 km away",
            category: "Food"
        },
        {
            id: 32,
            image: "/images/d3.jpg",
            name: "Mumbai",
            distance: "1,167 km away",
            category: "Food"
        },
    ];

    const filteredTrips = selectedCategory? trips.filter((trip) => trip.category === selectedCategory): trips;
    const slidesToShow = Math.min(6, filteredTrips.length);
    const settings = {
        speed: 500,
        slidesToShow: slidesToShow,
        slidesToScroll: 1,
        infinite: filteredTrips.length > slidesToShow,
        arrows: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: Math.min(4, filteredTrips.length),
                    infinite: filteredTrips.length > 4,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: Math.min(2, filteredTrips.length),
                    infinite: filteredTrips.length > 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: Math.min(1, filteredTrips.length),
                    infinite: filteredTrips.length > 1,

                },
            },
        ],
    };
    

    return (
        <div className="trip">
            <div className="container">
                <h2 className="trip-h">Quick and easy trip planner</h2>
                <p className="trip-p">Pick a vibe and explore the top destinations in France</p>
                <div className="trip-nav">
                    {categories.map((cat) => (
                        <button key ={cat.name}
                        className={`trip-nav-b ${selectedCategory === cat.name? "active" : ""}`}
                        onClick = {()=> setSelectedCategory(cat.name)}
                        >
                            <img src={cat.icon} alt={cat.name}  className="trip-img"/>{cat.name}
                        </button>
                    ))}
                     </div>
                <Slider {...settings} className="trip-carousel">
                    {filteredTrips.map((trip) => (
                        <div className="trip-card" key = {trip.id}>
                            <div className="trip-image">
                                <img src={trip.image} alt={trip.name} />
                            </div>
                            <h5>{trip.name}</h5>
                            <p className="trip-dis">{trip.distance}</p>
                        </div>
                    ))}

                </Slider>
            </div>
        </div>
    );
}

export default Trip;