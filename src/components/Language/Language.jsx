import React from 'react'
import { Country } from '../Country/Country'
import './Language.css'
export const Language = ({language,countries}) => {

    return (
    <div>
        <h2 className='title-language'>{language}</h2>
        <div className='country-language'>{
            countries.map((c,i)=>(
                <Country
                    data={c}
                    key={c+i}
                />
            ))
        }
        </div>
    </div>
  )
}
