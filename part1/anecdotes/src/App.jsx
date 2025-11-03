import { useState } from 'react'

const Button = ({onClick, text})=> <button onClick={onClick}>{text}</button>


const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0))

  const nextAnectode = ()=> {
    const random = Math.floor(Math.random()*anecdotes.length)
    setSelected(random)
  }

  const handleVote = () =>{
    const currentAnectodeIndex = selected;
    const copyVote =[...votes];
    copyVote[currentAnectodeIndex] += 1;
    setVotes(copyVote)

  }

  const HighestRate = () =>{
    const maxVote = Math.max(...votes)
    const highVoteIndex = votes.indexOf(maxVote);
    //console.log(maxVote)
    //console.log(anecdotes[highVoteIndex])

    if(maxVote === 0){
      return <h3>No anectode voted yet!</h3>

    }else{
    return(
      <>
      <h1>Anectode with most votes</h1>
      <p>{anecdotes[highVoteIndex]}</p>
      <p>has {maxVote} votes</p>
      </>
    )}

  }


  return (
    <div>
      <p>{anecdotes[selected]}</p>

      <p>has {votes[selected]} votes</p>
      <div>
        <Button onClick={nextAnectode} text='next anectode'/>
        <Button onClick={handleVote} text='vote'/>
      </div>
    <HighestRate />

    </div>
  )
}

export default App
