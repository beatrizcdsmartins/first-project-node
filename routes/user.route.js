const {AllUsers,CreateUser,UpdateUser, DeleteUser}= require('../ctrls/user.ctrl')
const {IDValidation} = require('../middlewares/userID.middleware')

const express        = require('express')
const router         = express.Router()

router.get('/all', AllUsers)  // GET -> apresentation

router.post('/create', CreateUser) // POST -> add things

router.put('/update/:id', IDValidation, UpdateUser) //  PUT ->  to update / change


router.delete('/delete/:id', IDValidation, DeleteUser)  // DELETE -> delete things

module.exports = router
