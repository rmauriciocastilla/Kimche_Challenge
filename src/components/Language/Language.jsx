import React from 'react'
import { Country } from '../Country/Country'

export const Language = ({language,countries}) => {

    return (
    <div>
        <h2>{language}</h2>
        {
            countries.map(c=>(
                <Country
                    data={c}
                />
            ))
        }
    </div>
  )
}
