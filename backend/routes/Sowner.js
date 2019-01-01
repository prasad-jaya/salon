const express = require('express')
const salon = express.Router()
const bodyParser = require('body-parser')

const cors = require('cors')


salon.use(express.static('./public'))
salon.use(cors())
salon.use(bodyParser.urlencoded({extended: false}))
salon.use(bodyParser.json());

salon.use(express.static('./public'))


const connection = require('../DBconnect')

salon.post('/create_new_salon_profile',(req, res) => {
    console.log("create new usersdsdsdsd")
   

  
    const SalonID = req.body.salonid
    const firstname = req.body.create_first_name
    const lastname = req.body.create_last_name
    const addresss = req.body.craete_address
    const city = req.body.City
    const phoneno = req.body.craete_phoneno
   
    
    // console.log("cccccccceeeeeeeeee ",addresss,city,phoneno ,description,price,stylistrole,skills);
    
    const query ="Insert Into salon (SalonID,FirstName,LastName,Address,City,PhoneNo) values (?,?,?,?,?,?)"
    connection.query(query, [SalonID,firstname,lastname,addresss,city,phoneno], (err,results,fields) =>{
        if(err){
            console.log("Faild to insert" + err)
            res.sendStatus(500)
            return
        }

        console.log("Inserted",results.insertId);
        res.end();
    })
})


module.exports = salon