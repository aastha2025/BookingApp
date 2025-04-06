import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./India.css";


function India() {

    const indias = [
        {
            id: 1,
            image: "/images/in1.jpg",
            name: "Prayagraj",
            properties: "1 properties"
        },
        {
            id: 2,
            image: "/images/d1.jpg",
            name: "New Delhi",
            properties: "2,919 properties"
        },

        {
            id: 3,
            image: "/images/d5.jpg",
            name: "Varanasi",
            properties: "554 properties"
        },

        {
            id: 4,
            image: "/images/d3.jpg",
            name: "Mumbai",
            properties: "1,652 properties"
        },
        {
            id: 5,
            image: "/images/in3.jpg",
            name: "goa",
            properties: "5,251 properties"
        },
        {
            id: 6,
            image: "/images/d2.jpg",
            name: "Bangalore",
            properties: "2,044 properties"
        },
        {
            id: 7,
            image: "/images/in3.jpg",
            name: "jaipur",
            properties: "1,556 properties"
        },
        {
            id: 8,
            image: "/images/in4.jpg",
            name: "North Goa",
            properties: "3,909 properties "
        },
        {
            id: 9,
            image: "/images/in5.jpg",
            name: "Pondicherry",
            properties: "692 properties"
        },
        {
            id: 10,
            image: "/images/ind6.jpg",
            name: "Gurgaon",
           properties: "1,132 properties"
        },
    ];

    const settings = {
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        arrows: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],

    };

    return (
        <div className="india">
            <div className="container">
                <h2 className="india-h">Explore India</h2>
                <p className="india-p">these popular destinations have a lot to offer</p>
                  <Slider {...settings} className="india-carousel">
                    {indias.map((india) => (
                        <div className="india-card" key = {india.id}>
                            <div className="india-image">
                                <img src={india.image} alt={india.name} />
                            </div>
                            <h5>{india.name}</h5>
                            <p className="india-dis">{india.properties}</p>
                        </div>
                    ))}

                </Slider>
            </div>
        </div>
    );
}

export default India;