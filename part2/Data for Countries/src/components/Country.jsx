
const Country = ({searchedCountry, input, show})=>{
  if(!input){
    return <p></p>
  }
  if(input && searchedCountry.length === 0){
    return <p>no result that matches your search!</p>
  }
  if(searchedCountry.length > 10){
    return <p>Too many matches, specify another filter</p>
  }
  else{
      if(searchedCountry.length === 1){
      const languages = []
      searchedCountry.map(country => {
         for(const [code, name] of Object.entries(country.languages)){
                 languages.push({code,name})//          
            }
        })

        return (
            <div>
                {searchedCountry.map(country => 
                <div key={country.cca2}>
                  <h1 >{country.name.common}</h1>
                  <p>Capital : {country.capital[0]} <br/>
                      Area : {country.area}
                  </p>
                  <h2>Languages</h2>
                  <ul>
                    {languages.map(lang => <li key={lang.code}>{lang.name}</li> )}
                  </ul>
                    <img className="flag" src={country.flags.png} alt={country.flags.alt}/>
                </div>
                )}

            </div>

        )
      }
      else{
         return (
            <ul>
              {searchedCountry.map(country => <li key={country.cca2}>{country.name.common}  <button onClick={()=>show(country.cca2)}>Show</button></li>)} 
            </ul>
          )
      }
      
    }
}


export default Country