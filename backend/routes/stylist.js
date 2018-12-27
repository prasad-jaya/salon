const express = require('express')
const sty = express.Router()
const bodyParser = require('body-parser')

const cors = require('cors')


sty.use(express.static('./public'))
sty.use(cors())
sty.use(bodyParser.urlencoded({extended: false}))
sty.use(bodyParser.json());

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


sty.post('/get/stylist',(req,res)=>{

    
    const ID = req.body.word
    console.log("addddooo",ID);

    if(ID==''){
        console.log("huuuuIIII");
        res.json({msg:true,rows})
    }
    
    const sqlq ="SELECT FirstName,Email,Location,Role,Description,Stars,Skills,Hr_Rate FROM stylist WHERE StylistID = '"+ID+"'"
    connection.query(sqlq,(err,rows,fields) =>{
        
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




module.exports = sty
