const {AllUsers,CreateUser,UpdateUser, DeleteUser}= require('../ctrls/user.ctrl')

const express        = require('express')
const router         = express.Router()

router.get('/all', AllUsers)  // GET -> apresentation

router.post('/create', CreateUser) // POST -> add things

router.put('/update/:id', UpdateUser) //  PUT ->  to update / change


router.delete('/delete/:id', DeleteUser)  // DELETE -> delete things

module.exports = router