import React from 'react';
import "./ShowCaseItem.css"

const ShowCaseItem = ({title, desc}) => {
  return (
    <div className='showCaseItem'>
        <div className='showCaseItemHeading'>
        <p>{title}</p>
        </div>
        <div className='showCaseItemDesc'>
        <p>{desc}</p>
        </div>
    
    
    </div>
  )
}

export default ShowCaseItem