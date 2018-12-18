const express = require('express')
const owner = express.Router()
const bodyParser = require('body-parser')

owner.use(bodyParser.urlencoded({extended: false}))
owner.use(express.static('./public'))


const connection = require('../DBconnect')


console.log("Heloooooo")

owner.post('/create_owner',(req, res) => {
    console.log("create new user")
    //res.end();

    //console.log("First Nane:" + req.body.create_first_name)
    console.log("Last Nane:" + req.body.name)

    const address = req.body.create_address
    const phoneno = req.body.create_phoneno
    
    const querysrting ="Insert Into salonowner (OwnerID,Name,Email) values (11,?,?)"
    connection.query(querysrting, [address,phoneno], (err,results,fields) =>{
        if(err){
            console.log("Faild to insert" + err)
            res.sendStatus(500)
            return
        }

        console.log("Inserted",results.insertId);
        res.end();
    })
})

module.exports = owner
