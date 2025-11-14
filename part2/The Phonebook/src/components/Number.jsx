const Numbers = ({filteredPerson, deleteName})=>{
  return(
    <div>
        <h2>Numbers</h2>
        <ul>
          {filteredPerson.map(person =>  <li key={person.id}>{person.name}: {person.number} 
            <button onClick={()=>deleteName(person.id)}>delete</button>
          </li>)}
        </ul>
      </div>

  )
}

export default Numbers