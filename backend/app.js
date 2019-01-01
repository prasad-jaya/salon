const express = require('express')
const app = express()


const router = require('./routes/user')
const sty = require('./routes/stylist')
const owner = require('./routes/Owner')
const booking = require('./routes/booking')
const salon = require('./routes/Sowner')


app.use(router)
app.use(sty)
app.use(owner)
app.use(booking)
app.use(salon)











// localhost port:3005
app.listen(3005, ()=>{
    console.log("server is running on port 3005")
})