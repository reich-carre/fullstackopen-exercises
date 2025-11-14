import { useState, useEffect } from 'react'
import "./index.css"
import Add from './components/Add'
import Filter from './components/Filter'
import Numbers from './components/Number'
import services from './services/persons'
import Notification from './components/Notification'


const App = () => {

  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterName, setFilterName] = useState('')
  const [notification, setNotification] = useState({ message: null, type: 'success' })

  
  useEffect(()=>{
    //console.log("effect")
      services.getAll()
      .then(personList => {
          setPersons(personList)
      })
  },[])

  const addName = (event)=>{
    event.preventDefault()
    const nameObject ={
      name: newName,
      number: newNumber
    }

    const existingPerson = persons.find(pers =>pers.name === newName)

    if (existingPerson){
        const id = existingPerson.id

       if (window.confirm(
          `Do you want to update the number of "${existingPerson.name}" 
          Old number: "${existingPerson.number}", new number: "${newNumber}" , `)){
          services
          .update(id, nameObject)
          .then(()=>{
             const updatedObject = persons.map(person => 
              person.id === id
              ? {...person, number : newNumber}
              : person
            )
            setPersons(updatedObject)  
            setNewName('')
            setNewNumber('')
          }) 
            .catch(error =>{
              //alert("this is the error", error.message)
              setNotification({message:`Information of ${existingPerson.name} has already been removed from server.`, type: 'error'})
              setTimeout(()=>{
                setNotification({message:null, type:'error'})
              },5000)
            })
       }   
    }
    else{
       
       services
        .addNew(nameObject)
        .then(returnedName => 
          setPersons(persons.concat(returnedName)))
      setNewName('')
      setNewNumber('')
      setNotification({message:`"${newName}" added succesfully!`, type:"succes"})
      setTimeout(()=>{
        setNotification({message:null, type:'succes'})
      },5000)
    }
     
  }

  const deleteName = (id)=>{
      const personName = persons.map(p => p.id === id? p.name : "")
      if(window.confirm(`Do you want to remove "${personName}" from the list`)){
        services
          .remove(id) 
            setPersons(persons.filter(person => person.id !== id))
      }else{
      console.log ("No name deleted")  
       }
  }

  const handleNewName = (event)=>{
      setNewName(event.currentTarget.value)
      
  }
  const handleNewNumber = (event)=>{
    setNewNumber(event.currentTarget.value)
  }

  const handleFilter = (event)=>{
    const value = event.target.value
    setFilterName(value)
  }

  const filteredPerson = persons.filter(person =>{
    const name = person.name.toLowerCase()
    if(name.includes(filterName.toLowerCase())){
      return true
    }
    return false
  })


  return (
    <div>
      <h2>Phonebook</h2>
          <Notification message={notification.message} type={notification.type}/>
          <Filter filter={handleFilter} value={filterName}/>
          <Add 
            addName={addName} 
            newName={newName}
            newNumber={newNumber}
            handleNewName={handleNewName}
            handleNewNumber={handleNewNumber}
          />
          <Numbers 
            filteredPerson={filteredPerson}
            deleteName={deleteName}
          />
    </div>
  )
}

export default App