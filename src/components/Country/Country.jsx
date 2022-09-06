import React from 'react'
import './Country.css';
import {findFlagUrlByCountryName} from 'country-flags-svg';

export const Country = ({data}) => {
  const url = findFlagUrlByCountryName(data.name)
  console.log(url)
  return (
    <div className='country'>
      <div className='flex-title'>
        <img src={url} alt={`${data.name} flag`}/>
        <h4>{data.name}, {data.code}</h4>
      </div>
      <span>{data.native}</span>
      <p>Capital: {data.capital}</p>
      <p>Currency: {data.currency}</p>
      <p>Calling code: +{data.phone}</p>
    </div>
  )
}
