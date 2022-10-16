import React from 'react';
import "./ShowCaseSection.css";
import ShowCaseItems from "./ShowCaseItems";

const ShowCaseSection = () => {
  return (
    <div className='showCase'>
        <p className='showHeading'>HELPING BUSINESS OWNERS SINCE 2015</p>
        <ShowCaseItems />
    </div>
  )
}

export default ShowCaseSection