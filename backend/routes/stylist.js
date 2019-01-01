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

sty.post('/create_new_stylist_profile',(req, res) => {
    console.log("create new usersdsdsdsd")
   

  
    const StylistID = req.body.stylistid
    const firstname = req.body.create_first_name
    const lastname = req.body.create_last_name
    const addresss = req.body.craete_address
    const city = req.body.City
    const phoneno = req.body.craete_phoneno
    const description = req.body.Description
    const price = req.body.craete_price
    const stylistrole = req.body.create_Stylistrole
    const skills = req.body.Skill
    
    console.log("cccccccc ",addresss,city,phoneno ,description,price,stylistrole,skills);
    
    const query ="Insert Into stylist (StylistID,FirstName,LastName,Address,City,StylistRole,Description,PhoneNo,Hr_Rate,Skills,Stars) values (?,?,?,?,?,?,?,?,?,?,0)"
    connection.query(query, [StylistID,firstname,lastname,addresss,city,stylistrole,description,phoneno,price,skills], (err,results,fields) =>{
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


sty.post('/stylist_load_profile',(req,res)=>{

    
    const ID = req.body.word
    console.log("addddooo",ID);

    if(ID==''){
        console.log("huuuuIIII");
        res.json({msg:true,rows})
    }
    
    const sqlq ="SELECT FirstName,City,StylistRole,Description,Stars,Skills,Hr_Rate FROM stylist WHERE StylistID = '"+ID+"'"
    connection.query(sqlq,(err,rows,fields) =>{
        
        if(err){
            console.log("Failed in Query  Stylist Load Profile"+err)
            res.sendStatus(404)
            return
        }
        else{
            console.log("Susscessfully Executed Stylist Load Profile")
            res.json({msg:true,rows})
        }
    })
    
    
    
})


sty.post('/updateprofile',(req,res)=>{

    
    const ID = req.body.USERID
    const FirstName = req.body.FName
    const city = req.body.City
    const des = req.body.Description
    const skill = req.body.Skill
    const Rate = req.body.rate
    console.log("addddooo",ID);

    if(ID==''){
        console.log("huuuuIIII");
        res.json({msg:true,rows})
    }
    
    const sqlq ="UPDATE stylist SET FirstName = ?,Email = 'halo@dfg', Location = ?, Role = 'Stylist' ,Description = ?,Skills = ?,Hr_Rate = ? WHERE StylistID = '"+ID+"'"
    connection.query(sqlq,[FirstName,city,des,skill,Rate] ,(err,rows,fields) =>{
        
        if(err){
            console.log("Failed in Query "+err)
            res.sendStatus(404)
            return
        }
        else{
            console.log("Susscessfully Executed")
            const sqlq ="SELECT FirstName,Email,Location,Role,Description,Stars,Skills,Hr_Rate FROM stylist WHERE StylistID = '"+ID+"'"
            connection.query(sqlq,(err,rowss,fields) =>{
        
            if(err){
                console.log("Failed in Query "+err)
                res.sendStatus(404)
                return
            }
            else{
                console.log("Susscessfully Executed")
                res.json({msg:true,rowss})
            }
        })
       
           
        }
    })
    
    
    
})




module.exports = sty
