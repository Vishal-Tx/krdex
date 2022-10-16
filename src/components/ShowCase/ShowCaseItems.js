import React from 'react';
import "./ShowCaseItems.css";
import ShowCaseItem from "./ShowCaseItem";
import { items } from './Items';

const ShowCaseItems = () => {
  return (
    <div className='showCaseItems'>
    {items.map(({title, desc}, index)=>(
      <ShowCaseItem key={index} title={title} desc={desc}/>
    ))}
    </div>
  )
}

export default ShowCaseItems