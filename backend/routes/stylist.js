const express = require('express')
const sty = express.Router()
const bodyParser = require('body-parser')

sty.use(bodyParser.urlencoded({extended: false}))
sty.use(express.static('./public'))


const connection = require('../DBconnect')


console.log("Heloooooo")

sty.post('/create_stylist',(req, res) => {
    console.log("create new user")
    //res.end();

    //console.log("First Nane:" + req.body.create_first_name)
    console.log("Last Nane:" + req.body.name)

    const address = req.body.create_address
    const phoneno = req.body.create_phoneno
    
    const querysrting ="Insert Into stylist (StylistID,Name,Email,Address,Phone_No) values (1300,?,?,?,?)"
    connection.query(querysrting, [phoneno,phoneno,address,phoneno], (err,results,fields) =>{
        if(err){
            console.log("Faild to insert" + err)
            res.sendStatus(500)
            return
        }

        console.log("Inserted",results.insertId);
        res.end();
    })
})

module.exports = sty
