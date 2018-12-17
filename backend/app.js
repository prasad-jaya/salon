const express = require('express')
const app = express()


const router = require('./routes/user')


app.use(router)











// localhost port:3005
app.listen(3005, ()=>{
    console.log("server is running on port 3005")
})