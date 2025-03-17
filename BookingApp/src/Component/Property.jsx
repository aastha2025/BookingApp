import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Property.css";

function Property(){
    const propertys = [
            {
                id: 1,
                image: "/images/Property1.jpeg",
                place: "Hotels"
            },
            {
                id: 2,
                image: "/images/Property2.jpeg",
                place: "Apartments"
            },
            {
                id: 3,
                image: "/images/Property3.jpeg",
                place: "resorts"
            },
            {
                id: 4,
                image: "/images/Property4.jpeg",
                place: "Villas"
            },
            {
                id: 5,
                image: "/images/Property5.jpeg",
                place: "cabins"
            },
            {
                id: 6,
                image: "/images/Property6.jpeg",
                place: "Cottages"
            },
            {
                id: 7,
                image: "/images/Property7.jpeg",
                place: "Glamping Sites"
            },
            {
                id: 8,
                image: "/images/Property8.jpeg",
                place: "Serviced apartments"
            },
            {
                id: 9,
                image: "/images/Property9.jpeg",
                place: "Vacation Homes"
            },
            {
                id: 10,
                image: "/images/Property10.jpeg",
                place: "Guest Houses"
            },
            {
                id: 11,
                image: "/images/Property11.jpeg",
                place: "Hostels"
            }, {
                id: 12,
                image: "/images/Property12.jpeg",
                place: "Motels"
            }, {
                id: 13,
                image: "/images/Property13.jpeg",
                place: "B&Bs"
            }, {
                id: 14,
                image: "/images/Property14.jpeg",
                place: "Ryokans"
            }, {
                id: 15,
                image: "/images/Property15.jpeg",
                place: "Riads"
            }, {
                id: 16,
                image: "/images/Property16.jpeg",
                place: "Resort Villages"
            }, {
                id: 17,
                image: "/images/Property17.jpeg",
                place: "Homestays"
            }, {
                id: 18,
                image: "/images/Property18.jpeg",
                place: "Campgrounds"
            }, {
                id: 19,
                image: "/images/Property19.jpeg",
                place: "Country Houses"
            },
            {
                id: 20,
                image: "/images/Property20.jpeg",
                place: "Farm stays"
            }, {
                id: 21,
                image: "/images/Property21.jpeg",
                place: "Boats"
            }, {
                id: 22,
                image: "/images/Property22.jpeg",
                place: "Luxury Tents"
            }, {
                id: 23,
                image: "/images/Property23.jpeg",
                place: "self-Catering Accommodations"
            }, {
                id: 24,
                image: "/images/Property24.jpeg",
                place: "Tiny Houses"
            }

    ];

    const Settings ={
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true, 
    };

    return(
        <div className="property">
            <div className="container">
                <h2>Browse by property type</h2>
                <Slider {...Settings} className="carousel1">
                        {propertys.map((property) =>(
                            <div className="property-card" key={property.id}>
                                <div className="property-image">
                                    <img src={property.image} alt={property.place} />
                                </div>
                                <div className="property content">
                                    <h5>{property.place}</h5>
                                </div>
                            </div>
                        ))}
                </Slider>
            </div>
        </div>
    );
}

export default Property;