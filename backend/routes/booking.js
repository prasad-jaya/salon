const express = require('express')
const booking = express.Router()
const bodyParser = require('body-parser')
const cors = require('cors')



booking.use(express.static('./public'))
booking.use(cors())
booking.use(bodyParser.urlencoded({extended: false}))
booking.use(bodyParser.json());

const connection = require('../DBconnect')



//MAKE BOOK
booking.post('/make_book',(req, res) => {
    
    console.log("Last Nane:" + req.body.name)

    const Status = req.body.Status
    const styID = req.body.styID
    const SOWNERID = req.body.sOwnerID
    const sDate =req.body.sDate
    const sTime =req.body.sTime
    const Descrip = req.body.Description
  
    
    const querysrting ="Insert Into booking (Description,StylistID,SownerID,Book_Date,Book_Time,Status) values (?,?,?,?,?,?)"
    connection.query(querysrting, [Descrip,styID,SOWNERID,sDate,sTime,'Pending'], (err,results,fields) =>{
        if(err){
            console.log("Faild to insert" + err)
            res.sendStatus(500)
            return
        }

        console.log("Inserted",results.insertId);
        res.end();
    })
})

//CHECK PENDING BOOKING
booking.post('/pending_booking',(req, res) => {
    
    console.log("Last Nane:" + req.body.name)

    
    const styID = req.body.USERID
    
  
    
    const querysrting ="SELECT Book_ID,Book_Date,Description,Book_Time FROM booking WHERE StylistID = ? AND Status = 'PENDING'"
    connection.query(querysrting, [styID] ,(err,rows,fields) =>{
         
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

booking.post('/reject_booking',(req, res) => {
    
    console.log("Last Nane:" + req.body.name)

    
    const styID = req.body.USERID
    const bookID = req.body.BOODID
    
  
    
    const querysrting ="UPDATE booking SET Status = 'Reject' WHERE StylistID = ? AND Book_ID = ?"
    connection.query(querysrting, [styID,bookID] , (err,rows,fields) =>{
         
        if(err){
            console.log("Failed in Query "+err)
            res.sendStatus(404)
            return
        }
        else{
            console.log("Susscessfully Rejected Booking")
            res.json({msg:true,rows})
        }
    })
})


booking.post('/confirm_booking',(req, res) => {
    
    console.log("Last Nane:" + req.body.name)

    
    const styID = req.body.USERID
    const bookID = req.body.BOODID
    
  
    
    const querysrting ="UPDATE booking SET Status = 'InProcess' WHERE StylistID = ? AND Book_ID = ?"
    connection.query(querysrting, [styID,bookID] , (err,rows,fields) =>{
         
        if(err){
            console.log("Failed in Query "+err)
            res.sendStatus(404)
            return
        }
        else{
            console.log("Susscessfully confirm Booking")
            res.json({msg:true,rows})
        }
    })
})


booking.post('/my_booking',(req, res) => {
    
    console.log("Last Nane:" + req.body.name)

    
    const styID = req.body.USERID
    
  
    
    const querysrting ="SELECT Book_ID,Book_Date,Description,Book_Time FROM booking WHERE StylistID = ? AND Status = 'InProcess'"
    connection.query(querysrting, [styID] ,(err,rows,fields) =>{
         
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


booking.post('/done-project',(req, res) => {
    
    console.log("Last Nane:" + req.body.name)

    
   
    
  
    
    const styID = req.body.USERID
    const bookID = req.body.BOODID
    
  
    
    const querysrting ="UPDATE booking SET Status = 'Finished' WHERE StylistID = ? AND Book_ID = ?"
    connection.query(querysrting, [styID,bookID] , (err,rows,fields) =>{
         
        if(err){
            console.log("Failed in Query "+err)
            res.sendStatus(404)
            return
        }
        else{
            console.log("Susscessfully confirm Booking")
            res.json({msg:true,rows})
        }
    })
})



module.exports = booking