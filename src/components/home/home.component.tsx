import React from 'react';
import { Link } from 'react-router-dom';
import { BsFillCalendarDateFill } from 'react-icons/bs';

import './home.styles.css';

const Home: React.FC = () => {
  return (
    <div className="home-container">
      <h1>Family Task Tracker</h1>
      <div className="calendar-container">
        <Link to="/Colby" style={{ textDecoration: 'none', color: 'inherit' }}>
          <h2>
            Colby's Calendar <BsFillCalendarDateFill className="calendar-icon" />
          </h2>
        </Link>
        <Link to="/Natalie" style={{ textDecoration: 'none', color: 'inherit' }}>
          <h2>
            Natalie's Calendar <BsFillCalendarDateFill className="calendar-icon" />
          </h2>
        </Link>
      </div>
    </div>
  );
};

export default Home;