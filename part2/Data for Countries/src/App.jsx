import {useEffect, useState} from "react"
import axios from "axios"
import './App.css'
import Country from './components/Country'
import Weather from "./components/Weather"


const App = ()=>{
  const [countries, setCountries] = useState(null)
  const [inputSearch, setInputSearch] = useState("")
  
useEffect(()=>{
  axios
    .get("https://studies.cs.helsinki.fi/restcountries/api/all")
    .then(response => {
      setCountries(response.data)
    })
    .catch(error => {
      console.log("there is an error: ", error)
    })
},[])

if(!countries){
  return null
}

const onSearch = (event) =>{
  event.preventDefault()
  console.log(event.target)
}


  const searchedCountry = countries.filter(country =>{
    const CountryName = country.name.common.toLowerCase()
    if(CountryName.includes(inputSearch.toLowerCase())){
      return true
    }else{
      return false
    }
  })
  
const handleInput = (event) =>{
  setInputSearch(event.target.value)
  //console.log(event.target.value)
}

const handleShow = (id)=>{
    searchedCountry.map(country => 
      country.cca2 === id 
      ? setInputSearch(country.name.common)
      : null  )
    console.log("clicked.id : ", id)
}



  return(
    <div className="content">
      <form onSubmit={onSearch}>
        <div>
          find countries: <input type="text" value={inputSearch} onChange={handleInput}/>
        </div>
      </form>

    <Country 
      searchedCountry={searchedCountry} 
      input={inputSearch}
      show={handleShow}
    />
    <Weather searchedCountry={searchedCountry}/> 


    </div>
  )
}

export default App