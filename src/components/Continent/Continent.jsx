import React from 'react'
import { Country } from '../Country/Country';
import './Continent.css'

export const Continent = ({continent, countries}) => {
    return (
        <div>
            <h2 className='title-continent'>{continent}</h2>
            <div className='country-continent'>
                {countries.map((c,i)=>(
                    <Country
                        data={c}
                        key={c+i}
                    />
                ))}
            </div>
        </div>
    )
}
