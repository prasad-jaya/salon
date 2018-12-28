const express = require('express')
const booking = express.Router()
const bodyParser = require('body-parser')
const cors = require('cors')



booking.use(express.static('./public'))
booking.use(cors())
booking.use(bodyParser.urlencoded({extended: false}))
booking.use(bodyParser.json());

const connection = require('../DBconnect')




booking.post('/make_book',(req, res) => {
    
    console.log("Last Nane:" + req.body.name)

    const Status = req.body.Status
    const styID = req.body.styID
    const Today = req.body.Dates
    const sDate =req.body.sDate
    const sTime =req.body.sTime
  
    
    const querysrting ="Insert Into booking (Date,StylistID,SownerID,Book_Date,Book_Time,Status) values (?,?,5,?,?,?)"
    connection.query(querysrting, [Today,styID,sDate,sTime,Status], (err,results,fields) =>{
        if(err){
            console.log("Faild to insert" + err)
            res.sendStatus(500)
            return
        }

        console.log("Inserted",results.insertId);
        res.end();
    })
})


booking.post('/pending_booking',(req, res) => {
    
    console.log("Last Nane:" + req.body.name)

    
    const styID = req.body.styID
    
  
    
    const querysrting ="SELECT Book_Date,Description,Book_Time FROM booking WHERE StylistID = '15' AND Status = 'PENDING'"
    connection.query(querysrting,  (err,rows,fields) =>{
         
        if(err){
            console.log("Failed in Query "+err)
            res.sendStatus(404)
            return
        }
        else{
            console.log("Susscessfully Executed")
            res.json({msg:true,rows})
        }
    })
})

module.exports = booking