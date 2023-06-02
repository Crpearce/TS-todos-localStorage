import React from 'react';
import Form from '../form/form.component';

import Navigation from '../navigation/navigation.component';

import './colby.styles.css';

const Colby: React.FC = () => {
  return (
    <div className='schedule-container'>
      <Navigation />
      <Form name='Colby' />
    </div>
  );
};

export default Colby;