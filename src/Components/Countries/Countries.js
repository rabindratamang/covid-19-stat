import React from 'react'

const Countries = ({countries, selectedCountry, onCountrySelect}) => {
    return (
        <div className='country-select'>
            <label for="countrySelect">Select Country</label>
            <select className="form-control" id="countrySelect" onChange={(event)=> onCountrySelect(event)}>
                <option value="all">All</option>
                {countries.map((country, index) => {
                    return <option key={index} selected={selectedCountry === country.iso2} value={country.iso2}>{country.name}</option>
                })}
            </select>
        </div>
    )
} 

export default Countries;