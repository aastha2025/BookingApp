



import React, { useState, useCallback } from 'react';
import { Calendar } from 'lucide-react';
import debounce from 'lodash.debounce';
import './Searchbar.css';

const cities = [
  'Mumbai', 'Delhi', 'Bangalore', 'Hyderabad', 'Chennai',
  'Kolkata', 'Pune', 'Jaipur', 'Ahmedabad', 'Surat'
];

const Searchbar = () => {
  const [location, setLocation] = useState('');
  const [showLocations, setShowLocations] = useState(false);
  const [filteredCities, setFilteredCities] = useState(cities);
  const [selectedDates, setSelectedDates] = useState({
    checkIn: null,
    checkOut: null
  });
  const [showCalendar, setShowCalendar] = useState(false);
  const [showGuestsCard, setShowGuestsCard] = useState(false);
  const [guests, setGuests] = useState({
    adults: 2,
    children: 0,
    rooms: 1
  });

  // Debounced search function
  const debouncedSearch = useCallback(
    debounce((searchTerm) => {
      const filtered = cities.filter(city =>
        city.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredCities(filtered);
    }, 300),
    []
  );

  const handleLocationChange = (e) => {
    const value = e.target.value;
    setLocation(value);
    setShowLocations(true);
    debouncedSearch(value);
  };

  const handleLocationSelect = (city) => {
    setLocation(city);
    setShowLocations(false);
  };

  const handleDateSelect = (type) => {
    setShowCalendar(true);
    // Implement date selection logic
  };

  const updateGuests = (type, operation) => {
    setGuests(prev => ({
      ...prev,
      [type]: operation === 'add' 
        ? prev[type] + 1 
        : Math.max(type === 'adults' ? 1 : 0, prev[type] - 1)
    }));
  };

  return (
    <div className="search-container">
      {/* Location Input */}
      <div className="search-input">
        <input 
          type="text" 
          placeholder="Where are you going?" 
          value={location}
          onChange={handleLocationChange}
          onFocus={() => setShowLocations(true)}
        />
        {showLocations && (
          <div className="locations-dropdown">
            {filteredCities.map((city) => (
              <div 
                key={city} 
                className="location-item"
                onClick={() => handleLocationSelect(city)}
              >
                {city}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Date Selection */}
      <div className="date-input">
        <div 
          className="date-display" 
          onClick={() => handleDateSelect('checkIn')}
        >
          <Calendar size={18} />
          <span>{selectedDates.checkIn ? 'Check-in' : 'Add dates'}</span>
        </div>
        {showCalendar && (
          <div className="calendar-dropdown">
            {/* Calendar component will go here */}
          </div>
        )}
      </div>

      {/* Guests Selection */}
      <div className="guests-input">
        <div 
          className="guests-display"
          onClick={() => setShowGuestsCard(!showGuestsCard)}
        >
          {`${guests.adults} Adults · ${guests.children} Children · ${guests.rooms} Room`}
        </div>
        {showGuestsCard && (
          <div className="guests-card">
            <div className="guest-type">
              <span>Adults</span>
              <div className="guest-controls">
                <button onClick={() => updateGuests('adults', 'subtract')}>-</button>
                <span>{guests.adults}</span>
                <button onClick={() => updateGuests('adults', 'add')}>+</button>
              </div>
            </div>
            <div className="guest-type">
              <span>Children</span>
              <div className="guest-controls">
                <button onClick={() => updateGuests('children', 'subtract')}>-</button>
                <span>{guests.children}</span>
                <button onClick={() => updateGuests('children', 'add')}>+</button>
              </div>
            </div>
            <div className="guest-type">
              <span>Rooms</span>
              <div className="guest-controls">
                <button onClick={() => updateGuests('rooms', 'subtract')}>-</button>
                <span>{guests.rooms}</span>
                <button onClick={() => updateGuests('rooms', 'add')}>+</button>
              </div>
            </div>
            <button 
              className="done-button"
              onClick={() => setShowGuestsCard(false)}
            >
              Done
            </button>
          </div>
        )}
      </div>

      {/* Search Button */}
      <button className="search-button">Search</button>
    </div>
  );
};

export default Searchbar;