import React from 'react'
import Select from 'react-select';
import emojiFlags from 'emoji-flags';

const Countries = ({countries, selectedCountry, onCountrySelect}) => {

    const options = countries.filter(country => country.iso2 ? true : false).map(country => {
        let flag = emojiFlags.countryCode(country.iso2).emoji;
        return  {value: country.iso2, label:`${flag}  ${country.name}`};
    })
    
    options.unshift({value: 'all', label:'All'});

    return (
        <div className='country-select'>
            <label htmlFor="countrySelect">Select Country</label>
            <Select options={options} 
                    id="countrySelect" 
                    defaultValue={options.find(o => o.value === selectedCountry)} 
                    onChange={ option => onCountrySelect(option)}
            />
        </div>
    )
} 

export default Countries;

{/* <select className="form-control" id="countrySelect" defaultValue={selectedCountry} onChange={(event)=> onCountrySelect(event)}>
    <option value="all">All</option>
    {countries.map((country, index) => {
        return <option key={index} value={country.iso2}>{country.name}</option>
    })}
</select> */}