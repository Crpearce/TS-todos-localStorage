import React from 'react';
import { AiOutlineHome } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import './navigation.styles.css';

const Navigation: React.FC = () => {
  return (
    <div className='navigation-container'>
      <h1 className='fam-header'>Family Calendar</h1>
      <Link to='/'>
        <AiOutlineHome className='icon' />
      </Link>
    </div>
  );
};

export default Navigation;
