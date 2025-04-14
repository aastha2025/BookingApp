import React, { useEffect, useState } from 'react'
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
    }, {
      id: "3",
      name: "goa, India",
      image: "/images/hotestplace3.avif",
      price: "from 11205 Rupee"
    }, {
      id: "4",
      name: "Poloem, India",
      image: "/images/hotestplace4.avif",
      price: "from 13157 Rupee"
    }, {
      id: "5",
      name: "Jaipur, India",
      image: "/images/hotestplace5.avif",
      price: "from 11205 Rupee"
    }, {
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
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1
        },
      },
    ],

  };


  const [departure, setDeparture] = useState("");
  const [destination, setDestination] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [travellers, setTravellers] = useState(2);
  const [room, setroom] = useState(1);
  const [classes, setClasses] = useState("Any Class");
  const [child, setChild] = useState(0);
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (startDate && endDate && startDate > endDate) {
      alert(`Check-in-Date must be before Check-out_Date`);
    }
  }, [startDate, endDate]);


  const toggleCard = () => {
    setShow((prev) => !prev); // Toggle card visibility
  };


  const handleSearch = () => {
    if (!destination || !departure || !startDate || !endDate) {
      alert("Please fill all required fields!!");
      return;
    }
  };
  function decreaseTraveller() {
    if (travellers > 2) {
      setTravellers(travellers - 1);
      return;
    }
  }

  function increaseTraveller() {
    setTravellers(travellers + 1);
    return;
  }

  // const childAge = [
  //   "Infant, 0-11 months", "Infant, 12-23 months", "2 years", "3 years", " 4 years", "5 years", "6 years", "7 years", "8 years", "9 years", "10 years", "11years"
  // ]
  function increaseChild() {
    setChild(child + 1);
  }
  function decreaseChild() {
    if (child > 0) {
      setChild(child - 1);

    }
  }
  function decreaseRoom() {
    if (room > 1) {
      setroom(room - 1);
      return;
    }
  }
  function increaseRoom() {
    setroom(room + 1);
    return;
  }
  return (
    <div className={hotel.container}>
      <div className={hotel.searchbar}>
            {/* <div className={hotel.city}> */}
              <div className={hotel.city1}>
                <div className={hotel.upper}>
                  <p className={hotel.dep}>Departure</p>
                </div>
                <div className={hotel.lower}>
                  <input type="text"
                    placeholder='City or airport'
                    className={hotel.pl}
                    value={departure}
                    onChange={(e) => setDeparture(e.target.value)} />
                </div>
              </div>
              <div className={hotel.city2}>
                <div className={hotel.upper}>
                  <p className={hotel.dep}>Destination</p>
                </div>
                <div className={hotel.lower}>
                  <input type="text"
                    placeholder='Where do you want to go?'
                    className={hotel.pl}
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)} />
                </div>
              {/* </div> */}
            </div>
            <div className={hotel.date}>
              <div className={hotel.upper}>
                <p className={hotel.dep}>When?</p>
              </div>
              <div className={hotel.lower}>
                <div className={hotel.date}>
                  <input type="date"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)} />
                </div>
                <span>--</span>
                <input type="date"
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)} />

              </div>
            </div>
            <div className={hotel.stay} onClick={toggleCard}>
              <div className={hotel.upper}>
                <p className={hotel.dep}>Travellers and flight class</p>
              </div>
              <div className={hotel.lower}>
                <div className={hotel.bookingcard}>
                  <div className={hotel.people}>{travellers + child} Travellers</div>
                  <div className={hotel.people}>{room}Room</div>
                  <div className={hotel.people}>{classes}Class</div>
                </div>
              </div>
              </div>
              <button className={hotel.search} onClick={handleSearch}>Search</button>
</div>
              {show && (
                <div className={hotel.cardy}>
                  <div className={hotel.data}>
                    <div className={hotel.traveller}>
                      <p>Traveller</p>
                      <p className={hotel.p1}>12+</p>
                      <div className={hotel.myBtn}>
                        <p onClick={decreaseTraveller}>-</p>
                        <p>{travellers}</p>
                        <p onClick={increaseTraveller}>+</p>
                      </div>

                    </div>
                    <div className={hotel.traveller}>
                    <p>Child</p>
                      <p className={hotel.p1}>{child}</p>
                        <div className={hotel.myBtn}>
                          <p onClick={decreaseChild}>-</p>
                          <p>{child}</p>
                          <p onClick={increaseChild}>+</p>

                        </div>
                        </div>
                    <div className={hotel.traveller}>
                      <p>Room</p>
                      <div className={hotel.myBtn}>
                        <p onClick={decreaseRoom}>-</p>
                        <p>{room}</p>
                        <p onClick={increaseRoom}>+</p>
                      </div>
                    </div>
                    </div>
                    <div className={hotel.flightClass}>
                      <span className={hotel.flight}>Flight Class : </span>
                      <button className={hotel.flightbtn} onClick={() => setClasses("Any Class")}>Any Class</button>
                      <button className={hotel.flightbtn} onClick={() => setClasses("Economy")}>Economy</button>
                      <button className={hotel.flightbtn} onClick={() => setClasses("Premium economy")}>Premium economy</button>
                      <button className={hotel.flightbtn} onClick={() => setClasses("Business")}>Business</button>
                      <button className={hotel.flightbtn} onClick={() => setClasses("First class")}>First class</button>
                    </div>
                  <button  className={hotel.donebtn} onClick={toggleCard}>Done</button>
                </div>
              )}


      <div className={hotel.desti}>
        <h5>Discover our hottest destinations</h5>
        <Slider {...Settings} className={hotel.carouselC}>
          {hotelList.map((place) => (
            <div className={hotel.card} key={place.id}>
              <div className={hotel.imageCard}>
                <img src={place.image} alt={place.name} className={hotel.image} />
                <h5 className={hotel.name}>{place.name}</h5>
                <p className={hotel.price}>{place.price}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <div className={hotel.foo}>
        <div className={hotel.upperfoo}>
          <div className={hotel.foosec1}>
            <a href="#">General conditions</a>
          </div>
          <div className={hotel.foosec2}>
            <a href="#">Privacy policy</a>
          </div>
          <div className={hotel.foosec3}>
            <a href="#">Cookie policy</a>
          </div>
          <div className={hotel.foosec4}>
            <a href="#">Manage cookie</a>
          </div>
          <div className={hotel.foosec5}>
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

export default Hote