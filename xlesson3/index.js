const express = require('express');
const cors = require ('cors')
const app = express()
const PORT = process.env.PORT || 3001

app.use(cors())
app.use(express.json())
app.use(express.static('dist'))

const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: 'unknown endpoint' })
}


const requestLogger = (request, response, next) => {
  console.log('Method:' , request.method)
  console.log('Path:  ', request.path)
  console.log('Body:  ', request.body)
  console.log('---')
  next()
}

app.use(requestLogger)

let notes = [
  {
    id: "1",
    content: "HTML is easy",
    important: true
  },
  {
    id: "2",
    content: "Browser can execute only JavaScript",
    important: false
  },
  {
    id: "3",
    content: "GET and POST are the most important methods of HTTP protocol",
    important: true
  }
]

const generatedId = ()=> {
     const maxId = notes.length > 0
        ? Math.max(...notes.map(n => Number(n.id)))
        : 0
    return String(maxId + 1)
}

console.log(generatedId())
app.get('/', (req, res)=>{
    res.send('<h1>Hello world</h1>')
})

app.get('/api/notes/:id', (request, response) => {
  const id = request.params.id
  const note = notes.find(note => note.id === id)
  
  if(note){
    response.json(note)
  }else{
    response.status(404).end()
  }
})

app.post('/api/notes', (req, res)=>{
   
    const body = req.body
  
    if(!body.content){
        return response.status(400).json({
            error: 'content missing'
        })
    }

    const note = {
      content: body.content,
      important: body.important || false,
      date: new Date(),
      id: generatedId() ,
    }

    notes = notes.concat(note)
    res.json(note)
})

app.delete('/api/notes/:id', (req, res)=>{
    const id = req.params.id 
    notes = notes.filter(note => note.id !== id)
    
    res.send(notes)
    res.status(204).end()

})

app.get('/api/notes', (request, response) => {
  response.json(notes)
})

app.use(unknownEndpoint)


app.listen(PORT,()=>{
    console.log(`server is running on Port: ${PORT}`)
})