const uuid = require('uuid')

const users = []

function AllUsers(request, response) {
    return response.json(users)
}
function CreateUser(request, response) { 
    const {name, age } = request.body

    const user = {id:uuid.v4(), name, age}

    users.push(user)

    return response.status(201).json(user)

}
function UpdateUser(request, response){
    const {id} = request.params
    const {name, age} = request.body

    const updateUser = {id, name, age}

    const index = users.findIndex(user => user.id === id)

    if (index < 0){
        return response.status(404).json({ message: "User not found"})
    }

    users[index]= updateUser


    return response.json(updateUser)

}

function DeleteUser(request, response){

    const {id} = request.params
   
    const index = users.findIndex(user => user.id === id)

    if (index < 0){
        return response.status(404).json({ message: "User not found"})
    }

    users.splice(index, 1)



    return response.status(204).json()

}

module.exports = {AllUsers,CreateUser,UpdateUser}