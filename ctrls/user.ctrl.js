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
    const index = request.userIndex
    const id = request.userid
    const {name, age} = request.body

    const updateUser = {id, name, age}

    users[index]= updateUser

    return response.json(updateUser)

}

function DeleteUser(request, response){

    const id    = request.userid
   
    const index = request.userIndex

    users.splice(index, 1)

    return response.status(204).json()

}

module.exports = {AllUsers,CreateUser,UpdateUser,DeleteUser,users}
