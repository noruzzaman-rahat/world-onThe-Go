import React, { useState } from 'react';
import './Country.css';

const Country = ({country, handleVisitedCountries, handleVisitedFlags}) => {

    const [Visited, setVisited] = useState(false);

    // console.log(country.area.area)


    const handleVisited = () =>{
        
        //1st way

        // if(Visited){
        //     setVisited(false)
        // }
        // else{
        //     setVisited(true)
        // }

        //2nd way

        // setVisited(Visited ? false : true);

        //3rd system

        setVisited(!Visited)
        handleVisitedCountries(country);
    }

    return (
        // <div className= {`country border-lg text-center ${Visited ? 'country-visited' : 'country-not-visited'}`}>
        <div className= {`country ${Visited && 'country-visited'}`}>
            <img src={country.flags.flags.png} alt={country.flags.flags.alt}/>
            <h3>Name: {country.name.common}</h3>
            <p>Population: {country.population.population}</p>
            <p>Area: {country.area.area} {country.area.area > 300000 ? "Big Country" : "Small Country"}</p>

            <button onClick={handleVisited}>
                {Visited ? 'visited' : 'Not visited'}
            </button>

            <button onClick={() =>{handleVisitedFlags(country.flags.flags.png)}}>Add Visited Flag</button>
            
        </div>
    );
};

export default Country;