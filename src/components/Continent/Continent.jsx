import React from 'react'
import { Country } from '../Country/Country';
export const Continent = ({continent, countries}) => {
    return (
        <div>
            <h2>{continent}</h2>
            <div>
                {countries.map(c=>(
                    <Country
                        data={c}
                    />
                ))}
            </div>
        </div>
    )
}
