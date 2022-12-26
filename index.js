const express = require('express')
const UserRouter = require('./routes/user.route')
const port = 3003
const app = express ()
app.use(express.json())

app.use('/users',UserRouter)

app.listen(port, ()=>{
    console.log(`Server started on port ${port}💕`)
})
