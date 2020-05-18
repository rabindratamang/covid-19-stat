import React from 'react'

const Countries = ({countries, selectedCountry, onCountrySelect}) => {
    return (
        <div className='country-select'>
            <label htmlFor="countrySelect">Select Country</label>
            <select className="form-control" id="countrySelect" defaultValue={selectedCountry} onChange={(event)=> onCountrySelect(event)}>
                <option value="all">All</option>
                {countries.map((country, index) => {
                    return <option key={index} value={country.iso2}>{country.name}</option>
                })}
            </select>
        </div>
    )
} 

export default Countries;