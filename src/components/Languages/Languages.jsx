import React from 'react'
import { Language } from '../Language/Language';

export const Languages = ({filterCountries}) => {
    const setLanguages = new Set();
    filterCountries.forEach(c=>c.languages.forEach(l=>setLanguages.add(l.name)))
    return (
        <div>{Array.from(setLanguages).map(lang=>(
          <Language
          language={lang}
          countries={filterCountries.filter(c=>c.languages.find(l=>l.name===lang))}
          />
        ))}</div>
    )
}