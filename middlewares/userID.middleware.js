const {users} = require('../ctrls/user.ctrl')

const IDValidation = (request, response, next) => {
  const {id}  = request.params
  const index = users.findIndex(user => user.id === id)

  if(index < 0){
    return response.status(404).json({message: "User not found"})
  }
  request.userIndex = index
  request.userid    = id

  next()

}

module.exports = {IDValidation}
