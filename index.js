const express = require('express')
const uuid = require('uuid')
const port = 3002
const app = express ()
app.use(express.json())




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
    const {name, age } = request.body

    const user = {id:uuid.v4(), name, age}

    users.push(user)

    return response.status(201).json(user)

})

app.put('/users/:id', idvalidation, (request, response) =>{ // PUT ->  to update / change


    const index = request.userIndex
    const {name, age} = request.body
    const id = request.userid

    const updateUser = {id, name, age}

    

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