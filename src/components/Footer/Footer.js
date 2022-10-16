import React from 'react';
import "./Footer.css";
import { footerLogo } from './footerLogo';

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footerLogo'>{footerLogo}</div>
        <p className='footerText'>©2022 Minions Ventures Pvt Ltd</p>
       
    </div>
  )
}

export default Footer