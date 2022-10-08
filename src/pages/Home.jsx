import React from 'react';
import './Home.css'
import { Link } from 'react-router-dom'
const Home = () => {
    return (
        <div className='home'>
            <h1>Egg</h1>
            <div className="home__header">
                <div className="home__headerLeft">
                    <Link to='about'>About</Link>
                </div>
                <div className="home__headerRight">

                </div>
            </div>
            <div className="home__body">

            </div>
        </div>
    );
}

export default Home;
