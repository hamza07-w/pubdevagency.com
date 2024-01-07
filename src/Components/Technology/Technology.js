import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Technology.css'


const Technology = (props) => {
  return (
    <div className="p-4 flex flex-col items-center justify-center hover:text-dark text-slate-900 transition-all duration-300 hover:text-blue-600 rounded-lg">
      <FontAwesomeIcon icon={props.icon} className="custom-icon" />
    </div>
  );
};

export default Technology;
