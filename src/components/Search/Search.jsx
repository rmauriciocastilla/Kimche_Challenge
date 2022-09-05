import React,{ useState } from 'react';
import { Continents } from '../Continents/Continents';
import { Languages } from '../Languages/Languages';
import './Search.css';

export const Search = ({countries}) => {
    const [allCountries,setAllCountries] = useState(countries);
    const [filterCountries,setFilterCountries] = useState([]);
    const [search,setSearch] = useState('');
    const [filter,setFilter] = useState('language');
    let regExp;

    const handleChange = (e)=>{
        e.preventDefault();
        setSearch(()=>e.target.value)
        if(!e.target.value.trim().length){
            setFilterCountries([])
        }else{
            regExp = new RegExp(e.target.value.trim(),'i');
            setFilterCountries(allCountries.filter(c=>regExp.test(c.name)))
        }
    }
    return(
        <div>
            <div className='input-container'>
                <input value={search} onChange={handleChange} placeholder='Search a country' />
                <i className="fa-solid fa-magnifying-glass"></i>
            </div>
            <div className='groupBy-container'>
                <h2>Group By:</h2>
                <div>
                    <button onClick={()=>setFilter('language')}>Language</button>
                    <button onClick={()=>setFilter('continent')}>Continent</button>
                </div>
            </div>
            {
                filterCountries.length &&
                filter === 'language' ? <Languages filterCountries={filterCountries}/> : <Continents filterCountries={filterCountries}/>
            }
        </div>
    )

}
