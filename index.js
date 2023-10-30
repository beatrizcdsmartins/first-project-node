const express = require('express')

const UserRouter = require('./routes/user.route')

const port = 3002
const app = express ()
app.use(express.json())

app.use('/users',UserRouter)

=======
const uuid = require('uuid')
const cors = require('cors')
const port = process.env.PORT || 3002
const app = express ()
app.use(express.json())

app.use(cors())

const Orders = []

const idvalidation = (request, response, next) =>{

    const {id} = request.params

    const index = Orders.findIndex(user => user.id === id)

    if (index < 0){
        return response.status(404).json({ message: "User not found"})
    }

    request.userIndex = index 
    request.userid=id
    next()

}
 
app.get('/', (request, response) =>{  // GET -> apresentation

    return response.json("hello, World!!")

})

app.get('/Orders', (request, response) =>{  // GET -> apresentation

    return response.json(Orders)

})

app.post('/Orders', (request, response) =>{ // POST -> add things
    const {name, order } = request.body

    const user = {id:uuid.v4(), order, name}

    Orders.push(user)

    return response.status(201).json(user)
})

app.put('/Orders/:id', idvalidation, (request, response) =>{ // PUT ->  to update / change


    const index = request.userIndex
    const {name, order} = request.body
    const id = request.userid

    const updateUser = {id, order, name}

    Orders[index]= updateUser

    return response.json(updateUser)

})

app.delete('/Orders/:id', idvalidation, (request, response) =>{ // DELETE

    const index = request.userIndex

    Orders.splice(index, 1)


    return response.status(204).json()

})

// port
app.listen(port, ()=>{
    console.log(`Server started on port ${port}💕`)
})
