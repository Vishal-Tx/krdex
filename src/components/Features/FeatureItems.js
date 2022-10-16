import React from 'react';
import "./FeatureItems.css";
import FeatureItem from './FeatureItem';
import featureInfo  from './Icons';

const FeatureItems = () => {
  
  return (
    <>
    {featureInfo.map(({icon, title, desc}, index)=>(
      <FeatureItem key={index} icon={icon} title={title} desc={desc}/>
    ))}
    </>
  )
}

export default FeatureItems