import React from 'react'

export const Languages = ({filterCountries}) => {
    const setLanguages = new Set();
    filterCountries.forEach(c=>c.languages.forEach(l=>setLanguages.add(l.name)))
    console.log(filterCountries)
    return (
        <div>{Array.from(setLanguages).join(', ')}</div>
    )
}