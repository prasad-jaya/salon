const express = require('express')
const router = express.Router()
const mysql = require('mysql')
const bodyParser = require('body-parser')
const connection = getconnection();
router.use(bodyParser.urlencoded({extended: false}))
router.use(express.static('./public'))

router.get("/users",(req,res) => {
    // var user1 = {firstName:"Prasad", Lastname:"jayasundara"}
    // const user2 ={ firstName:"Jyaussinda", Lastname:"madu"}
    // res.json([user1,user2])
    

    connection.query("SELECT email FROM users where UserID=1",(err, rows,fields) =>{
        console.log("Its working")
        res.json(rows)


    })


})




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





//ConfigDatabase Connection
function getconnection(){

    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password:'',
        database: 'salon'
    })

    connection.connect(function (err){
        if(!err){
            console.log("Database Connected")
        }
        else{
            console.log("Error Database Connection")
        }
    })

    return connection
}


module.exports = router