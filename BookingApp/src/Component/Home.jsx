import React from 'react';
import "./Home.css";
import Searchbar from './Searchbar';
function Home() {
    return (
        <div className="home-container">
            <div className='home'>
                <div className="container">
                    <div className="home-content">
                        <div><h1>A place to call home <br></br> on your next adventure</h1></div>
                        <div><p className='p-home'>Discover dreamy villas, houses, cabins, & more</p></div>
                        <button className="search-btn-find">Find yours</button>
                    </div>
                </div>
            </div>
            <Searchbar/>
        </div>

    );
}

export default Home;