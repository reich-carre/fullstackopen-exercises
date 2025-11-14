 const Filter = ({filter, value})=>{
    
      return(
          <div>filter shown with: 
            <input onChange={filter} value={value}/>
          </div>
      )
  }
 export default Filter