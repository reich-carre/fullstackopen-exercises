



const Course = ({courses})=>{


  const exoTotal = courses.map((course)=> 
      course.parts.reduce((sum, p)=>{
      console.log(sum)
       return sum + p.exercises
        },0
    ))


  console.log(exoTotal);

 return (
      <>
        {courses.map((course, index) =>
            (<div key={course.id}>
                <h2> {course.name}</h2>
                {course.parts.map(p => {
                return(
                <div key={p.id}>
                    <p >{p.name} {p.exercises}</p>
                </div>)      
                })}
          <p><strong>Total Exercises {exoTotal[index]}</strong></p>
          </div>
        ))}

      </>
    )
  }

export default Course