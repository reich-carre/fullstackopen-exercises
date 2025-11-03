import { useState } from 'react'

const Button = ({onClick, text}) => <button onClick={onClick}>{text}</button>

const StatisticLine =({text, value})=> {

  if(value === 0 ){ // can add || value == 0.0 to hide average and positive if the value is zero
      return (
    <tr>
      <td></td>
    </tr>
      )
  }else{
      return(
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
  }
  
}


const Statistics = ({good, neutral, bad}) => {
  //console.log( good, neutral, bad)
    const all = good + neutral + bad
    const totalFeed = (good*1) + (neutral * 0 ) + (bad * -1)
    const average = totalFeed / all
    const positive = (good/all)*100
      if (all === 0){
        return <p>No feedback given</p>
      }else{
          return(
            <table>
              <tbody>
                <StatisticLine text="Good" value={good} />
                <StatisticLine text="Neutral" value={neutral} />
                <StatisticLine text="Bad" value={bad} />
                <StatisticLine text="Average" value={average.toFixed(1)} />
                <StatisticLine text="positive" value={positive.toFixed(1) + " %"}/>
              </tbody>
            </table>
      )}
}

const App = ()=>{
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const clickGood = () => setGood(good + 1)
  const clickNeutral = () => setNeutral(neutral + 1)
  const clickBad = () => setBad(bad + 1)



  return(
    <div>
        <h1>Hello There!</h1>

        <Button onClick={clickGood} text="Good" />
        <Button onClick={clickNeutral} text="Neutral" />
        <Button onClick={clickBad} text="Bad" />

        <h2>Statistics</h2>
        <Statistics 
        good={good}
        bad={bad} neutral={neutral}
        />
        
    </div>
  )
}

export default App