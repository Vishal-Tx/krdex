import React from 'react';
import "./FeatureItem.css";

const FeatureItem = ({icon, title, desc}) => {
  return (
    <div className='featureItem'>
      {icon}
      <div className='featureTitle'><h2>{title}</h2></div>
      <div className='featureDesc'><p>{desc}</p></div>
      
    </div>
  )
}

export default FeatureItem