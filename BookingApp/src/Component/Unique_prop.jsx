import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Unique_prop.css";
import "./Homelove.css"


function Unique_prop() {
    const unique_props = [
        {
            id: 1,
            image: "/images/up1.webp",
            title: "Poland, Zakopane",
            name: "Domki Wierszyki Shelters",
            rating: "9.7",
            feedback: "Exceptional",
            review:"89 reviews",
            price: "Starting from",
            rupee: " 46,468"
        },
        {
            id: 2,
            image: "/images/up2.webp",
            title: "Germany, Trier",
            name: "Tiny House Dreischwesternherz",
            rating: "9.5",
            feedback: "Exceptional",
            review:"154 reviews",
            price: "Starting from",
            rupee: "39,488"
       },

        {
            id: 3,
            image: "/images/up3.webp",
            title: "Germany, Simonsberg",
            name: "Numa I Vita Apartments",
            rating: "9.2",
            feedback: "Wonderful",
            review:"47 reviews",
            price: "Starting from",
            rupee: "33,847"
         },

        {
            id: 4,
            image: "/images/up4.webp",
            title: "italy, Santorso",
            name: "Agriturismo Cabrele",
            rating: "9.4",
            feedback: "Wonderful",
            review:"286 reviews",
            price: "Starting from",
            rupee: " 28,487"
        },
        {
            id: 5,
            image: "/imagesup5.webp",
            title: "germany, Lubbenau",
            name: "Mini Hotel Ubernachten Im Gurkenfass",
            rating: "7.9",
            feedback: " Good",
            review:"180 reviews",
            price: "Starting from",
            rupee: "25,385"
         },
        {
            id: 6,
            image: "/images/up6.webp",
            title: "Australia, Gembrook",
            name: "Carinya Park",
            rating: "9.3",
            feedback: "Wonderful",
            review:"33 reviews",
            price: "Starting from",
            rupee: "44,323"
         },
         {
            id: 7,
            image: "/images/up7.webp",
            title: "canada, Val-David",
            name: "La Sapinette",
            rating: "8.6",
            feedback: "Excellent",
            review:"61 reviews",
            price: "Starting from",
            rupee: "38,839"
         },
         {
            id: 8,
            image: "/images/up8.webp",
            title: "Germany, Stotternheim",
            name: "Maritime Freizeit Camp (MFC) Erfurter Seen",
            rating: "8.1",
            feedback: "Very Good",
            review:"159 reviews",
            price: "Starting from",
            rupee: "18,616"
         },
         {
            id: 9,
            image: "/images/up9.webp",
            title: "Canada, Saint-Gabriel-De-Valcartier",
            name: "Auberge La Seigneurie Valcartier",
            rating: "8.0",
            feedback: "Very Good",
            review:"295 reviews",
            price: "Starting from",
            rupee: "18,909"
         },
         {
            id: 10,
            image: "/images/up10.webp",
            title: "Norway, Lofthus",
            name: "Lofthus Camping",
            rating: "9.5",
            feedback: "Exceptional",
            review:"332 reviews",
            price: "Starting from",
            rupee: "61,044"
         },
         {
            id: 11,
            image: "/images/up11.webp",
            title: "Germany, Neuruppin",
            name: "Waldschenke Stendenitz Ubernachten im Wald am See",
            rating: "8.8",
            feedback: "Excellent",
            review:"379 reviews",
            price: "Starting from",
            rupee: "23,693"
         },
         {
            id: 12,
            image: "/images/up12.webp",
            title: "Poland, Zakopane",
            name: "Apartament Droga na Bystre 9a",
            rating: "8.9",
            feedback: "Excellent",
            review:"72 reviews",
            price: "Starting from",
            rupee: "15,826"
         },
         {
            id: 13,
            image: "/images/up13.webp",
            title: "Norway, Reine",
            name: "May's Apartments by May's",
            rating: "9.5",
            feedback: "Exceptional",
            review:"799 reviews",
            price: "Starting from",
            rupee: "93,047"
         },
         {
            id: 14,
            image: "/images/up14.webp",
            title: "Canada, Piopolis",
            name: "Havre De Paix",
            rating: "9.2",
            feedback: "Wonderful",
            review:"43 reviews",
            price: "Starting from",
            rupee: "31,665"
         },
         {
            id: 15,
            image: "/images/up15.webp",
            title: "Poland, Jastrzebia Gora",
            name: "Domki ROSSE niedaleko Plazy",
            rating: "9.8",
            feedback: "Exceptional",
            review:"129 reviews",
            price: "Starting from",
            rupee: "37,039"
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
                    breakpoint: 400,
                    settings: {
                        slidesToShow: 1,
                    },
                },
            ],
        };
        
    
        return (
            <div className="unique-prop">
                <div className="container">
                    <h2>Stay on our unique properties</h2>
                    <p className="unique-prop-p">From castles and villas to boats and igloos, we have it all</p>
                    <Slider {...settings} className="homelove-carousel">
                        {unique_props.map((unique_prop) => (
                            <div className="homelove-card" key={unique_prop.id}>
                                <div className="homelove-image">
                                    <img src={unique_prop.image} alt={unique_prop.name} />
                                </div>
                                <h5 className="homelove-h">{unique_prop.name}</h5>
                                <p className="unique-prop-p1">{unique_prop.title}</p>
                                <div className="homelove-view">
                                    <span className="homelove-view-btn">{unique_prop.rating}</span>
                                    <span className="homelove-view-p">{unique_prop.feedback}</span>
                                    <span className="homelove-view-review">{unique_prop.review}</span>
                                </div>
                                <div className="homelove-price">
                                    <span className="homelove-p">{unique_prop.price}</span>
                                    <span className="homelove-rupee">{unique_prop.rupee}</span>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        );

        }

        export default Unique_prop;
