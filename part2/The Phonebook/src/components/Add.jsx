const Add = ({addName, newName, handleNewName, handleNewNumber, newNumber})=>{
  return(
    <>
      <h2>Add a new</h2>
      <form onSubmit={addName}>
        <div>
          name:<input  
                value={newName}
                onChange={handleNewName} 
              />
        </div>
        <div>
          number: <input 
            value={newNumber}
            onChange={handleNewNumber} 
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    
    </>
  )
}


export default Add