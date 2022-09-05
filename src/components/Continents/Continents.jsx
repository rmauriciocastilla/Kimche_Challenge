import React from 'react'
import { Continent } from '../Continent/Continent';

export const Continents = ({filterCountries}) => {
    const setContinents = new Set();
    filterCountries.forEach(c=>setContinents.add(c.continent.name))
    return (
        <div>{Array.from(setContinents).map(cont=>(
            <Continent
                continent={cont}
                countries={filterCountries.filter(country=>country.continent.name===cont)}
            />
        ))}</div>
    )
}