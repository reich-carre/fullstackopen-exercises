
const Header = (props)=>{
  return(
    <h1>{props.title}</h1>
  )  
}

function Part({part}){
  //console.log(part)
  return(
    <>
      {part.map((p, index )=> <p key={index} >{p.name} : {p.exercises}</p>)}
    </>

  )
}

const Content = ({part})=>{
  //console.log(part.map(p=> p.name))

  return(
    <>
   <Part part={part} />
  </>
  )
}

const Total = ({part})=>{
  console.log(part)
  return(
    <p>Number of exercises:{part[0].exercises + part[1].exercises + part[2].exercises}</p>
  )
}



const App = () => {
  const course = 'Half Stack application development'
   const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return (
    <div>
      <Header title={course}/> 
      <Content part={parts}/>  
      <Total part={parts} />
    </div>
  )
}

export default App