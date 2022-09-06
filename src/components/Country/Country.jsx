import React from 'react'
import './Country.css';
import {findFlagUrlByCountryName} from 'country-flags-svg';
import imageNotFound from './imageNotFound.jpg';

export const Country = ({data}) => {
  const url = findFlagUrlByCountryName(data.name)
  return (
    <div className='country'>
      <h3><img src={url?url:imageNotFound} alt={data.name}/> {data.name}, {data.code}</h3>
      <span>📢{data.native}</span>
      <p>🏙 Capital: {data.capital?data.capital:'Not Found😥'}</p>
      <p>💲 Currency: {data.currency?data.currency:'Not Found😥'}</p>
      <p>📲 Calling code: +{data.phone}</p>
    </div>
  )
}
