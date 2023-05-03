const express = require('express')
const uuid = require('uuid')
const cors = require('cors')
const port = process.env.PORT || 3001
const app = express ()
app.use(express.json())

app.use(cors())

const users = []

const idvalidation = (request, response, next) =>{

    const {id} = request.params


    const index = users.findIndex(user => user.id === id)

    if (index < 0){
        return response.status(404).json({ message: "User not found"})
    }

    request.userIndex = index 
    request.userid=id
    next()

}
 
app.get('/users', (request, response) =>{  // GET -> apresentation

    return response.json(users)

})

app.post('/users', (request, response) =>{ // POST -> add things
    const {name, order } = request.body

    const user = {id:uuid.v4(), order, name}

    users.push(user)

    return response.status(201).json(user)

})

app.put('/users/:id', idvalidation, (request, response) =>{ // PUT ->  to update / change


    const index = request.userIndex
    const {name, order} = request.body
    const id = request.userid

    const updateUser = {id, order, name}

    users[index]= updateUser

    return response.json(updateUser)

})

app.delete('/users/:id', idvalidation, (request, response) =>{ // DELETE

    const index = request.userIndex

    users.splice(index, 1)


    return response.status(204).json()

})

// port
app.listen(port, ()=>{
    console.log(`Server started on port ${port}💕`)
})