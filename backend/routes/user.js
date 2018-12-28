const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
const cors = require('cors')



router.use(express.static('./public'))
router.use(cors())
router.use(bodyParser.urlencoded({extended: false}))
router.use(bodyParser.json());

const connection = require('../DBconnect')






router.post('/get',(req,res)=>{

    console.log("heloooooowwww")
    const typeword = req.body.word
    console.log(typeword);

    if(typeword==''){
        console.log("huuuu");
        res.json({msg:true,rows})
    }
    
    const sqlq ="SELECT UserID,FirstName,Email,Password FROM users WHERE FirstName LIKE '"+typeword+"%'"
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





router.get("/users",(req,res) => {
    // var user1 = {firstName:"Prasad", Lastname:"jayasundara"}
    // const user2 ={ firstName:"Jyaussinda", Lastname:"madu"}
    // res.json([user1,user2])
    

    connection.query("SELECT email FROM users where UserID=1",(err, rows,fields) =>{
        console.log("Its working")
        res.json(rows)


    })


})



//SIGNUP
router.post('/user_create',(req, res) => {
    console.log("create new user")
    //res.end();

    //console.log("First Nane:" + req.body.create_first_name)
    console.log("Last Nane:" + req.body.name)

    const fname = req.body.create_first_name
    const lname = req.body.create_last_name
    const email = req.body.create_Email
    const pass = req.body.create_Password

    const querysrting ="Insert Into users (FirstName,LastName,Email,Password) values (?,?,?,?)"
    connection.query(querysrting, [fname,lname,email,pass], (err,results,fields) =>{
        if(err){
            console.log("Faild to insert" + err)
            res.sendStatus(500)
            return
        }

        console.log("Inserted",results.insertId);
        res.end();
    })
})


router.post('/make_bookk',(req, res) => {
    console.log("create new user")
    //res.end();

    //console.log("First Nane:" + req.body.create_first_name)
    console.log("Last Nane:" + req.body.name)

    const fname = req.body.create_first_name
    const lname = req.body.create_last_name
    const email = req.body.create_Email
    const pass = req.body.create_Password

    const querysrting ="Insert Into booking (StylistID,Timeslot,Status) values (?,?,'PENDING')"
    connection.query(querysrting, [styID,Timeslot], (err,results,fields)  =>{
        if(err){
            console.log("Faild to insert" + err)
            res.sendStatus(500)
            return
        }

        console.log("Inserted",results.insertId);
        res.end();
    })
})


//LOGIN
router.post('/user_login',(req, res)  =>{
    const email= req.body.Email
    const pass = req.body.Password

    console.log(email)

    const sqlq ="SELECT Email,Password FROM users WHERE Email=? AND Password=?"
    connection.query(sqlq,[email,pass],(err,rows,fields) =>{
        
        if(err){
            console.log("Failed in Query")
            res.sendStatus(404)
            return
        }
        else{
            console.log("Susscessfully Executed")
            res.json(rows)
            res.end();
        }

        console.log(rows)
        if(rows=='')
        {
            //IF USER PASSWORD OR EMAIL WRONG
            console.log("Its Empty")
        }
        if(rows!=''){
            //IF USER PASSWORD OR EMAIL CORRECT
            console.log("Its there")
        }
    })
})





router.get("/", (req, res) =>{
    console.log("Response to root")
    res.send("Hello from root")

    console.log("User Id" + req.param.id)

 
    router.connection.query("SELECT * FROM users",(err, rows,fields) =>{
        console.log("Its working")
        res.send(res)
    })
   
})







module.exports = router